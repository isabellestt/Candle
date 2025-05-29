export const VAPI_CALL_STATUSES = [
  "queued",
  "ringing",
  "in-progress",
  "forwarding",
  "ended"
] as const;
export type VapiCallStatus = (typeof VAPI_CALL_STATUSES)[number];

export enum VapiWebhookEnum {
  ASSITANT_REQUEST = "assistant-request",
  FUNCTION_CALL = "function-call",
  TOOL_CALLS = "tool-calls",
  STATUS_UPDATE = "status-update",
  END_OF_CALL_REPORT = "end-of-call-report",
  HANG = "hang",
  SPEECH_UPDATE = "speech-update",
  TRANSCRIPT = "transcript"
}

interface ToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: Record<string, any>; 
  };
}

export interface ConversationMessage {
  role: "user" | "system" | "bot" | "function_call" | "function_result";
  message?: string;
  name?: string;
  args?: string;
  result?: string;
  time: number;
  endTime?: number;
  secondsFromStart: number;
}

export interface StructuredData {
  name: string;
  location: string;
  transfer_to: 'FSC' | 'SPF' | 'APS' | 'CPS' | 'SACC' | 'ComCare' | 'SOS' | 'Shelter' | 'Other';
  transferred: boolean;
  urgent: boolean;
  latest_incident_date: string; 
  abuse_type: 'Physical' | 'Sexual' | 'Emotional' | 'Financial' | 'Neglect' | 'Other';
  follow_up: string;
}
export interface EndOfCallReportPayload {
  message: {
    type: VapiWebhookEnum.END_OF_CALL_REPORT;
    toolCalls?: ToolCall[]; 
    artifact?: {
      messages: ConversationMessage[];
      messagesOpenAIFormatted?: any[];
    }; 
    call: {
      id: string;
      orgId: string;
      createdAt: string;
      updatedAt: string;
      type: string;
      status: string;
    };
    startedAt: string;
    endedAt: string;
    analysis: {
      summary: string;
      structuredData: StructuredData;
    }
    durationSeconds: number;
    endedReason: string;
  };
}

// export interface EndOfCallReportPayload  {
//   type: VapiWebhookEnum.END_OF_CALL_REPORT;
//   callId: string;
//   endedReason: string;
//   transcript: string;
//   messages: ConversationMessage[];
//   summary: string;
// }

export type VapiPayload = EndOfCallReportPayload;

export interface EndOfCallReportMessageResponse {
  callId: string;
  startedAt: string;
  durationSeconds: number;
  endedReason: string;
  messages: ConversationMessage[];
  summary: string;
  summaryTitle: string;
  structuredData: StructuredData;
}

export type VapiResponse = EndOfCallReportMessageResponse;
