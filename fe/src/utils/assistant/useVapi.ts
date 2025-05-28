import { useEffect, useState } from "react";
import { vapi } from "./vapi.sdk";
import type { CallRecord } from './../../types/conversation.type';
import { helplineAssistant } from './helpline.assistant';
import { squad } from '../squad/squad';
import { callData } from '../../../public/callData';

export const CALL_STATUS = {
  INACTIVE: "inactive",
  ACTIVE: "active",
  LOADING: "loading",
  ERROR: "error",
} as const

export type CALL_STATUS_TYPE = typeof CALL_STATUS[keyof typeof CALL_STATUS]
  
export function useVapi() {
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [callStatus, setCallStatus] = useState<CALL_STATUS_TYPE>(
    CALL_STATUS.INACTIVE
  );
  const [audioLevel, setAudioLevel] = useState(0);



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

      if (apiUrl) {

        fetch(`${apiUrl}/api/getCallInfo`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Server responded with status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Call info fetched successfully:", data);
            const record: CallRecord = {
              id: data.callId || "",
              createdDate: data.startedAt || "",
              duration: data.durationSeconds ? `${data.durationSeconds} seconds` : "N/A",
              callId: data.callId || "",
              urgentStatus: data.urgent || false,
              transferTo: data.transferTo || null,
              transferred: data.transferred || false,
              summaryTitle: data.summary || "No summary provided",
              details: {
                summary: data.summary || "No summary provided",
                abuseType: data.abuseType || "Not specified",
                callerName: data.name || "Unknown",
                callerLocation: data.location || "Unknown",
                latestIncident: data.startedAt || "N/A",
                messages: data.messages || [],
              }
            }
            callData.push(record)
          })
          .catch(error => {
            console.error("Error fetching call info:", error);
          });
      } else {
        console.warn("API URL not defined, skipping call info fetch");
      }

    };

    const onVolumeLevel = (volume: number) => {
      setAudioLevel(volume);
    };

    // const onMessageUpdate = (message: Message) => {
    //   if (
    //     message.type === MessageEnum.TRANSCRIPT &&
    //     message.transcriptType === TranscriptMessageEnum.PARTIAL
    //   ) {
    //     setActiveTranscript(message);
    //   } else {
    //     setMessages((prev) => [...prev, message]);
    //     setActiveTranscript(null);
    //   }
    // };

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

  const start = async () => {
    setCallStatus(CALL_STATUS.LOADING);
    const response = vapi.start(helplineAssistant, undefined, squad);

    response.then((res) => {
      console.log("call", res);
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
  };
}