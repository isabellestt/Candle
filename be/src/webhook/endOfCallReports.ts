import { EndOfCallReportPayload, EndOfCallReportMessageResponse } from "../types";
import { memoryStore } from "../db/memoryStore";

export const EndOfCallReportHandler = (
  payload: EndOfCallReportPayload
) => {
  const endedReason = payload.message.endedReason;
  const messages = payload.message.artifact?.messages || [];
  const summary = payload.message.summary;
  const callId = payload.message.call.id;
  const startedAt = payload.message.startedAt;
  const durationSeconds = payload.message.durationSeconds;

  
  const res: EndOfCallReportMessageResponse = {
    callId,
    startedAt,
    durationSeconds,
    endedReason,
    messages,
    summary
  };
  

  memoryStore[callId] = {
    ...memoryStore[callId],
    ...res};


  return res;
};