import {ToolCallMessageResponse, EndOfCallReportMessageResponse} from "../types";

export interface UnifiedCallLog {
  callId: string;
  functionCall?: ToolCallMessageResponse;
  endOfCallReport?: EndOfCallReportMessageResponse;
}
export const memoryStore: Record<string, UnifiedCallLog> = {};