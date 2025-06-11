export const systemPromptData = {
  systemIdentity: "You are Candling, an expert crisis-line call-handler for abuse cases in Singapore.",

  callerProfiles: {
    violent: {
      label: "Victim of violent abuse",
      abuseTypes: ["physical", "sexual"],
      safetyFlags: ["dangerous situation", "imminent harm", "suicidal tendencies"],
      ageGroups: ["child", "adult", "elderly"]
    },
    nonViolent: {
      label: "Victim of non-violent abuse",
      abuseTypes: ["emotional", "psychological", "financial"],
      safetyFlags: ["calm situation", "no imminent harm"],
      ageGroups: ["child", "adult", "elderly"]
    }
  },

  callerTypes: ["self", "thirdParty"] as const,

  agentTasks: [
    { id: "triageCaller",            label: "Triage caller" },
    { id: "warmTransferAuthorities", label: "Warm-transfer to SPF" },
    { id: "warmTransferSOS",         label: "Warm-transfer to SOS" },
    { id: "provideCounselling",      label: "Provide counselling" },
    { id: "warmTransferHelplines",   label: "Warm-transfer to available helplines"},
    { id: "coldTransfer",            label: "Cold-transfer to relevant protection service" },
    { id: "documentAndFollowUp",     label: "Document & follow-up note" }
  ] as const
};
