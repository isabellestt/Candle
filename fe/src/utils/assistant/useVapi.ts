import type { AssistantOverrides } from "./../../../node_modules/@vapi-ai/web/dist/api.d";
import { useEffect, useState, useRef } from "react";
import { vapi } from "./vapi.sdk";
import type { CallRecord } from "./../../types/conversation.type";
import { helplineAssistant } from "./helpline.assistant";
import { squad } from "../squad/squad";
import { callData as defaultCallData } from "../../../public/callData";
import formatDateForDisplay from "../formatDate";
import formatTime from "../formatTime";
import { getAssistantByName } from "./assistants";

export const CALL_STATUS = {
  INACTIVE: "inactive",
  ACTIVE: "active",
  LOADING: "loading",
  ERROR: "error",
} as const;

export type CALL_STATUS_TYPE = (typeof CALL_STATUS)[keyof typeof CALL_STATUS];

export function useVapi() {
  const [callData, setCallData] = useState<CallRecord[]>(defaultCallData);

  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [callStatus, setCallStatus] = useState<CALL_STATUS_TYPE>(
    CALL_STATUS.INACTIVE,
  );
  const [audioLevel, setAudioLevel] = useState(0);
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    if (callStatus === CALL_STATUS.ACTIVE) {
      const interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [callStatus]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    localStorage.setItem("callRecords", JSON.stringify(callData));
  }, [callData]);

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
        const mostRecentRecord = callData.length > 0 ? callData[0] : null;
        const mostRecentRecordId = mostRecentRecord
          ? mostRecentRecord.callId
          : null;
        setTimeout(() => {
          console.log("Fetching call data after delay...");
          fetch(`${apiUrl}/api/getCallInfo`)
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
            })
            .catch((error) => {
              console.error("Error fetching call info:", error);

              if (mostRecentRecordId) {
                setCallData((prevData) => {
                  return prevData.filter(
                    (record) => record.callId !== mostRecentRecordId,
                  );
                });
              }
            });
        }, 10000);
      } else {
        console.warn("API URL not defined, skipping call info fetch");
      }
    };

    const onVolumeLevel = (volume: number) => {
      setAudioLevel(volume);
    };

    const onError = (e: unknown) => {
      setCallStatus(CALL_STATUS.INACTIVE);
      console.error(e);
    };

    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("call-start", onCallStartHandler);
    vapi.on("call-end", onCallEnd);
    vapi.on("volume-level", onVolumeLevel);
    // vapi.on("message", onMessageUpdate);
    vapi.on("error", onError);

    return () => {
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("call-start", onCallStartHandler);
      vapi.off("call-end", onCallEnd);
      vapi.off("volume-level", onVolumeLevel);
      // vapi.off("message", onMessageUpdate);
      vapi.off("error", onError);
    };
  }, [callData]);

  const start = async (assistant: string) => {
    setCallStatus(CALL_STATUS.LOADING);
    try {
      const assistantOverrides: AssistantOverrides = {
        variableValues: {
          agency: "",
        },
      };
      const res = await vapi.start(
        assistant === "helpline" ? helplineAssistant : getAssistantByName(assistant),
        assistantOverrides,
        squad,
      );
      if (!res) {
        setCallStatus(CALL_STATUS.ERROR);
        throw new Error("Failed to start call");
      }

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

  const toggleCall = (assistantName: string) => {
    if (callStatus == CALL_STATUS.ACTIVE) {
      stop();
    } else {
      start(assistantName);
    }
  };

  return {
    isSpeechActive,
    callStatus,
    audioLevel,
    callDuration,
    start,
    stop,
    toggleCall,
    callData,
  };
}
