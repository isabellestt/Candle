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
        callerName: "Heather Tan",
        callerLocation: "Blk 888 Woodlands St 82 #03-147",
        latestIncident: "24/5/25 – 6 pm (partner punched door & grabbed wrist)",
        follow_up: `SPF patrol to revisit unit 25/5/25 09:00\nVictim advised to obtain A&E medical memo within 24 h\nProvide photo evidence of bruises when safe`
      },
      summaryTitle: "Partner assaulted caller, police dispatched",
      summary: `Heather (29) sobbed and said her partner slammed her against the wall, leaving fresh bruises on her arm.\n
      Background audio captured shouting and glass breaking.\n
      Candling completed a rapid danger assessment, confirmed she could safely exit the flat, then dial-conferenced 999 to request immediate police assistance.\n
      Call ended after the warm transfer to SPF.`,
      messages: [
          {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. I’m here to listen, and—"
  },
  { role: "user", message: "He just threw me against the wall—please send help!" },
  {
    role: "bot",
    message: "I’m so sorry you got hurt. Are you safe to keep talking for a moment while we get help?"
  },
  { role: "user", message: "Door’s locked, but he’s still in the house." },
  { role: "bot", message: "Understood. May I have your name and unit address to alert the police?" },
  { role: "user", message: "Heather Tan, Blk 888 Woodlands St 82, #03-147." },
  {
    role: "bot",
    message: "Thank you, Heather. Do I have your permission to connect you straight to the police now?"
  },
  { role: "user", message: "Yes—please hurry." },
  {
    role: "bot",
    message: "The officer is on the line and has your location. I'll be initiating a warm transfer now so you two can speak. Take care."
  }
      ]
    }
  },
  /* ───────── UPDATED CALL 9  ───────── */
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
      abuseType: "Emotional & Verbal",
      callerName: "Jeffery Lim",
      callerLocation: "Blk 6 Toa Payoh Lor 1 #12-66",
      latestIncident: "24/5/25 – partner shouted & broke dishes",
      follow_up: `NAVH counsellor will call back 25/5/25 14:00\nSend quick-exit safety-plan PDF tonight\nAdvise caller to photograph any property damage\nSuggest trusted-friend stay-over if threats recur`
    },
    summaryTitle: "Caller distressed by partner’s verbal threats",
    summary: `Jeffery (34) sounded panicked after a violent shouting episode in which his partner smashed crockery. Candling gathered location details, assessed immediate safety, and—on Jeffery’s consent—warm-transferred him to NAVH for further support.`,
    messages: [
      {
        role: "bot",
        message:
          "Hello, you’ve reached Candling, an after-hours support assistant. I’m here to listen, and—"
      },
      {
        role: "user",
        message: "She's been screaming and throwing plates at the wall."
      },
      {
        role: "bot",
        message:
          "I'm so sorry to hear that you're going through this. Are you in a safe place to keep talking for a minute?"
      },
      { role: "user", message: "I’ve locked myself in the bedroom." },
      { role: "bot", message: "All right. May I have your name?" },
      { role: "user", message: "Jeffery Lim." },
      {
        role: "bot",
        message: "Thanks, Jeffery. Could you tell me your block and unit number?"
      },
      { role: "user", message: "Blk 6 Toa Payoh Lor 1, #12-66." },
      {
        role: "bot",
        message:
          "Got it. Did the shouting happen just now or earlier today?"
      },
      { role: "user", message: "About fifteen minutes ago." },
      {
        role: "bot",
        message:
          "Alright, if you'd like, I can connect you with a counsellor from The National Anti-Violence & Harassment Helpline. They can help plan next steps with you."
      },
      { role: "user", message: "Yes, please connect me." },
      {
        role: "bot",
        message:
          "Okay great, I am on the phone with a NAVH counsellor and am relaying your situation to them. I know that it's not easy but I am proud that you're taking measures to better your situation."
      },
      { role: "user", message: "Thanks, I'm trying my best." },
      {
        role: "bot",
        message:
          "Okay they're ready to connect, I'll patch you through now. Take care Jeffery."
      },
      { role: "user", message: "Mhmm." },
    ]
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
        callerName: "Nurul Rafy",
        callerLocation: "Blk 520 Choa Chu Kang St 51 #05-229",
        latestIncident: "22/5/25 (gas-lighting, phone monitoring)",
        follow_up: `PAVE intake consultation 27/5/25 11:00\nEmail legal-rights handbook (POHA / PPO)\nSuggest trusted-friend accompaniment to session`
      },
      summaryTitle: "Caller seeks help for controlling boyfriend",
      summary: `Nurul (26) described months of digital surveillance and social isolation by her boyfriend.\n
      She is now staying with a friend and feels physically safe but emotionally drained.\n
      Candling outlined protective-order options and warm-transferred her to PAVE for longer-term support.\n
      Connection closed after PAVE counsellor took over.`,
      messages: [
         {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. No personal data will be stored. Are you in a violent or dangerous situation right now?"
  },
  { role: "user", message: "No, I’m safe—just overwhelmed. My boyfriend tracks everything I do." },
  { role: "bot", message: "That sounds exhausting. May I have your name and where you’re staying tonight?" },
  { role: "user", message: "Nurul Rafy, at a friend’s flat in Choa Chu Kang. The exact address is Blk 520 Choa Chu Kang St 51 #05-229." },
  { role: "bot", message: "Thank you, Nurul. When was the most recent controlling incident?" },
  { role: "user", message: "Two days ago—he installed a GPS app on my phone." },
  {
    role: "bot",
    message: "A family-violence specialist centre called PAVE can help. Would you like me to forward your details so they can call you tomorrow?"
  },
  { role: "user", message: "Yes, that would be great." },
  {
    role: "bot",
    message: "Done. PAVE will reach out on 27 May at 11 am. You deserve to feel safe and supported. Do you need any more support or information?"
  },
  { role: "user", message: "No need, thank you so much and goodbye." }
      ]
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
        callerName: "Wei Shan",
        callerLocation: "Blk 243 Bukit Batok East Ave 5 (corridor)",
        latestIncident: "Ongoing – loud thuds & screams in unit 243-07-112",
        follow_up: `DVERT & SPF joint response logged case DV-25-487\nWitness statement appointment 25/5/25 08:30\nChild-sensitive team alerted if minors present`
      },
      summaryTitle: "Neighbour reports violent dispute ongoing",
      summary: `Witness heard glass shattering and a child crying next door and feared imminent harm.\n
      Candling gathered flat details and patched directly to DVERT’s 24-hour desk.\n
      Dispatch confirmed; call disconnected after the hand-over.`,
      messages: [
        {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. I’m here to listen, and—"
  },
  { role: "user", message: "Hello, I don't know who I should call, there’s screaming and glass breaking next door, and I can hear a child crying." },
  { role: "bot", message: "Thank you for calling. You did the right thing to reach out, and we can assist with alerting the authorities. Are you safe where you are now?" },
  { role: "user", message: "Yes, in the corridor." },
  { role: "bot", message: "May I have your name and the unit number where this is happening?" },
  { role: "user", message: "Wei Shan, my neighbours unit is Blk 243 #07-112." },
  {
    role: "bot",
    message: "Got it. With your consent, I’ll connect the Domestic Violence Emergency Response Team to get help quickly. Is that okay?"
  },
  { role: "user", message: "Yes, please." },
  { role: "bot", message: "Connecting now—stay on the line." },
  { role: "user", message: "Alright." },
  {
    role: "bot",
    message: "I have DVERT on the line and am filling them in on the key details. I want to reassure you for doing the right thing Wei Shan. Alright the DVERT representative is ready to connect with you for direct correspondence, I’ll step back so they can talk directly. Take care."
  },
      ]
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
        callerName: "Anonymous",
        callerLocation: "Undisclosed – requested anonymity",
        latestIncident: "Past abuse; intense flashbacks tonight",
        follow_up: `SOS CareText follow-up 25/5/25 00:30\nAgree safety-buddy plan for next 24 h\nSend list of trauma-specialist therapists`
      },
      summaryTitle: "Caller experiencing suicidal thoughts after trauma",
      summary: `An anonymous caller disclosed vivid flashbacks of childhood beatings and said he was considering self-harm.\n
      Candling used paced breathing and future-oriented questions to lower arousal, reminded him of SOS confidentiality, and warm-transferred him to a suicide-prevention counsellor.\n
      Call terminated once SOS counsellor accepted the caller.`,
      messages: [
        {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. No personal data will be stored. Are you currently in danger?"
  },
  { role: "user", message: "Not danger, but I hate being beaten everyday by my dad. I'm so sick of it i want to just jump out of my window and end all this pain." },
  { role: "bot", message: "I’m so sorry that you are going through this, you are not alone, and I can connect you with the right people who can help. Could we breathe together for a moment?" },
  { role: "user", message: "Okay. Who are these people?" },
  { role: "bot", message: "I'd like to connect you with the Samaritans of Singapore, they provide confidential emotional support to individuals facing a crisis, and who are thinking about suicide. They can help overcome your situation and create a positive path ahead for you." },
  { role: "user", message: "Okay that's good, I'd rather stay anonymous, and I can talk now, I’m at home alone. You can connect me." },
  {
    role: "bot",
    message: "That's totally fine, I'm on the phone with a counsellor from SOS who can help, I'm giving her a brief run down on your situation"
  },
  { role: "user", message: "Alright." },
  { role: "bot", message: "Okay they are ready to speak to you, I'll connect you so you can both speak freely, please call again if you ever need more support." },
  { role: "user",message: "Alright, bye bye."}
      ]
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
        callerName: "Anonymous bystander",
        callerLocation: "Not shared",
        latestIncident: "24/5/25 – witnessed father slap 7-y-o",
        follow_up: `CPS investigator visit scheduled 25/5/25 09:30\nWitness to provide dash-cam footage of incident\nPolice exploring protection order for child`
      },
      summaryTitle: "Witness reports child abuse in carpark",
      summary: `Caller saw a man slap a small child across the face in the carpark and captured the licence-plate on video.\n
      Candling verified details and warm-transferred the case to CPS on-call investigator.\n
      Call ended after CPS confirmed receipt.`,
      messages: [
         {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. I’m here to listen, and—"
  },
  { role: "user", message: "I just saw a man slap a little girl in the carpark." },
  { role: "bot", message: "Thank you for telling me. Are you in a safe spot right now, and can you share more information?" },
  { role: "user", message: "Yea I'm fine, he grabbed and pulled her by her hair and was screaming at her before slapping her. She looks very young, like around 7 years old. I saw the car they stepped out of and can see the license plate." },
  { role: "bot", message: "I'm so sorry that you had to witness that, may I have your name and location? please also share the licence-plate information." },
  { role: "user", message: "I don't want to disclose my information just a concerned bystander, their car plate is SGC1234X." },
  {
    role: "bot",
    message: "Got it. With your permission, I’ll connect Child Protective Services to act quickly. Is that okay?"
  },
  { role: "user", message: "Yes." },
  {
    role: "bot",
    message: "Okay I have a CPS representative on the line and am briefing them with the infomation you shared. Thank you for reaching out. I’ll step back and connect you two so they can guide you on the proceeding steps."
  },
  { role: "user", message: "Okay." },
      ]
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
        transferTo: "APS",
        transferred: true,
        abuseType: "Emotional & Financial (elder)",
        callerName: "Mrs Lim",
        callerLocation: "Blk 20 Telok Blangah Cres #02-05",
        latestIncident: "24/5/25 – son confiscated ATM card, yelled threats",
        follow_up: `APS home-visit scheduled 25/5/25 14:00\nExplore Voluntary Welfare Order if coercion continues\nSend elder-abuse brochure in Mandarin`
      },
      summaryTitle: "Elderly caller fears financial coercion at home",
      summary: `Mrs Lim (73) reported that her son controls her ATM card and threatened confinement if she resists.\n
      Candling explained her rights under the Vulnerable Adults Act and transferred the case to MSF APS for urgent follow-up.\n
      Conversation ended after APS acknowledged the referral.`,
      messages: [
        {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. No personal data will be stored. Are you currently in danger?"
  },
  { role: "user", message: "No, but my adult son took my ATM card and screamed at me calling me useless and said I don't need the money as much as he does." },
  { role: "bot", message: "That sounds frightening, I'm so sorry that you are going through this. Could I have your name and address?" },
  { role: "user", message: "Mrs Lim, Blk 20 Telok Blangah Cres #02-05." },
  { role: "bot", message: "Thank you. When did he last threaten you?" },
  { role: "user", message: "This afternoon. Is there anything I can do about this, I feel quite helpless, but it also seems wrong to call the police." },
  {
    role: "bot",
    message: "You are definitely deserving of help. Your son's actions seemed to have placed you under duress and his actions are considered to be a form of emotional and financial abuse."
  },
  { role: "user", message: "Thank you, what can I do then?" },
  {
    role: "bot",
    message: "I can hand your case to Adult Protective Services who promote safety and quality-of-life for vulnerable adults in danger of being abused, neglected, or financially exploited. Do I have your consent to share your details with them?"
  },
  { role: "user", message: "Yea that sounds good, sorry for the trouble." },
  {
    role: "bot",
    message: "No trouble at all, you are deserving of help and I want to connect you with the right people who can better your situation. I have informed APS, and they should come by your apartment at 2 pm tomorrow. Does this work for you?"
  },
  { role: "user", message: "Okay I will be home at 2pm." },
  {
    role: "bot",
    message: "That's great, do you need anymore assistance or support, I'm here to listen if so."
  },
  { role: "user", message: "It's okay, I think I'm going to go sleep." },
  {
    role: "bot",
    message: "Alright, goodnight Mrs Lim. Please call again if you ever need more support, you are deserving of help."
  },
  { role: "user", message: "Sure thing, goodnight." },
      ]
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
        callerName: "Clara Chew(30)",
        callerLocation: "Confidential – requested privacy",
        latestIncident: "11/5/23 (historic assault; triggers resurfaced)",
        follow_up: `SACC trauma counsellor session 26/5/25 15:00\nProvide info on time-bar for police report\nOffer IMH Sexual Assault Care liaison if needed`
      },
      summaryTitle: "Caller discloses historic sexual assault trauma",
      summary: `Clara revealed she was molested by a family friend two years ago and is now experiencing nightmares after seeing him again.\n
      Candling outlined medical and legal options and, at her request, transferred the call to SACC for specialised trauma care.\n
      Call closed immediately post transfer.`,
      messages: [
         {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. No personal data will be stored. Are you in immediate danger?"
  },
  { role: "user", message: "No, but I was molested two years ago and can’t sleep." },
  { role: "bot", message: "I’m sorry that happened to you. Would you like to talk about it?" },
  { role: "user", message: "Yea that would be nice, do I have to provide any personal information?" },
  { role: "bot", message: "That's great, personal information is not requried at all but you can share your name if you'd like." },
  { role: "user", message: "Clara Chew." },
  { role: "bot", message: "Thank you, Clara. Can I also ask where are you calling from?" },
  { role: "user", message: "I’d rather keep my address private, but I’m safe at home." },
  { role: "bot", message: "{insert rest of conversation}" },
  { role: "user", message: "{insert rest of conversation}" },
  { role: "bot", message: "{insert rest of conversation}" },
  { role: "user", message: "{insert rest of conversation}" },
  {
    role: "bot",
    message: "Thanks for sharing all this, I know it is not easy and it was very brave of you to do so. The Sexual Assault Care Centre offers specialised counselling for people in similar situations as the one that you are in. Would you like me to share your case with them so that they can contact you and assist with your situation?"
  },
  { role: "user", message: "Yes, please." },
  { role: "bot", message: "Okay I've shared your information and they should contact you within the next working day, do you want additional forms of support? I am also still here as a listening ear if you want to share more." },
  { role: "user", message: "Thanks, I feel slightly better. I think I'm going to try and sleep." },
  { role: "bot", message: "You’ve shown great courage today Clara, remember that you are not alone, and please call again anytime if you ever need more support. Take care and goodnight." },
{ role: "user", message: "Goodnight." },
      ]
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
      messages: [
        {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. No personal data will be stored. Are you in immediate danger?"
  },
  { role: "user", message: "No, it’s just… my mum yells at me every day and calls me useless." },
  { role: "bot", message: "I'm so sorry to hear that, it sounds very hurtful and I'm here to support you. May I ask for your name and where you’re calling from?" },
  { role: "user", message: "Mei Ling, I'm calling from my room, my address is Clementi Avenue 2, #11-126." },
  { role: "bot", message: "{insert rest of conversation}" },
  { role: "user", message: "{insert rest of conversation}" },
  { role: "bot", message: "{insert rest of conversation}" },
  { role: "user", message: "{insert rest of conversation}" },
  {
    role: "bot",
    message: "You're really brave for sharing all this Mei Ling. If you like, I can connect you with NAVH’s youth team. They can work with your school counsellor and put an end to the emotional and verbal abuse that you're facing at home. Would you like me to give them your contact so they can follow up tomorrow?"
  },
  { role: "user", message: "Yes, that’s okay." },
  {
    role: "bot",
    message: "All right. They’ll reach out tomorrow afternoon. Do you need any more support, I'm here to listen."
  },
  { role: "user", message: "No it's okay I have some homework to do." },
  { role: "bot", message: "That's totally alright. All the best with your homework. You’re not alone and please call back anytime if you need more support. " },
  { role: "user", message: "Bye." },
      ]
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
      messages: [
        {
    role: "bot",
    message: "Hello, you’ve reached Candling, an after-hours support assistant. No personal data will be stored. Are you in immediate danger?"
  },
  { role: "user", message: "No, I’m just struggling since my wife passed. I barely eat." },
  { role: "bot", message: "I'm so sorry for your loss. I'm here to support you and can be a listening ear if you want to share more. May I have your name?" },
  { role: "user", message: "Rahman." },
  { role: "bot", message: "Thank you, Mr Rahman. Where are you living now?" },
  { role: "user", message: "Bukit Merah View, #01-671." },
  { role: "bot", message: "{insert rest of conversation}" },
  { role: "user", message: "{insert rest of conversation}" },
  { role: "bot", message: "{insert rest of conversation}" },
  { role: "user", message: "{insert rest of conversation}" },
  {
    role: "bot",
    message: "Thanks for sharing your story, your wife sounds like a great woman and I'm sure she'd want you to feel better. I can schedule for an APS officer to visit tomorrow at 10 am for additional support. Would you like me to arrange that meeting?"
  },
  { role: "user", message: "Yes, please." },
  {
    role: "bot",
    message: "All right. They’ll come over tomorrow morning. Do you need any more support, I'm here to listen."
  },
  { role: "user", message: "No it's okay, I think I'm going to go pray and wash up for bed." },
  { role: "bot", message: "That sounds like a healthy step forward. You’re not alone Mr Rahman, please call back anytime if you need more support. " },
  { role: "user", message: "Okay, thank you and goodnight." },
      ]
    }
  }
];
