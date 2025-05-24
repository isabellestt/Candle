import type { CreateSquadDTO } from "@vapi-ai/web/dist/api";
import { helplineAssistant, authorityAssistant, MSFAssistant } from "../assistant/character.assistant";

export const squad : CreateSquadDTO ={
  name: "helpline to authorities",
  members: [
    {
      assistant: helplineAssistant,
      assistantDestinations: [
        {
          message: "",
          description: "Transfer call to authority assistant",
          type: "assistant",
          assistantName: "authorityAssistant",
        },
        {
          message: "",
          description: "Transfer call to MSF assistant",
          type: "assistant",
          assistantName: "MSFAssitant",
        }
      ]
    },
    {
      assistant: authorityAssistant,
      assistantDestinations: []
    },
    {
      assistant: MSFAssistant,
      assistantDestinations: []
    }
  ] 
}