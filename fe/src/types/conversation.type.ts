export const MessageEnum = {
  TRANSCRIPT: "transcript",
  FUNCTION_CALL: "function-call",
  FUNCTION_CALL_RESULT: "function-call-result",
  ADD_MESSAGE: "add-message",
} as const;

export type MessageEnumType = (typeof MessageEnum)[keyof typeof MessageEnum];

export const MessageRoleEnum = {
  USER: "user",
  SYSTEM: "system",
  ASSISTANT: "bot",
} as const;

export type MessageRoleEnumType =
  (typeof MessageRoleEnum)[keyof typeof MessageRoleEnum];

export const TranscriptMessageEnum = {
  PARTIAL: "partial",
  FINAL: "final",
} as const;

export type TranscriptMessageEnumType =
  (typeof TranscriptMessageEnum)[keyof typeof TranscriptMessageEnum];

export interface TranscriptMessage {
  role: MessageRoleEnumType;
  message: string;
}

export interface CallRecord {
  id: string;
  createdDate: string;
  duration: string;
  callId: string;
  details: {
    structuredData: {
      urgentStatus: boolean;
      transferTo: string;
      transferred: boolean;
      abuseType: string;
      callerName: string;
      callerLocation: string;
      latestIncident: string;
      follow_up: string;
    };
    summaryTitle: string;
    summary: string;
    messages: TranscriptMessage[];
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

export interface EndOfCallReportMessageResponse {
  callId: string;
  startedAt: string;
  durationSeconds: number;
  endedReason: string;
  messages: ConversationMessage[];
  summary: string;
  summaryTitle: string;
  structuredData: {
    name: string;
    location: string;
    transfer_to: string;
    transferred: boolean;
    urgent: boolean;
    latest_incident_date: string;
    abuse_type: string;
    follow_up: string;
  };
}
