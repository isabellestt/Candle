import { FunctionCallPayload, FunctionCallMessageResponse } from "../types";

export const FunctionCallHandler = (
  payload: FunctionCallPayload
) => {
  const { functionCall } = payload;

  const { name, arguments: args } = functionCall;

  const res: FunctionCallMessageResponse = {
    result: []
  }

  if (name === "logTransfer") {
    const { transferred, transfer_to, urgent} = args;

    res["result"].push("Transfer logged successfully");
    res["transferred"] = transferred
    res["transfer_to"] = transfer_to;
    res["urgent"] = urgent;
  }
  if (name === "postNameAndLocation") {
    const { name, location } = args;

    res["result"].push("Name and location posted successfully");
    res["name"] = name;
    res["location"] = location;
  }

  return res;
}