import type { CallRecord } from "../src/types/conversation.type";

export const callData: CallRecord[] = [
  {
    id: "10",
    createdDate: "24/5/25 (10:41 PM)",
    duration: "0h 01m 23s",
    callId: "afaDHwef123",
    details: {
      structuredData: {
        urgentStatus: true,
        transferTo: "SPF",
        transferred: true,
        abuseType: "Physical",
        callerName: "Heather T.",
        callerLocation: "Blk 888 Woodlands St 82 #03-147",
        latestIncident: "24/5/25 – 6 pm (partner punched door & grabbed wrist)",
        follow_up: `SPF patrol to revisit unit 25/5/25 09:00\nVictim advised to obtain A&E medical memo within 24 h\nProvide photo evidence of bruises when safe`
      },
      summaryTitle: "Partner assaulted caller, police dispatched",
      summary: `Heather (29) sobbed and said her partner slammed her against the wall, leaving fresh bruises on her arm.\n
      Background audio captured shouting and glass breaking.\n
      Candling completed a rapid danger assessment, confirmed she could safely exit the flat, then dial-conferenced 999 to request immediate police assistance.\n
      Call ended after the warm transfer to SPF.`,
      messages: []
    }
  },
  {
    id: "9",
    createdDate: "24/5/25 (10:34 PM)",
    duration: "0h 02m 57s",
    callId: "nBx2QLvX807",
    details: {
      structuredData: {
        urgentStatus: true,
        transferTo: "NAVH",
        transferred: true,
        abuseType: "Emotional",
        callerName: "Jeffery L.",
        callerLocation: "Blk 6 Toa Payoh Lor 1 #12-66",
        latestIncident: "24/5/25 – 9 pm (suicidal threats after argument)",
        follow_up: `NAVH counsellor call-back booked 25/5/25 14:00\nSend emergency-contacts card via SMS tonight\nEncourage removal of sharp objects from bedroom\nOffer IMH crisis referral if ideation escalates`
      },
      summaryTitle: "Caller reports suicidal distress, transferred",
      summary: `Jeffery (34) repeated “I can’t do this anymore” and felt close to self-harm after severe verbal abuse.\n
      Candling stabilised him with brief grounding, validated his emotions, and secured consent to transfer.\n
      Warm transfer to NAVH crisis counsellor completed.\n
      Call ended once NAVH accepted the hand-over.`,
      messages: []
    }
  },
  {
    id: "8",
    createdDate: "24/5/25 (10:27 PM)",
    duration: "0h 07m 02s",
    callId: "kPd3ZiLm552",
    details: {
      structuredData: {
        urgentStatus: false,
        transferTo: "PAVE",
        transferred: true,
        abuseType: "Emotional",
        callerName: "Nurul R.",
        callerLocation: "Blk 520 Choa Chu Kang St 51 #05-229",
        latestIncident: "22/5/25 (gas-lighting, phone monitoring)",
        follow_up: `PAVE intake consultation 27/5/25 11:00\nEmail legal-rights handbook (POHA / PPO)\nSuggest trusted-friend accompaniment to session`
      },
      summaryTitle: "Caller seeks help for controlling boyfriend",
      summary: `Nurul (26) described months of digital surveillance and social isolation by her boyfriend.\n
      She is now staying with a friend and feels physically safe but emotionally drained.\n
      Candling outlined protective-order options and warm-transferred her to PAVE for longer-term support.\n
      Connection closed after PAVE counsellor took over.`,
      messages: []
    }
  },
  {
    id: "7",
    createdDate: "24/5/25 (10:21 PM)",
    duration: "0h 03m 44s",
    callId: "TgE7prDf901",
    details: {
      structuredData: {
        urgentStatus: true,
        transferTo: "DVERT",
        transferred: true,
        abuseType: "Physical",
        callerName: "Wei Shan (neighbour witness)",
        callerLocation: "Blk 243 Bukit Batok East Ave 5 (corridor)",
        latestIncident: "Ongoing – loud thuds & screams in unit 243-07-112",
        follow_up: `DVERT & SPF joint response logged case DV-25-487\nWitness statement appointment 25/5/25 08:30\nChild-sensitive team alerted if minors present`
      },
      summaryTitle: "Neighbour reports violent dispute ongoing",
      summary: `Witness heard glass shattering and a child crying next door and feared imminent harm.\n
      Candling gathered flat details and patched directly to DVERT’s 24-hour desk.\n
      Dispatch confirmed; call disconnected after the hand-over.`,
      messages: []
    }
  },
  {
    id: "6",
    createdDate: "24/5/25 (10:15 PM)",
    duration: "0h 11m 12s",
    callId: "Gh2sJwQk334",
    details: {
      structuredData: {
        urgentStatus: false,
        transferTo: "SOS",
        transferred: true,
        abuseType: "Self-harm linked to trauma",
        callerName: "Anonymous male",
        callerLocation: "Undisclosed – requested anonymity",
        latestIncident: "Past abuse; intense flashbacks tonight",
        follow_up: `SOS CareText follow-up 25/5/25 00:30\nAgree safety-buddy plan for next 24 h\nSend list of trauma-specialist therapists`
      },
      summaryTitle: "Caller experiencing suicidal thoughts after trauma",
      summary: `A man in his 40s disclosed vivid flashbacks of childhood beatings and said he had rehearsed a self-harm method.\n
      Candling used paced breathing and future-oriented questions to lower arousal, reminded him of SOS confidentiality, and warm-transferred him to a suicide-prevention counsellor.\n
      Call terminated once SOS counsellor accepted the caller.`,
      messages: []
    }
  },
  {
    id: "5",
    createdDate: "24/5/25 (10:14 PM)",
    duration: "0h 04m 34s",
    callId: "VwL9cDxH220",
    details: {
      structuredData: {
        urgentStatus: true,
        transferTo: "CPS",
        transferred: true,
        abuseType: "Physical (child)",
        callerName: "Anon neighbour",
        callerLocation: "Blk 12 Yishun Ring Rd #06-48",
        latestIncident: "24/5/25 – witnessed father slap 7-y-o",
        follow_up: `CPS investigator visit scheduled 25/5/25 09:30\nWitness to provide dash-cam footage of incident\nPolice exploring protection order for child`
      },
      summaryTitle: "Witness reports child abuse in carpark",
      summary: `Caller saw a man slap a small child across the face in the carpark and captured the licence-plate on video.\n
      Candling verified details and warm-transferred the case to CPS on-call investigator.\n
      Call ended after CPS confirmed receipt.`,
      messages: []
    }
  },
  {
    id: "4",
    createdDate: "24/5/25 (10:08 PM)",
    duration: "0h 09m 59s",
    callId: "JoF8sMcu447",
    details: {
      structuredData: {
        urgentStatus: true,
        transferTo: "MSF",
        transferred: true,
        abuseType: "Emotional & Financial (elder)",
        callerName: "Mrs Lim (pseudonym)",
        callerLocation: "Blk 20 Telok Blangah Cres #02-05",
        latestIncident: "24/5/25 – son confiscated ATM card, yelled threats",
        follow_up: `APS home-visit scheduled 25/5/25 14:00\nExplore Voluntary Welfare Order if coercion continues\nSend elder-abuse brochure in Mandarin`
      },
      summaryTitle: "Elderly caller fears financial coercion at home",
      summary: `Mrs Lim (73) reported that her son controls her ATM card and threatened confinement if she resists.\n
      Candling explained her rights under the Vulnerable Adults Act and transferred the case to MSF APS for urgent follow-up.\n
      Conversation ended after APS acknowledged the referral.`,
      messages: []
    }
  },
  {
    id: "3",
    createdDate: "24/5/25 (9:58 PM)",
    duration: "0h 23m 01s",
    callId: "AWrfeNea905",
    details: {
      structuredData: {
        urgentStatus: false,
        transferTo: "SACC",
        transferred: true,
        abuseType: "Sexual (historic)",
        callerName: "Clara (30)",
        callerLocation: "Confidential – requested privacy",
        latestIncident: "11/5/23 (historic assault; triggers resurfaced)",
        follow_up: `SACC trauma counsellor session 26/5/25 15:00\nProvide info on time-bar for police report\nOffer IMH Sexual Assault Care liaison if needed`
      },
      summaryTitle: "Caller discloses historic sexual assault trauma",
      summary: `Clara revealed she was molested by a family friend two years ago and is now experiencing nightmares after seeing him again.\n
      Candling outlined medical and legal options and, at her request, transferred the call to SACC for specialised trauma care.\n
      Call closed immediately post transfer.`,
      messages: []
    }
  },
  {
    id: "2",
    createdDate: "24/5/25 (9:43 PM)",
    duration: "1h 03m 00s",
    callId: "NFewfqiD611",
    details: {
      structuredData: {
        urgentStatus: false,
        transferTo: "NAVH",
        transferred: true,
        abuseType: "Emotional & Verbal (family)",
        callerName: "Mei Ling (17)",
        callerLocation: "Blk 301 Clementi Ave 2 #11-126",
        latestIncident: "Ongoing – daily insults, body-shaming by mother",
        follow_up: `School counsellor loop-in via NAVH 26/5/25\nEmail teen-friendly coping worksheet tonight\nEncourage trusted-adult disclosure within 48 h`
      },
      summaryTitle: "Teen reports daily verbal abuse at home",
      summary: `Mei Ling described constant belittling and body-shaming from her mother, affecting her studies and sleep.\n
      Candling provided self-compassion techniques and, with consent, connected her to NAVH youth services for school-based support.\n
      Call ended after NAVH accepted the hand-over.`,
      messages: []
    }
  },
  {
    id: "1",
    createdDate: "24/5/25 (9:30 PM)",
    duration: "0h 45m 07s",
    callId: "ZxKp4Tui488",
    details: {
      structuredData: {
        urgentStatus: false,
        transferTo: "APS",
        transferred: false,
        abuseType: "Neglect (self)",
        callerName: "Mr Rahman (65)",
        callerLocation: "Blk 55 Bukit Merah View #01-671",
        latestIncident: "Food supplies ran out 20/5/25",
        follow_up: `APS welfare check 25/5/25 10:00\nLink Meals-on-Wheels application form\nRefer to Silver Generation befriending programme`
      },
      summaryTitle: "Elderly man self-neglects since wife’s passing",
      summary: `Widower Mr Rahman eats mostly instant noodles and skips medication since his wife died last month.\n
      Candling arranged an APS welfare-visit request and provided information on community meals and befriending.\n
      Caller declined further contact; call ended after triage.`,
      messages: []
    }
  }
];
