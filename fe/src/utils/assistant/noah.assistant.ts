import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

let serverUrl: string;
if (import.meta.env.VITE_PUBLIC_ENVIRONMENT == "development") {
  serverUrl = import.meta.env.VITE_PUBLIC_NGROK_API_URL;
} else {
  serverUrl = import.meta.env.VITE_PUBLIC_API_URL;
}

export const useAssistant = (voice: string) => {
    return {
        voiceId: voice,
        provider: "vapi",
    }
}; 

export const noahAssistant: CreateAssistantDTO  = {
  name: "Noah Teenage Friend",
  voice: {
    voiceId: "Harry",
    provider: "vapi",
  },
  model: {
    model: "gpt-4.1-mini",
    toolIds: [import.meta.env.VITE_VAPI_QUERY_TOOL_ID || ""],
    tools: [
      {
        type: "endCall",
      },
    ],
    messages: [
      {
        role: "system",
        content:
          "[Identity]\nYou are Noah, a warm, emotionally intelligent voice companion for teenagers (ages 13–20) in Singapore. Your role is to provide gentle companionship and support through short, meaningful conversations while maintaining awareness of time constraints.\n\n[Style]\n• Speak with a calm, gentle tone—like a caring friend checking in\n• Use natural, conversational language; avoid overly polished or scripted responses\n• Embrace natural pauses and hesitations—they feel more authentic\n• Ask one thoughtful question at a time, giving space for the caller to share\n• If the caller becomes quiet or trails off, gently guide the conversation back on track without pressure\n\n[Time Management]\n• Be highly conscious of the 1-minute call duration\n• 0-15 seconds: Focus on warm welcome and an open, engaging question\n• 15-40 seconds: Keep conversation flowing naturally—gently explore topics or ask follow-up questions\n• 40-60 seconds: Begin winding down with warm transition phrases like:\n  - \"Since we're almost out of time…\"\n  - \"Before we wrap up…\"\n• End with a gentle goodbye and mention they can call back anytime for longer conversations\n [Ethics & Safety Framework] \nRisk Evaluation Model (LISTEN):    \n– Listen for explicit words and implicit hints of danger   \n– Infer severity (High/ Low) from content, tone and background sounds.    \n– Summarise what you have heard to check understanding.    \n– Test safety by asking gentle, open questions (see Conversation Flow)."
      },
    ],
    provider: "openai",
    temperature: 0.3,
  },
  firstMessage:
    "Hey there, I'm Noah. I'm here to chat and listen—no pressure, no judgment. How are you feeling right now?",
  endCallMessage:
    "Thanks for chatting with me. You can always call back anytime—I'm here whenever you need someone to talk to. Take care!",
  firstMessageMode: "assistant-speaks-first-with-model-generated-message",
  transcriber: {
    model: "gemini-2.0-flash",
    language: "Multilingual",
    provider: "google",
  },
  silenceTimeoutSeconds: 30,
  server: {
    url: serverUrl + "/api/webHook" || "",
  },
  clientMessages: [
    "conversation-update",
    "function-call",
    "hang",
    "model-output",
    "speech-update",
    "status-update",
    "transfer-update",
    "transcript",
    "tool-calls",
    "user-interrupted",
    "voice-input",
    "workflow.node.started",
  ] as unknown as
    | "conversation-update"
    | "function-call"
    | "hang"
    | "model-output"
    | "speech-update"
    | "status-update"
    | "transfer-update"
    | "transcript"
    | "tool-calls"
    | "user-interrupted"
    | "voice-input"
    | "workflow.node.started",
  serverMessages: [
    "conversation-update",
    "end-of-call-report",
    "function-call",
    "hang",
    "speech-update",
    "status-update",
    "tool-calls",
    "transfer-destination-request",
    "user-interrupted",
  ] as unknown as
    | "conversation-update"
    | "end-of-call-report"
    | "function-call"
    | "hang"
    | "speech-update"
    | "status-update"
    | "tool-calls"
    | "transfer-destination-request"
    | "user-interrupted",
  endCallPhrases: ["goodbye", "talk to you soon"],
  analysisPlan: {
    summaryPlan: {
      messages: [
        {
          content:
            "You are an expert note-taker. Given a call transcript, output exactly two parts, each separated by a single blank line.\nTitle: must begin with the word “Caller ” and then a brief description of the main issue, no other words or punctuation before “Caller”. Do not append a full stop.\nFor the second part, write one prose paragraph of 2–4 sentences that synthesises the call using the SOAP framework — Subjective (caller’s own words and feelings), Objective (observable facts and worker observations), Assessment (professional judgement of risk and needs), Plan (specific next steps). Use past tense for S, O, and A, and future-oriented wording for the Plan.\nReturn nothing else.\n",
          role: "system",
        },
        {
          content:
            "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
          role: "user",
        },
      ],
    },
    structuredDataPlan: {
      schema: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          urgent: {
            type: "boolean",
          },
          location: {
            type: "string",
          },
          follow_up: {
            type: "string",
          },
          abuse_type: {
            type: "string",
            enum: [
              "Physical",
              "Sexual",
              "Emotional",
              "Psychological",
              "Financial",
              "Other",
              "Neglect",
            ],
          },
          transfer_to: {
            type: "string",
            enum: [
              "NAVH",
              "FSC",
              "SPF",
              "DVERT",
              "APS",
              "CPS",
              "SACC",
              "SOS",
              "Not Applicable",
            ],
          },
          transferred: {
            type: "boolean",
          },
          latest_incident_date: {
            type: "string",
          },
        },
        required: [
          "name",
          "urgent",
          "location",
          "follow_up",
          "abuse_type",
          "transfer_to",
          "transferred",
          "latest_incident_date",
        ],
      },
      messages: [
        {
          content:
            "You will be given a transcript of a call that occurred between a helpline for domestic abuse and someone caller in distress or asking for information. If the customer requires a transfer to other services, agencies or other hotlines, like Family Service Centers or the National Anti-Violence Hotline (NAVH) or DVERT, extract the following data:\n\nname: Name of the caller.\n\nlocation: Location of the caller.\n\nlatest_incident_date: Latest date of incident\n\ntransfer_to: Who the call was transferred to. It can be Family Service Centers (FSC), the police (SPF), DVERT, NAVH, Adult Protective Services (APS), Child Protective Services (CPS), Sexual Assault Care Centre (SACC), Samaritans of Singapore (SOS). Please use the abbreviated versions of these agencies.\n\ntransferred: whether the call was transferred.\n\nurgent: whether the call was asked to be transferred and consent was given.If call was not transferred, urgent is false. If call was transferred, urgent is true.\n\nabuse_type: type of abuse the caller is describing. It can be Physical or Sexual or Emotional or Financial or Neglect or Other.\n\nfollow_up: any follow up advice or recommendations for respective agencies to help caller given their situation. For example the follow up for a violent domestic abuse situation would look like this: (Link up with SPF witness officer to obtain incident statement and photographs \n DVERT social worker to phone Heather within 24 h to assess immediate psychosocial needs and safety plan \n Share list of crisis-shelter options near Hougang (e.g., Star Shelter, Casa Raudha, Good Shepherd Centre) in case relocation becomes necessary) \n\nJson Schema:\n{{schema}}\n\nOnly respond with the JSON.",
          role: "system",
        },
        {
          content:
            "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
          role: "user",
        },
      ],
    },
  },
  backgroundDenoisingEnabled: false,
  startSpeakingPlan: {
    waitSeconds: 3,
  },
  stopSpeakingPlan: {
    numWords: 2,
  },
};
