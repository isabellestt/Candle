import { memoryStore } from "../db/memoryStore";
import { ToolCallPayload, ToolCallMessageResponse } from "../types";

export const ToolCallHandler = (
  payload: ToolCallPayload
) => {
  const callId = payload.message.call.id;
  const toolCalls = payload.message.toolCalls || [];

  const res: ToolCallMessageResponse = {
    result: []
  }

  for (const toolCall of toolCalls) {
    if (toolCall.function.name == "logTransfer") {
      const { transferred, transfer_to } = toolCall.function.arguments;

      res["result"].push("Transfer logged successfully");
      res["transferred"] = transferred
      res["transfer_to"] = transfer_to;
      res["urgent"] = true;
    };

    if (toolCall.function.name == "postNameAndLocation") {
      const { name, location } = toolCall.function.arguments;

      res["result"].push("Name and location posted successfully");
      res["name"] = name;
      res["location"] = location;
    };

  }

  memoryStore[callId] = {
    ...memoryStore[callId],
    ...res
  };
  
  return res;
}