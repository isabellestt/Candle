import { EndOfCallReportPayload, EndOfCallReportMessageResponse } from "../types";

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

  return res;
};