import { useEffect, useState, useRef } from "react";
import { vapi } from "./vapi.sdk";
import type { CallRecord } from './../../types/conversation.type';
import { helplineAssistant } from './helpline.assistant';
import { squad } from '../squad/squad';
// import { callData } from '../../../public/callData';
import formatDateForDisplay from "../formatDate";
import formatTime from "../formatTime";
import { getStoredCallRecords, storeCallRecords, getDeletedIds } from '../localStorage';


export const CALL_STATUS = {
  INACTIVE: "inactive",
  ACTIVE: "active",
  LOADING: "loading",
  ERROR: "error",
} as const

export type CALL_STATUS_TYPE = typeof CALL_STATUS[keyof typeof CALL_STATUS]
  
export function useVapi() {
  const deletedIds = getDeletedIds();
  const [callData, setCallData] = useState<CallRecord[]>(getStoredCallRecords().filter(record => !deletedIds.includes(record.id)));

  const updateCallData = (updater: (prevData: CallRecord[]) => CallRecord[]) => {
    setCallData(prevData => {
      const newData = updater(prevData);
      storeCallRecords(newData); 
      return newData;
    });
  };

  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [callStatus, setCallStatus] = useState<CALL_STATUS_TYPE>(
    CALL_STATUS.INACTIVE
  );
  const [audioLevel, setAudioLevel] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  useEffect(() => {
    localStorage.setItem('callRecords', JSON.stringify(callData));
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
        const mostRecentRecordId = mostRecentRecord ? mostRecentRecord.callId : null;
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
            
            updateCallData(prevData => {
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

            if (mostRecentRecordId) {
              updateCallData(prevData => {
                return prevData.filter(record => record.callId !== mostRecentRecordId);
              })
            }
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
    try {

      const res = await vapi.start(helplineAssistant, undefined, squad);
      console.log("call", res)
      if (!res) {
        setCallStatus(CALL_STATUS.ERROR);
        throw new Error("Failed to start call");
      }
  
      const allRecords = getStoredCallRecords();
      const highestId = allRecords.length > 0 
        ? Math.max(...allRecords.map(record => parseInt(record.id) || 0))
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
        }
      }
      updateCallData(prevData => [record, ...prevData]);

    } catch (error) {
      console.error("Error starting call:", error);
      setCallStatus(CALL_STATUS.ERROR);
    }
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