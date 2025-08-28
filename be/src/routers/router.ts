import { Router } from "express";
import { WebhookHandler } from "../webhook";
import { memoryStore } from "../db/memoryStore";
import { Profile } from "../db/schemas/profile";
import { eq } from "drizzle-orm";
import { db } from "../db";

const router = Router();

router.get("/assistant", async (req, res) => {
  const apiKey = process.env.VAPI_API_KEY || "";
  const assistantId = process.env.VAPI_ASSISTANT_ID || "";

  if (!assistantId) {
    res.status(400).json({ error: "Assistant ID is missing" });
    return;
  }

  try {
    const response = await fetch(
      `https://api.vapi.ai/assistant/${assistantId}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + apiKey,
        },
      },
    );

    const body = await response.json();
    const {
      id,
      orgId,
      createdAt,
      updatedAt,
      isServerUrlSecretSet,
      ...filteredData
    } = body;

    // console.log(filteredData);
    res.json(filteredData);
  } catch (error) {
    console.error("Error fetching assistant data:", error);
    res.status(500).json({ error: "Failed to fetch assistant data" });
  }
});

router.post("/webhook", WebhookHandler);

router.get("/getCallInfo/:callId", (req, res) => {
  const callId = req.params.callId;
  // console.log("callId: is", callId);
  // console.log("memoryStore: ", memoryStore);
  const call = memoryStore[callId];
  if (!call) {
    res.status(404).json({ error: "No call info found" });
    return;
  }
  res.json(call);
});

router.post("/checkUser", async (req, res) => {
  const { authId } = req.body;
  const user = await db.select().from(Profile).where(eq(Profile.authId, authId));
  res.json(user);
});

router.post("/createUser", async (req, res) => {
  const { authId, firstName, lastName, username, dob, gender } = req.body;
  const user = await db.insert(Profile).values({ authId, firstName, lastName, username, dob, gender });
  res.json(user);
});

export default router;
