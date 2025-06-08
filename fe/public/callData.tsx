import type { CallRecord } from "../src/types/conversation.type";

export const callData: CallRecord[] = [
  {
    id: "5",
    createdDate: "24/5/25 (15:45 PM)",
    duration: "1 hour 15 mins",
    callId: "LlkgsjfNdf",
    details: {
      structuredData: {
        urgentStatus: false,
        transferTo: "APS",
        transferred: true,
        
        abuseType: "Emotional",
        callerName: "David Lim",
        callerLocation: "92 Ang Mo Kio Ave 4 #07-15",
        latestIncident: "23/5/25",
        follow_up: "Follow up with APS on 25/5/25"
      },
      summaryTitle: "First time reporting abuse..",
      summary: "Caller reported experiencing verbal abuse from her neighbor. She described frequent shouting and derogatory remarks, which have made her feel unsafe in her own home.",
      messages: [],
    }
  },
  {
    id: "4",
    createdDate: "24/5/25 (23:43 PM)",
    duration: "3 hours 24 mins",
    callId: "NFewfqiD",
    details: {
      structuredData: {
        urgentStatus: true,
        transferTo: "DVERT",
        transferred: true,
        
        abuseType: "Neglect",
        callerName: "Lisa Wong",
        callerLocation: "36 Bedok North Ave 2 #09-124",
        latestIncident: "24/5/25",
        follow_up: "Follow up with DVERT on 25/5/25"
      },
      summaryTitle: "Caller reported family abuse..",
      summary: "Caller reported ongoing family abuse involving her children. She described a pattern of neglect and emotional manipulation by her spouse, leading to a toxic environment for the children.",
      messages: [],
    }
  },
  {
    id: "3",
    createdDate: "25/5/25 (1:12 AM)",
    duration: "1 hour 48 mins",
    callId: "AWrfeNea",
    details: {
      structuredData: {
        urgentStatus: false,
        transferTo: "Not Applicable",
        transferred: false,
        abuseType: "Physical",
        callerName: "Michael Tan",
        callerLocation: "78 Jurong East St 21 #05-12",
        latestIncident: "15/3/25",
        follow_up: "No follow-up required"
      },
      summaryTitle: "Spoke about past violence..",
      summary: "Caller discussed past incidents of violence in her family, particularly involving her father. She expressed concern about the long-term effects on her mental health and the need for support to cope with the trauma.",
      messages: []
    }
  },
  {
    id: "2",
    createdDate: "25/5/25 (2:43 AM)",
    duration: "0 hours 12 mins",
    callId: "oiOEfePNf",
    details: {
      structuredData: {
        urgentStatus: true,
        transferTo: "MSF",
        transferred: false,
        abuseType: "Emotional",
        callerName: "Sarah Johnson",
        callerLocation: "45 Tampines Street 8 #10-32",
        latestIncident: "25/5/25",
        follow_up: "Follow up with MSF on 26/5/25"
      },
      summaryTitle: "Feels unsafe at home now..",
      summary: "Caller reported feeling unsafe at home due to emotional abuse by her partner. She mentioned frequent arguments and emotional manipulation, leading to her feeling trapped and anxious.",
      messages: [],
    }
  },
  {
    id: "1",
    createdDate: "25/5/25 (5:43 AM)",
    duration: "2 hours 58 minutes",
    callId: "afaDHw2bKdBf28B",
    details: {
      structuredData: {
        urgentStatus: true,
        transferTo: "DVERT",
        transferred: true,
        abuseType: "Physical",
        callerName: "Jane Appleseed",
        callerLocation: "123 Hougang Ave #02-16",
        latestIncident: "24/4/25",
        follow_up: "Follow up with DVERT on 26/5/25"
      },
      summaryTitle: "Caller reported physical abuse…",
      summary: "Caller identified herself as Heather. She reported being physically assaulted by her uncle earlier in the afternoon at her family’s flat in Woodlands. She described ongoing tension in the household and mentioned this was not the first incident, but it was the first time she sustained visible bruising. Heather sounded shaken and anxious, pausing often during the call and showing...",
      messages: []
    }
  },
]