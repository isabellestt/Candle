import type { CreateSquadDTO } from "@vapi-ai/web/dist/api";
import { helplineAssistant } from "../assistant/helpline.assistant";
import { authorityAssistant } from "../assistant/authorities.assistant";

export const squad : CreateSquadDTO ={
  name: "helpline to authorities",
  members: [
    {
      assistant: helplineAssistant,
      assistantDestinations: [
        {
          message: "I'll transfer you to our authority assistant who can help with your specific situation.",
          description: "Transfer call to authority assistant",
          type: "assistant",
          assistantName: "authorityAssistant",
        }
      ]
    },
    {
      assistant: authorityAssistant,
      assistantDestinations: []
    },
  ] 
}