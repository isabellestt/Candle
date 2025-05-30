import {EndOfCallReportMessageResponse} from "../types";

export interface UnifiedCallLog {
  callId: string;
  endOfCallReport?: EndOfCallReportMessageResponse;
}
export const memoryStore: Record<string, UnifiedCallLog> = {};