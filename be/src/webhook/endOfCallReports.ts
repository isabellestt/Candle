import { EndOfCallReportPayload, EndOfCallReportMessageResponse } from "../types";
import { memoryStore } from "../db/memoryStore";
import convertToISODate from "../utils/convertDate";

export const EndOfCallReportHandler = (
  payload: EndOfCallReportPayload
) => {
  console.log("summaryWithTitle", summaryWithTitle);

  const endedReason = payload.message.endedReason;
  const messages = payload.message.artifact?.messages || [];
  const summaryWithTitle = payload.message.analysis.summary;
  const summary = summaryWithTitle ? summaryWithTitle.split("\n")[2] : "No summary provided";
  const summaryTitle = summaryWithTitle 
  ? summaryWithTitle.split("\n")[0].replace(/[#*]/g, '').trim() 
  : "No title provided";
  const callId = payload.message.call.id;
  const startedAt = convertToISODate(payload.message.startedAt);
  const durationSeconds = payload.message.durationSeconds;
  const structuredData = payload.message.analysis.structuredData;


  const res: EndOfCallReportMessageResponse = {
    callId,
    startedAt,
    durationSeconds,
    endedReason,
    messages,
    summary,
    summaryTitle,
    structuredData,
  }

  memoryStore[callId] = {
    ...memoryStore[callId],
    ...res};

  console.log("EndOfCallReportHandler memoryStore", memoryStore[callId]);

  return res;
};