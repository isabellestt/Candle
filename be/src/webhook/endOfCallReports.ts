import { EndOfCallReportPayload, EndOfCallReportMessageResponse } from "../types";
import { memoryStore } from "../db/memoryStore";

export const EndOfCallReportHandler = (
  payload: EndOfCallReportPayload
) => {
  // const { endedReason, messages, summary, callId } = payload;
  const endedReason = payload.message.endedReason;
  const messages = payload.message.artifact?.messages || [];
  const summary = payload.message.summary;
  const callId = payload.message.call.id;

  
  const res: EndOfCallReportMessageResponse = {
    callId,
    endedReason,
    messages,
    summary
  };
  

  memoryStore[callId] = {...res};

  console.log("Storing in memoryStore", memoryStore);

  return res;
};