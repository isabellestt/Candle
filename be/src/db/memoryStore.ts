import {FunctionCallMessageResponse, EndOfCallReportMessageResponse} from "../types";

export interface UnifiedCallLog {
  callId: string;
  functionCall?: FunctionCallMessageResponse;
  endOfCallReport?: EndOfCallReportMessageResponse;
}
export const memoryStore: Record<string, UnifiedCallLog> = {};