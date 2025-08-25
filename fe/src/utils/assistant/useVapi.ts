import type { AssistantOverrides } from "./../../../node_modules/@vapi-ai/web/dist/api.d";
import { useEffect, useState, useRef } from "react";
import { vapi } from "./vapi.sdk";
import type { CallRecord } from "./../../types/conversation.type";
// import { helplineAssistant } from "./helpline.assistant";
import { squad } from "../squad/squad";
import { callData as demoCallData } from "../../../public/callData";
import formatDateForDisplay from "../formatDate";
import formatTime from "../formatTime";
import { teenageAssistantNoah, teenageAssistantOlivia } from "./teenage.assistant";

export const CALL_STATUS = {
  INACTIVE: "inactive",
  ACTIVE: "active",
  LOADING: "loading",
  ERROR: "error",
} as const;

export type CALL_STATUS_TYPE = (typeof CALL_STATUS)[keyof typeof CALL_STATUS];

export function useVapi() {
  // loading demo dummy data here
  const [callData, setCallData] = useState<CallRecord[]>(demoCallData);
  const currentCallIdRef = useRef<string | null>(null);


  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [callStatus, setCallStatus] = useState<CALL_STATUS_TYPE>(
    CALL_STATUS.INACTIVE,
  );
  const [audioLevel, setAudioLevel] = useState(0);

  const [callDuration, setCallDuration] = useState(0);

  // Only used for old triage demo
  useEffect(() => {
    localStorage.setItem("callRecords", JSON.stringify(callData));
  }, [callData]);

  useEffect(() => {
    if (callStatus === CALL_STATUS.ACTIVE) {
      const interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
    if (callStatus === CALL_STATUS.INACTIVE) {
      setCallDuration(0);
    }
  }, [callStatus, isSpeechActive]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onSpeechStart = () => setIsSpeechActive(true);
    const onSpeechEnd = () => {
      console.log("Speech has ended");
      setIsSpeechActive(false);
    };

    const onCallStartHandler = () => {
      console.log("Call has started");
      setCallStatus(CALL_STATUS.ACTIVE);
    };

    const onCallEnd = () => {
      console.log("Call has stopped");
      setCallStatus(CALL_STATUS.INACTIVE);
      const apiUrl = import.meta.env.VITE_PUBLIC_API_URL;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (apiUrl) {
        const fetchCallInfo = (retryCount = 0, maxRetries = 10) => {
          const delay = Math.min(1000 * Math.pow(2, retryCount), 5000); // Exponential backoff, max 5 seconds
          console.log("currentCallIdRef.current: ", currentCallIdRef.current);
          setTimeout(() => {
            fetch(`${apiUrl}/api/getCallInfo/${currentCallIdRef.current}`)
              .then((response) => {
                if (!response.ok) {
                  return response.text().then((text) => {
                    throw new Error(
                      `Server responded with status: ${response.status}, body: ${text}`,
                    );
                  });
                }
                return response.json();
              })
              .then((data) => {
                setCallData((prevData) => {
                  return prevData.map((existingRecord) => {
                    if (existingRecord.callId === data.callId) {
                      return {
                        ...existingRecord,
                        createdDate:
                          formatDateForDisplay(data.startedAt) ||
                          existingRecord.createdDate,
                        duration: data.durationSeconds
                          ? formatTime(data.durationSeconds)
                          : "N/A",
                        details: {
                          summary: data.summary || "No summary provided",
                          summaryTitle:
                            data.summaryTitle || "No summary provided",
                          structuredData: {
                            urgentStatus: data.structuredData?.urgent || false,
                            transferTo: data.structuredData?.transfer_to || null,
                            transferred:
                              data.structuredData?.transferred || false,
                            abuseType:
                              data.structuredData?.abuse_type || "Not specified",
                            callerName: data.structuredData?.name || "Unknown",
                            callerLocation:
                              data.structuredData?.location || "Unknown",
                            latestIncident:
                              data.structuredData?.latest_incident_date || "N/A",
                            follow_up:
                              data.structuredData?.follow_up ||
                              "No follow-up required",
                          },
                          messages: data.messages || [],
                        },
                      };
                    }
                    return existingRecord;
                  });
                });
                currentCallIdRef.current = null;
              })
              .catch((error) => {
                console.error("Error fetching call info:", error);
                if (retryCount < maxRetries) {
                  setTimeout(() => fetchCallInfo(retryCount + 1, maxRetries), 1000);
                } else {
                  console.error("Max retries reached. Unable to fetch call info.");
                }
              });
          }, delay);
        };
        console.log("Fetching call info for callId: ", currentCallIdRef.current);
        fetchCallInfo();
      }
    };

    const onVolumeLevel = (volume: number) => {
      setAudioLevel(volume);
    };

    const onError = (e: unknown) => {
      setCallStatus(CALL_STATUS.INACTIVE);
      console.error(e);
    };

    const onMessageUpdate = (message: unknown) => {
      console.log("Message update: ", message);
    };

    // Add all event listeners
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("call-start", onCallStartHandler);
    vapi.on("call-end", onCallEnd);
    vapi.on("volume-level", onVolumeLevel);
    vapi.on("message", onMessageUpdate);
    vapi.on("error", onError);

    // Cleanup function - remove all listeners when component unmounts
    return () => {
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("call-start", onCallStartHandler);
      vapi.off("call-end", onCallEnd);
      vapi.off("volume-level", onVolumeLevel);
      vapi.off("message", onMessageUpdate);
      vapi.off("error", onError);
    };
  }, []); // Empty dependency array - only run once on mount


  const start = async (agent: "noah" | "olivia" | string) => {
    setCallStatus(CALL_STATUS.LOADING);
    try {
      const assistantOverrides: AssistantOverrides = {
        variableValues: {
          agency: "",
        },
      };
      const helplineAssistant = import.meta.env.VITE_PUBLIC_VAPI_AUTHORITY_ASSISTANT_ID
      const res = await vapi.start(
        agent == "noah" ? teenageAssistantNoah : agent == "olivia" ? teenageAssistantOlivia : helplineAssistant,
        assistantOverrides,
        squad,
      );
      if (!res) {
        setCallStatus(CALL_STATUS.ERROR);
        throw new Error("Failed to start call");
      }

      currentCallIdRef.current = res.id;
      console.log("response id: ", JSON.stringify(res));

      const highestId =
        callData.length > 0
          ? Math.max(...callData.map((record) => parseInt(record.id) || 0))
          : 0;
      const newId = String(highestId + 1);

      const record: CallRecord = {
        id: newId,
        createdDate: formatDateForDisplay(new Date().toISOString()),
        duration: "0:00",
        callId: res?.id || "",
        details: {
          summary: "Call in progress",
          summaryTitle: "Active Call",
          structuredData: {
            urgentStatus: false,
            transferTo: "",
            transferred: false,
            abuseType: "",
            callerName: "",
            callerLocation: "",
            latestIncident: "",
            follow_up: "",
          },
          messages: [],
        },
      };
      setCallData((prevData) => [record, ...prevData]);
    } catch (error) {
      console.error("Error starting call:", error);
      setCallStatus(CALL_STATUS.ERROR);
    }
  };

  const stop = () => {
    setCallStatus(CALL_STATUS.LOADING);
    vapi.stop();
  };

  const toggleCall = (agent: "noah" | "olivia" | string) => {
    if (callStatus == CALL_STATUS.ACTIVE) {
      stop();
    } else {
      start(agent);
    }
  };

  return {
    isSpeechActive,
    callStatus,
    callDuration,
    audioLevel,
    start,
    stop,
    toggleCall,
    callData,
  };
}
