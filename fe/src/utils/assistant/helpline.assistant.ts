import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { renderSystemPrompt } from "./renderSystemPrompt";

export const helplineAssistant: CreateAssistantDTO = {
  name: "MSF Helpline Agent",
  voice: {
      model: "tts-1",
      voiceId: "nova",
      provider: "openai"
  },
  model: {
      model: "gpt-4.1-nano",
      toolIds: [
        import.meta.env.VITE_VAPI_QUERY_TOOL_ID || "",
      ],
      tools:[
        {
          type: "endCall",
        },
      ],
      messages: [
          {
              role: "system",
              content: renderSystemPrompt()
          }
      ],
      provider: "openai",
      temperature: 0.5
  },
  firstMessage: "Hello?",
  endCallMessage: "I'm really glad you reached out today. Just to summarise, we talked about. You're always welcome to call again, even if it's just to talk. Remember that this is only the first step, and following up with the services we discussed can really help you feel more supported. Thank you for calling Candling, goodbye.",
  transcriber: {
      model: "gemini-2.0-flash",
      language: "Multilingual",
      provider: "google",
  },
  silenceTimeoutSeconds: 98,
  server: {
      url: import.meta.env.VITE_PUBLIC_API_URL + "/api/webHook" || "",
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
      "workflow.node.started"
  ] as unknown as ("conversation-update" | "function-call" | "hang" | "model-output" | "speech-update" | "status-update" | "transfer-update" | "transcript" | "tool-calls" | "user-interrupted" | "voice-input" | "workflow.node.started"),
  serverMessages: [
      "conversation-update",
      "end-of-call-report",
      "function-call",
      "hang",
      "speech-update",
      "status-update",
      "tool-calls",
      "transfer-destination-request",
      "user-interrupted"
  ] as unknown as ("conversation-update" | "end-of-call-report" | "function-call" | "hang" | "speech-update" | "status-update" | "tool-calls" | "transfer-destination-request" | "user-interrupted"),
  endCallPhrases: [
      "goodbye",
      "talk to you soon"
  ],
  analysisPlan: {
      summaryPlan: {
          "messages": [
                {
                    // query knowledge base?
                    "content": "You are an expert note taker and you will be given a transcript of this call. Write a summary based on the transcript that is no longer than 50 words, with a title describing the summary of the call. ",
                    "role": "system"
                },
                {
                    "content": "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
                    "role": "user"
                }
            ]
      },
      structuredDataPlan: {
            schema: {
                type: "object",
                properties: {
                    name: {
                        type: "string"
                    },
                    urgent: {
                        type: "string"
                    },
                    location: {
                        type: "string"
                    },
                    follow_up: {
                        "type": "string"
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
                            "Neglect"
                        ]
                    },
                    transfer_to: {
                        type: "string",
                        enum: [
                            "FSC",
                            "SPF",
                            "DVERT",
                            "APS",
                            "CPS",
                            "Shelter",
                            "SACC",
                            "ComCare",
                            "SOS",
                            "Other",
                            "None"
                        ]
                    },
                  transferred: {
                        type: "boolean"
                    },
                    latest_incident_date: {
                        type: "string"
                    }
                },
                required: [
                    "name",
                    "urgent",
                    "location",
                    "follow_up",
                    "abuse_type",
                    "transfer_to",
                    "transferred",
                    "latest_incident_date"
                ]
            },
            messages: [
                {
                    content: "You will be given a transcript of a call that occurred between a helpline for domestic abuse and someone caller in distress or asking for information. If the customer requires a transfer to other services, agencies or other hotlines, like Family Service Centers or the National Anti-Violence Hotline (NAVH) or DVERT, extract the following data:\n\nname: Name of the caller.\n\nlocation: Location of the caller.\n\nlatest_incident_date: Latest date of incident\n\ntransfer_to: Who the call was transferred to. It can be Family Service Centers (FSC), the police (SPF), DVERT, NAVH, Adult Protective Services (APS), Child Protective Services (CPS), shelters, Sexual Assault Care Centre (SACC), ComCare, Samaritans of Singapore (SOS). Please use the abbreviated versions of these agencies.\n\ntransferred: whether the call was transferred.\n\nurgent: whether the call was asked to be transferred and consent was given.If call was not transferred, urgent is false. If call was transferred, urgent is true.\n\nabuse_type: type of abuse the caller is describing. It can be Physical or Sexual or Emotional or Financial or Neglect or Other.\n\nfollow_up: any follow up advice or recommendations given to caller if no action can be taken right now. For eg. caller needs to be referred to an agency. \n\nJson Schema:\n{{schema}}\n\nOnly respond with the JSON.",
                    role: "system"
                },
                {
                    content: "Here is the transcript:\n\n{{transcript}}\n\n. Here is the ended reason of the call:\n\n{{endedReason}}\n\n",
                    role: "user"
                }
            ]
        }
    },
    backgroundDenoisingEnabled: false,
    startSpeakingPlan: {
        waitSeconds: 3
    },
    stopSpeakingPlan: {
        numWords: 2
},
}

