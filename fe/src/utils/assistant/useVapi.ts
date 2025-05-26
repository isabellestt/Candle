import { helplineAssistant } from './character.assistant';
import type { Message,TranscriptMessage, FunctionCallResultMessage } from "../../types/conversation.type";
import { MessageEnum, TranscriptMessageEnum } from "../../types/conversation.type";
import { useEffect, useState } from "react";
import { vapi } from "./vapi.sdk";
import { squad } from '../squad/squad';

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

  // const [characterAssistant, setCharacterAssistant] = useState<CreateAssistantDTO | undefined>(undefined);

  const [messages, setMessages] = useState<Message[]>([]);

  const [activeTranscript, setActiveTranscript] =
    useState<TranscriptMessage | null>(null);

  const [audioLevel, setAudioLevel] = useState(0);

  const [transferred, setTransferred] = useState<boolean>(false)

  const [transferTo, setTransferTo] = useState<string | null>(null)

  const [urgent, setUrgent] = useState<boolean>(false);

  const [name, setName] = useState<string | null>(null);

  const [location, setLocation] = useState<string | null>(null);

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
        fetch(`${apiUrl}/api/getCallInfo`, {
        }).then(async (response) => {
          const data = await response.json();
          console.log("Call info fetched:", data);
          setTransferred(data.transferred);
          setTransferTo(data.transfer_to);
          setUrgent(data.urgent);
          setName(data.name);
          setLocation(data.location);
        })
        .catch((error) => {
          console.error("Error fetching call info:", error);
        })
      }

    };

    const onVolumeLevel = (volume: number) => {
      setAudioLevel(volume);
    };

    const onMessageUpdate = (message: Message) => {
      if (
        message.type === MessageEnum.TRANSCRIPT &&
        message.transcriptType === TranscriptMessageEnum.PARTIAL
      ) {
        setActiveTranscript(message);
      } else {
        setMessages((prev) => [...prev, message]);
        setActiveTranscript(null);
      }
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
    vapi.on("message", onMessageUpdate);
    vapi.on("error", onError);

    return () => {
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("call-start", onCallStartHandler);
      vapi.off("call-end", onCallEnd);
      vapi.off("volume-level", onVolumeLevel);
      vapi.off("message", onMessageUpdate);
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
    vapi.stop();
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
    activeTranscript,
    messages,
    transferred,
    transferTo,
    urgent,
    name,
    location,
    start,
    stop,
    toggleCall,
  };
}