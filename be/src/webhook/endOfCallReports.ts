import {
  EndOfCallReportPayload,
  EndOfCallReportMessageResponse,
} from "../types";
import { memoryStore } from "../db/memoryStore";
import convertToISODate from "../utils/convertDate";

export const EndOfCallReportHandler = (payload: EndOfCallReportPayload) => {
  const endedReason = payload.message.endedReason;
  const messages = payload.message.artifact?.messages || [];
  const summaryWithTitle = payload.message.analysis.summary;
  // console.log("summary: ", summaryWithTitle);
  let summary = "";
  let summaryTitle = "";
  if (summaryWithTitle) {
    const [title, ...bodyLines] = summaryWithTitle.trim().split(/\r?\n/);
    const summary = bodyLines.join("\n\n");
  }

  // const summary = summaryWithTitle ? summaryWithTitle.split("\n")[2] : "No summary provided";
  // const summaryTitle = summaryWithTitle
  // ? summaryWithTitle.split("\n")[0].replace(/[#*]/g, '').trim()
  // : "No title provided";
  const callId = payload.message.call.id;
  const startedAt = convertToISODate(payload.message.startedAt);
  const durationSeconds = payload.message.durationSeconds;
  const structuredData = payload.message.analysis.structuredData;
  // console.log("structuredData: ", structuredData);

  const res: EndOfCallReportMessageResponse = {
    callId,
    startedAt,
    durationSeconds,
    endedReason,
    messages,
    summary,
    summaryTitle,
    structuredData,
  };

  memoryStore[callId] = {
    ...memoryStore[callId],
    ...res,
  };

  // console.log("EndOfCallReportHandler memoryStore", memoryStore[callId]);

  return res;
};
