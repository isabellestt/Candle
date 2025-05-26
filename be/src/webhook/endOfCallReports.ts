import { EndOfCallReportPayload, EndOfCallReportMessageResponse } from "../types";
import { memoryStore } from "../db/memoryStore";

export const EndOfCallReportHandler = (
  payload: EndOfCallReportPayload
) => {
  const { endedReason, transcript, messages, summary, callId } = payload;
  
  const res: EndOfCallReportMessageResponse = {
    callId,
    endedReason,
    transcript,
    messages,
    summary
  };

  memoryStore[callId] = {...res};

  return res;
};