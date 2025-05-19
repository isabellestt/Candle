import { Router } from "express";

export const assistantRouter = Router();

assistantRouter.get("/", async (req, res) => {
  const apiKey = process.env.VAPI_API_KEY || "";
  const assistantId = process.env.VAPI_ASSISTANT_ID || "";

  if (!assistantId) {
    res.status(400).json({ error: "Assistant ID is missing" });
    return;
  } 

  try{
    const response = await fetch(`https://api.vapi.ai/assistant/${assistantId}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + apiKey,
      },
    });
    
    const body = await response.json();
    const {
      id,
      orgId,
      createdAt,
      updatedAt,
      isServerUrlSecretSet,
      ...filteredData
    } = body;

    console.log(filteredData);
    res.json(filteredData)
  } catch (error) {
    console.error("Error fetching assistant data:", error);
    res.status(500).json({ error: "Failed to fetch assistant data" });
  }
})