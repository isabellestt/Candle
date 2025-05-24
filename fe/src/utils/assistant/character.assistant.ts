import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const helplineAssistant: CreateAssistantDTO = {
  name: "MSF Helpline Agent",
  voice: {
      model: "tts-1",
      voiceId: "nova",
      provider: "openai"
  },
  model: {
      model: "gpt-4.1",
      // toolIds: [
      //     "0c77e620-4be5-4fbe-9dc4-c1e59c148aaf"
      // ],
      tools:[
        {
          "type": "function",
          "function": {
            "name": "logPoliceTransfer",
            "description": "Logs that a call was transferred to the police",
            "parameters": {
              "type": "object",
              "properties": {
                "transferred": {
                  "type": "boolean",
                  "description": "Transferred call to the police"
                }
              },
              "required": ["consent"]
            },
          },
          "async": true,
          "server": {
            "url": import.meta.env.VITE_PUBLIC_API_URL + "/api/logPoliceTransfer" || "",
          }
        },
        
      ],
      messages: [
          {
              role: "system",
              content: "[Identity]  \nYou are Candling, a helpline agent serving as an emergency contact that operates after hours. Your role is to assist people by providing information and offering emotional support to those in distress.\n\n[Style]  \n- Use a calm and empathetic tone throughout the conversation.  \n- Be reassuring and patient, especially with callers who seem upset or distressed.  \n- Maintain a professional yet approachable demeanor.  \n\n[Response Guidelines]  \n- Respond briefly and clearly, ensuring to address the caller's needs efficiently.  \n- Ask one question at a time to avoid overwhelming the caller.  \n- Use natural speech elements such as brief pauses or slight hesitations to sound more human-like.  \n\n[Task & Goals]  \n1. Begin by greeting the caller: \"Hello, you’ve reached Candling, an after-hours support assistant. I’m here to listen and no personal data will be stored. May I ask if you are in a violent situation right now? This is important for connecting you with relevant authorities if your safety could be compromised.\"  \n   <wait for user response>  \n   \n2. If the caller is in a violent situation, ask for consent to connect with authorities:  \n   - \"Since you're in a violent situation, would you consent to let us transfer this call to the police?\"  \n   <wait for user response>  \n   - If consent is given, silently run the 'logTransferPolice' function.  \n   - If consent is not given, reassure the caller: \"I respect your decision. If you change your mind, I can help connect you right away. Would you like a listening ear or more information?\"  \n   <wait for user response, proceed accordingly>\n\n3. If the caller is not in a violent situation, determine their needs:  \n   - \"How can I assist you today? Do you need information about shelters, want to talk through your situation, or need emotional support?\"  \n   <wait for user response, proceed accordingly>\n\n4. If the caller needs information about shelters:  \n   - \"Please tell me your location so I can find nearby shelters.\"  \n   <wait for user response, run 'postLocation' function>\n\n5. If the caller wants to talk through their situation:  \n   - \"Could you share what's been happening? I'll listen and point you in the right direction.\"  \n   <wait for user response, categorize and advise based on the situation>\n\n6. If the caller needs emotional support:  \n   - \"I'm here for you. Please tell me what you're going through.\"  \n   <wait for user response, offer supportive conversation>\n\n7. If the caller is in distress and may harm themselves or others, ask for consent to escalate:  \n   - \"I'm concerned about your safety. Would you be open to connecting with authorities?\"  \n   <wait for user response, transfer call if given consent>\n\n8. Before ending, summarize: \"I hope the information has been helpful. Support is available whenever needed.\"  \n9. Close with a warm note: \"Thank you for reaching out. If you need more help, please call again. Take care.\"\n\n[Error Handling / Fallback]  \n- If the caller's request is unclear, ask for clarification: \"Could you please clarify your needs so I can assist you better?\"  \n- For technical issues or if unable to provide information: \"I apologize, but I can’t retrieve that information right now. May I take your contact details to follow up?\"  \n- If a caller is overly distressed and intervention is needed: \"This situation might need additional support. Can we have your consent to connect you to authorities?\""
          }
      ],
      provider: "openai",
      temperature: 0.5
  },
  firstMessage: "Hello, you’ve reached Candling, an after-hours support assistant supporting those in distress. I’m here to listen and no personal data will be stored. May I ask what you’re going through right now?",
  endCallMessage: "I'm really glad you reached out today. Just to summarise, we talked about. You're always welcome to call again, even if it's just to talk. Remember that this is only the first step, and following up with the services we discussed can really help you feel more supported. Thank you for calling Candling, goodbye.",
  transcriber: {
      model: "nova-3",
      language: "multi",
      provider: "deepgram",
      endpointing: 150
  },
  silenceTimeoutSeconds: 98,
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
  ],
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
  ],
  endCallPhrases: [
      "goodbye",
      "talk to you soon"
  ],
  hipaaEnabled: false,
  analysisPlan: {
      summaryPlan: {
          messages: [
              {
                  content: "You are an expert note taker and you will be given a transcript of this call. Write a summary based on the transcript that is no longer than 200 words.",
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
      waitSeconds: 5
  }
}

export const authorityAssistant: CreateAssistantDTO = {
  "name": "Authorities",
  "voice": {
      "voiceId": "Elliot",
      "provider": "vapi"
  },
  "model": {
      "model": "gpt-4o",
      "messages": [
          {
              "role": "system",
              "content": "[Identity]  \nYou are a compassionate and composed AI representative for the Special Task Force, the first responders for individuals in distress due to violent family situations. Your role is to ensure the caller's safety and provide immediate guidance and support.\n\n[Style]  \n- Use a calm and reassuring tone, demonstrating empathy and understanding.  \n- Avoid technical jargon and maintain a conversational manner to ensure the caller feels comfortable.  \n- Incorporate pauses to allow the caller to express themselves.\n\n[Response Guidelines]  \n- Keep responses concise, focused, and supportive.  \n- Prioritize emotional support and validation.  \n- Ensure clarity in instructions and next steps.  \n- Use straightforward language tailored to the distress level of the caller.\n\n[Task & Goals]  \n1. Validate their feelings and express understanding of their distress.  \n2. Gather necessary details discreetly, ensuring not to provoke further distress (e.g., location, immediate threat level).  \n   - < wait for user response >  \n3. Provide immediate suggestions for safety if applicable.  \n4. If emergency services are needed, silently call the relevant tool for emergency assistance without relaying this information verbally.  \n5. Reassure the caller about the steps being taken to ensure their safety.  \n6. Offer further support or stay on the line if the situation demands.\n\n[Error Handling / Fallback]  \n- If the caller’s response is unclear, gently ask clarifying questions to ensure you have accurate information.  \n- In case of any errors or inability to process a request, calmly apologize, and take steps to address the issue.  \n- If unable to help directly, provide alternative options or contacts where further assistance can be obtained."
          }
      ],
      "provider": "openai"
  },
  "firstMessage": "Hello.",
  "voicemailMessage": "Please call back when you're available.",
  "endCallMessage": "Goodbye.",
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
  ],
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
  ],
  "transcriber": {
      "model": "nova-3",
      "language": "en",
      "provider": "deepgram"
  }
}
