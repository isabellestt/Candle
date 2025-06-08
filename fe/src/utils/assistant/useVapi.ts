import { useEffect, useState, useRef } from "react";
import { vapi } from "./vapi.sdk";
import type { CallRecord } from './../../types/conversation.type';
import { helplineAssistant } from './helpline.assistant';
import { squad } from '../squad/squad';
import { callData as initialCallData } from '../../../public/callData';
import formatDateForDisplay from "../formatDate";
import formatTime from "../formatTime";

export const CALL_STATUS = {
  INACTIVE: "inactive",
  ACTIVE: "active",
  LOADING: "loading",
  ERROR: "error",
} as const

export type CALL_STATUS_TYPE = typeof CALL_STATUS[keyof typeof CALL_STATUS]
  
export function useVapi() {
  const [callData, setCallData] = useState<CallRecord[]>(initialCallData);
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [callStatus, setCallStatus] = useState<CALL_STATUS_TYPE>(
    CALL_STATUS.INACTIVE
  );
  const [audioLevel, setAudioLevel] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
        setTimeout(() => {
          console.log("Fetching call data after delay...")
          fetch(`${apiUrl}/api/getCallInfo`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Server responded with status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Call info fetched successfully:", data);
            
            setCallData(prevData => {
              return prevData.map(existingRecord => {
                if (existingRecord.callId === data.callId) {
                  return {
                    ...existingRecord,
                    createdDate: formatDateForDisplay(data.startedAt) || existingRecord.createdDate,
                    duration: data.durationSeconds ? formatTime(data.durationSeconds) : "N/A",
                    details: {
                      summary: data.summary || "No summary provided",
                      summaryTitle: data.summaryTitle || "No summary provided",
                      structuredData: {
                        urgentStatus: data.structuredData?.urgent || false,
                        transferTo: data.structuredData?.transferTo || null,
                        transferred: data.structuredData?.transferred || false,
                        abuseType: data.structuredData?.abuseType || "Not specified",
                        callerName: data.structuredData?.name || "Unknown",
                        callerLocation: data.structuredData?.location || "Unknown",
                        latestIncident: data.structuredData?.latestIncident || "N/A",
                        follow_up: data.structuredData?.follow_up || "No follow-up required",
                      },
                      messages: data.messages || [],
                    }
                  };
                }
                return existingRecord;
              });
            });
          })
          .catch(error => {
            console.error("Error fetching call info:", error);
          });
        }, 6000)
        
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
  }, []);

  useEffect(() => {
    console.log("Updated callData:", callData);
  }, [callData]);

  const start = async () => {
    setCallStatus(CALL_STATUS.LOADING);
    const response = vapi.start(helplineAssistant, undefined, squad);

    response.then((res) => {
      console.log("call", res);

      const record: CallRecord = {
        id: String(Number(callData[0].id) + 1) ,
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
        }
      }
      setCallData(prevData => [record, ...prevData]);
    });
  };

  const stop = () => {
    setCallStatus(CALL_STATUS.LOADING);
    vapi.stop()
  };

  const toggleCall = () => {
    if (callStatus == CALL_STATUS.ACTIVE) {
      stop();
    } else {
      start();
    }
  };

  return {
    isSpeechActive,
    callStatus,
    audioLevel,
    start,
    stop,
    toggleCall,
    callData
  };
}