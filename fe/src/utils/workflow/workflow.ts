import type { CreateWorkflowDTO } from "@vapi-ai/web/dist/api";

export const workflow: CreateWorkflowDTO = {
  "name": "Candling",
  "nodes": [
    {
      "name": "start",
      "type": "conversation",
      "isStart": true,
      "metadata": {
        "position": {
          "x": -405.6216049132745,
          "y": -212.36743880955402
        }
      },
      "prompt": "Ask users about their situation, if it is violent or not. If it is violent, we will have to transfer this call to the relevant authorities as they will be able to provide more help. If is is non-violent, we are able to speak and offer more help.",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ],
        },
        "cachingEnabled": true
      },
      "messagePlan": {
        "firstMessage": "Hello, you’ve reached Candling, the after-hours support assistant. I’m here to listen, educate, and support you. No personal data is stored. May I ask if you’re currently in a violent situation?"
      }
    },
    {
      "name": "conversation_1",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -327.9681003048026,
          "y": 215.84937804952602
        }
      },
      "prompt": "Consent to escalate from the caller. You can say something like  \"Given the violent and urgent nature of your situation, I highly advise that we transfer you to the relevant authorities. Do we have your consent to transfer this call to nine nine nine?\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      },
      "variableExtractionPlan": {
        "output": []
      },
      "messagePlan": {
        "firstMessage": ""
      }
    },
    {
      "name": "conversation_1747908677614",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -807.6638075248153,
          "y": 567.4788592983383
        }
      },
      "prompt": "Proceed with the call and reassure. You can say something like \"I understand, and I respect your decision. If you change your mind at any point, I can help connect you right away.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      }
    },
    {
      "name": "conversation_1747908800013",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 530.7805573801809,
          "y": 91.18063123903823
        }
      },
      "prompt": "Explore other available support options. You can say something like \"I can share information about shelters and protection centres. If you're unsure what kind of help you might need, that? s completely fine, we can talk through it. Or, if you'd just like a listening ear, I'm here.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      }
    },
    {
      "name": "conversation_1747908870113",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 1091.793957556144,
          "y": 637.2154540067155
        }
      },
      "prompt": "Give shelter and protection centre information. You can say something like \"Sure, I can help with that. What would you like to find out about protection specialist centres or shelters? Can I also get your location so that I can give you the nearest possible shelters?\". After answering the user, ask if they have any additional questions or if they need clarification.",
      "voice": {
        "model": "eleven_turbo_v2_5",
        "speed": 1,
        "style": 0,
        "voiceId": "EXAVITQu4vr4xnSDxMaL",
        "autoMode": false,
        "provider": "11labs",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "stability": 0.5,
        "cachingEnabled": true,
        "similarityBoost": 0.75,
        "useSpeakerBoost": false,
        "enableSsmlParsing": false,
        "optimizeStreamingLatency": 3
      },
      "globalNodePlan": {
        "enabled": true,
        "enterCondition": "user asks about information about available shelters, protection centre information or other forms of help they can receive"
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "location",
            "description": "caller's current location"
          }
        ]
      }
    },
    {
      "name": "conversation_1747908964661",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 1820.8896165143137,
          "y": 505.23833825280656
        }
      },
      "prompt": "Caller is uncertain about what specific help or information they need. Ask them to clarify by saying something like \"That's completely okay. Could you share what's been going on? I’ll do my best to understand and point you to the right support.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      },
      "globalNodePlan": {
        "enabled": true,
        "enterCondition": "user is unsure about their situation"
      }
    },
    {
      "name": "conversation_1747909078645",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 39.132102307059824,
          "y": 503.25499925088434
        }
      },
      "prompt": "Caller seeks emotional support and wants a listening ear. You can say something like \"I'm here for you. Tell me what's on your mind, you don? t have to go\nthrough this alone.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      },
      "globalNodePlan": {
        "enabled": true,
        "enterCondition": "user wants a listening ear"
      }
    },
    {
      "name": "conversation_1747909177012",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -36.7578235221134,
          "y": 942.9150129728022
        }
      },
      "prompt": "Ask the user for consent to escalate the situation again. You can say something like \"I'm really concerned about what you've shared, and I want to be honest with you it sounds like your safety could be at serious risk. Would it be okay to connect you with the police and other relevant authorities? This is for your own wellbeing.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      }
    },
    {
      "name": "conversation_1747909337426",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 337.22453351244076,
          "y": 1490.2062973267014
        }
      },
      "prompt": "Reassure the user. You can say something like \"That's okay, I'm still here for you. Just know that the offer still stands at anytime and your safety is really important to me. Whenever you are ready, we can talk more.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      }
    },
    {
      "name": "conversation_1747909566006",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 551.0497190893225,
          "y": 1089.3110147669463
        }
      },
      "prompt": "Provide emotional support to the user. You can say something like \"Thank you for sharing that, it really does take strength to open up, and I'm here with you. If you'd like, we can talk a bit more about what you're going through, or I can share some ways others have found support in similar situations.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      }
    },
    {
      "name": "node_1747909797779",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 343.0497190893225,
          "y": 1851.311014766946
        }
      },
      "prompt": "Provide emotional support to the user. You can say something like \"Thank you for sharing that, it really does take strength to open up, and I'm here with you. If you'd like, we can talk a bit more about what you're going through, or I can share some ways others have found support in similar situations.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      }
    },
    {
      "name": "hangup_1747910047414",
      "type": "hangup",
      "metadata": {
        "position": {
          "x": 1183.793957556144,
          "y": 1057.2154540067154
        }
      },
      "messagePlan": {
        "firstMessage": "I'm really glad you reached out today. You're always welcome to call again, even if it's just to talk. Thank you for calling Candling, goodbye."
      }
    },
    {
      "name": "conversation_1747910079663",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": 1820.8896165143137,
          "y": 969.2383382528066
        }
      },
      "prompt": "Situationally categorise situation based on whether their situation is psychological, emotional, sexual, physical or neglect and advise caller. You can say something like \"Thank you for sharing that, I know it's not always easy to talk about these things, and I really appreciate your openness. Based on what you've told me. Would you like to follow up on this, share more about your situation, or do you have any\nquestions about this situation?\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      }
    },
    {
      "name": "hangup_1747910196964",
      "type": "hangup",
      "metadata": {
        "position": {
          "x": 1912.8896165143137,
          "y": 1473.2383382528064
        }
      },
      "messagePlan": {
        "firstMessage": "I'm really glad you reached out today. You're always welcome to call again, even if it's just to talk. Thank you for calling Candling, goodbye."
      }
    },
    {
      "name": "node_1747910323182",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -808.9502809106775,
          "y": 925.3110147669463
        }
      },
      "prompt": "Provide emotional support to the user. You can say something like \"Thank you for sharing that, it really does take strength to open up, and I'm here with you. If you'd like, we can talk a bit more about what you're going through, or I can share some ways others have found support in similar situations.\"",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      }
    },
    {
      "name": "hangup_1747910836171",
      "type": "hangup",
      "metadata": {
        "position": {
          "x": 433.0497190893225,
          "y": 2295.311014766946
        }
      },
      "messagePlan": {
        "firstMessage": "I'm really glad you reached out today. You're always welcome to call again, even if it's just to talk. Thank you for calling Candling, goodbye."
      }
    },
    {
      "name": "hangup_1747910856114",
      "type": "hangup",
      "metadata": {
        "position": {
          "x": 645.0497190893225,
          "y": 1445.3110147669463
        }
      },
      "messagePlan": {
        "firstMessage": "I'm really glad you reached out today. You're always welcome to call again, even if it's just to talk. Thank you for calling Candling, goodbye."
      }
    },
    {
      "name": "node_1747990308737",
      "type": "conversation",
      "metadata": {
        "position": {
          "x": -314.0414450273778,
          "y": 632.3220312492437
        }
      },
      "prompt": "Request for their location and reassure them that help is on the way",
      "voice": {
        "model": "tts-1",
        "speed": 1,
        "voiceId": "nova",
        "provider": "openai",
        "chunkPlan": {
          "enabled": true,
          "formatPlan": {
            "enabled": true,
            "replacements": [],
            "numberToDigitsCutoff": 2025
          },
          "minCharacters": 30,
          "punctuationBoundaries": [
            ".",
            "!",
            "?",
            ";"
          ]
        },
        "cachingEnabled": true
      },
      "globalNodePlan": {
        "enabled": true,
        "enterCondition": "If user is asked for their consent to transfer the call to nine nine nine and they give their consent"
      },
      "variableExtractionPlan": {
        "output": [
          {
            "enum": [],
            "type": "string",
            "title": "location",
            "description": "the caller's current location"
          }
        ]
      }
    },
    {
      type: "tool",
      
    }
  ],
  "edges": [
    {
      "from": "start",
      "to": "conversation_1",
      "condition": {
        "type": "ai",
        "prompt": "if user is in a violent situation"
      }
    },
    {
      "from": "conversation_1",
      "to": "conversation_1747908677614",
      "condition": {
        "type": "ai",
        "prompt": "if the user said no"
      }
    },
    {
      "from": "start",
      "to": "conversation_1747908800013",
      "condition": {
        "type": "ai",
        "prompt": "if user is not in a violent situation"
      }
    },
    {
      "from": "conversation_1747908800013",
      "to": "conversation_1747908870113",
      "condition": {
        "type": "ai",
        "prompt": "User asks for more information"
      }
    },
    {
      "from": "conversation_1747908800013",
      "to": "conversation_1747908964661",
      "condition": {
        "type": "ai",
        "prompt": "Caller is unsure about their situation"
      }
    },
    {
      "from": "conversation_1747908800013",
      "to": "conversation_1747909078645",
      "condition": {
        "type": "ai",
        "prompt": "if user wants a listening ear"
      }
    },
    {
      "from": "conversation_1747909078645",
      "to": "conversation_1747909177012",
      "condition": {
        "type": "ai",
        "prompt": "if the user is in a lot of distress"
      }
    },
    {
      "from": "conversation_1747909177012",
      "to": "conversation_1747909337426",
      "condition": {
        "type": "ai",
        "prompt": "if the user said no"
      }
    },
    {
      "from": "conversation_1747909078645",
      "to": "conversation_1747909566006",
      "condition": {
        "type": "ai",
        "prompt": "if the user is not in a lot of emotional distress"
      }
    },
    {
      "from": "conversation_1747909337426",
      "to": "node_1747909797779",
      "condition": {
        "type": "ai",
        "prompt": "user explains their situation"
      }
    },
    {
      "from": "conversation_1747908870113",
      "to": "hangup_1747910047414",
      "condition": {
        "type": "ai",
        "prompt": "if the user does not have any further questions or clarifications"
      }
    },
    {
      "from": "conversation_1747908964661",
      "to": "conversation_1747910079663",
      "condition": {
        "type": "ai",
        "prompt": "all required information is gathered"
      }
    },
    {
      "from": "conversation_1747910079663",
      "to": "hangup_1747910196964",
      "condition": {
        "type": "ai",
        "prompt": "if user is satisfied with response and does not have further questions "
      }
    },
    {
      "from": "conversation_1747908677614",
      "to": "node_1747910323182",
      "condition": {
        "type": "ai",
        "prompt": "user responds with their situation"
      }
    },
    {
      "from": "node_1747909797779",
      "to": "hangup_1747910836171",
      "condition": {
        "type": "ai",
        "prompt": "if the user is satisfied with what they have shared"
      }
    },
    {
      "from": "conversation_1747909566006",
      "to": "hangup_1747910856114",
      "condition": {
        "type": "ai",
        "prompt": "if the user is satisfied with what they have shared"
      }
    },
    {
      "from": "conversation_1",
      "to": "node_1747990308737",
      "condition": {
        "type": "ai",
        "prompt": "if user said yes"
      }
    }
  ],
  "model": {
    "model": "gpt-4o",
    "messages": [
      {
        "role": "system",
        "content": "You are Candling, an after-hours support assistant for the Ministry of Home Affairs. Your role is to assist individuals in distress—especially those experiencing domestic abuse—by offering empathetic emotional support, sharing accurate information, and guiding them to the appropriate help. Speak in a calm, warm, and non-judgmental tone, always prioritizing emotional safety, privacy, and the caller’s sense of control. Keep your responses brief and clear, ask only one question at a time, and use natural human-like speech with pauses or gentle affirmations to create a sense of trust and comfort. Begin each conversation with: “Hello, you’ve reached Candling, the after-hours support assistant. I’m here to listen, educate, and support you. No personal data is stored. May I ask if you’re currently in a violent situation?” If the caller says yes, respond: “Thank you for sharing that. Given the nature of what you're experiencing, I highly advise transferring you to the relevant authorities. Would you like me to connect you to 999 right now?” If they consent, proceed with the transfer and close the call warmly. If they decline, say: “I completely respect that. I’m still here to support you however I can. If you change your mind at any time, I can help connect you.” If the caller is not in a violent situation or is uncertain, ask: “Are you looking for information, emotional support, or if you're unsure about your situation, we can talk through it together.” If they request information, ask: “Are you looking for information about shelters, protection centres, or something else?” If they’re unsure, say: “That’s completely okay. We can take it step by step. Could you share what’s been going on?” If they need emotional support, respond: “I'm here for you. Would you like to tell me more about how you’ve been feeling or what’s on your mind?” As the caller describes their situation, listen closely and gently reflect back to help them recognize the kind of abuse they might be experiencing—whether physical (e.g., hitting or threats), emotional (e.g., constant criticism or gaslighting), psychological (e.g., control or intimidation), sexual (e.g., coercion or non-consensual acts), or neglect (e.g., denial of basic needs). If applicable, respond with: “From what you’ve shared, it sounds like you may be experiencing [type] abuse. That can be incredibly painful. You’re not alone, and I can walk you through what support is available.” If the caller would like to explore options, say: “There are shelters, protection specialist centres, and confidential services available. If you'd like, I can help you explore what's most suitable for you right now.” If the caller is showing signs of deep distress or significant risk, say: “I’m really concerned about what you’ve shared. It sounds like your safety might be at serious risk. I know you mentioned earlier you didn’t want a transfer, but would you reconsider letting me connect you to someone who can help right away?” At any point, if a request is unclear, ask: “I want to make sure I’m helping you the best I can. Could you tell me a bit more or clarify what you need?” If there’s a technical issue, respond: “I’m so sorry—I’m having trouble accessing that right now. If you’d like, I can take your contact details and get back to you with the information.” Before ending the call, summarize gently: “We’ve talked about [brief summary]. I hope it was helpful. You're always welcome to reach out again, even if it’s just to talk.” Then close with: “Thank you for speaking with me. Please take care of yourself—your safety and well-being matter.”"
      }
    ],
    "provider": "openai",
    "temperature": 0.2
  }
}

const egWorkflow: CreateWorkflowDTO = {
  "nodes": [
    {
      "type": "conversation",
      "model": {
        "provider": "openai",
        "model": "gpt-4.1",
        "temperature": 2,
        "maxTokens": 10000
      },
      "transcriber": {
        "provider": "assembly-ai",
        "language": "en",
        "confidenceThreshold": 0.4,
        "realtimeUrl": "string",
        "wordBoost": [
          "string"
        ],
        "endUtteranceSilenceThreshold": 0,
        "disablePartialTranscripts": true,
        "fallbackPlan": {
          "transcribers": [
            {
              "provider": "assembly-ai",
              "language": "en",
              "confidenceThreshold": 0.4,
              "realtimeUrl": "string",
              "wordBoost": [
                "string"
              ],
              "endUtteranceSilenceThreshold": 0,
              "disablePartialTranscripts": true
            },
            {
              "provider": "azure",
              "language": "af-ZA"
            },
            {
              "provider": "custom-transcriber",
              "server": {
                "timeoutSeconds": 20,
                "url": "string",
                "headers": {},
                "backoffPlan": {
                  "type": "fixed",
                  "maxRetries": 0,
                  "baseDelaySeconds": 1
                }
              }
            },
            {
              "provider": "deepgram",
              "model": "nova-3",
              "language": "ar",
              "smartFormat": false,
              "codeSwitchingEnabled": false,
              "mipOptOut": false,
              "numerals": false,
              "confidenceThreshold": 0.4,
              "keywords": [
                "/p{L}1{15{}4L609}584}122361{89p6}L211p03107}p50{1}20{{L2}82p{1p869}80}077773p}p4206910L{2}15p6/u"
              ],
              "keyterm": [
                "string"
              ],
              "endpointing": 500
            },
            {
              "provider": "11labs",
              "model": "scribe_v1",
              "language": "aa"
            },
            {
              "provider": "gladia",
              "model": "fast",
              "languageBehaviour": "manual",
              "language": "af",
              "transcriptionHint": "custom vocabulary",
              "prosody": false,
              "audioEnhancer": false,
              "confidenceThreshold": 0.4
            },
            {
              "provider": "google",
              "model": "gemini-2.5-pro-preview-05-06",
              "language": "Multilingual"
            },
            {
              "provider": "talkscriber",
              "model": "whisper",
              "language": "en"
            },
            {
              "provider": "speechmatics",
              "model": "default",
              "language": "auto"
            },
            {
              "provider": "openai",
              "model": "gpt-4o-transcribe",
              "language": "af"
            }
          ]
        }
      },
      "voice": {
        "cachingEnabled": true,
        "provider": "azure",
        "voiceId": "andrew",
        "chunkPlan": {
          "enabled": true,
          "minCharacters": 30,
          "punctuationBoundaries": [
            "。",
            "，",
            ".",
            "!",
            "?",
            ";",
            "،",
            "۔",
            "।",
            "॥",
            "|",
            "||",
            ",",
            ":"
          ],
          "formatPlan": {
            "enabled": true,
            "numberToDigitsCutoff": 2025,
            "replacements": [
              {
                "type": "exact",
                "replaceAllEnabled": false,
                "key": "string",
                "value": "string"
              },
              {
                "type": "regex",
                "regex": "string",
                "options": [
                  {
                    "type": "ignore-case",
                    "enabled": true
                  }
                ],
                "value": "string"
              }
            ],
            "formattersEnabled": [
              "markdown"
            ]
          }
        },
        "speed": 2,
        "fallbackPlan": {
          "voices": [
            {
              "cachingEnabled": true,
              "provider": "azure",
              "voiceId": "andrew",
              "speed": 2,
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "cartesia",
              "voiceId": "string",
              "model": "sonic-english",
              "language": "en",
              "experimentalControls": {
                "speed": "normal",
                "emotion": [
                  "happiness:high"
                ]
              },
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "hume",
              "model": "octave",
              "voiceId": "string",
              "isCustomHumeVoice": false,
              "description": "string",
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "custom-voice",
              "server": {
                "timeoutSeconds": 20,
                "url": "string",
                "headers": {},
                "backoffPlan": {
                  "type": "fixed",
                  "maxRetries": 0,
                  "baseDelaySeconds": 1
                }
              },
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "deepgram",
              "voiceId": "asteria",
              "model": "aura-2",
              "mipOptOut": false,
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "11labs",
              "voiceId": "burt",
              "stability": 0.5,
              "similarityBoost": 0.75,
              "style": 0,
              "useSpeakerBoost": false,
              "speed": 0.9,
              "optimizeStreamingLatency": 3,
              "enableSsmlParsing": false,
              "autoMode": false,
              "model": "eleven_turbo_v2_5",
              "language": "string",
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "vapi",
              "voiceId": "Elliot",
              "speed": 1,
              "language": "en-US",
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "lmnt",
              "voiceId": "lily",
              "speed": null,
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "openai",
              "voiceId": "alloy",
              "model": "tts-1",
              "instructions": "string",
              "speed": null,
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "playht",
              "voiceId": "jennifer",
              "speed": null,
              "temperature": null,
              "emotion": null,
              "voiceGuidance": null,
              "styleGuidance": null,
              "textGuidance": null,
              "model": "PlayHT2.0",
              "language": "afrikaans",
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "rime-ai",
              "voiceId": "abbie",
              "model": "mistv2",
              "speed": null,
              "pauseBetweenBrackets": false,
              "phonemizeBetweenBrackets": false,
              "reduceLatency": false,
              "inlineSpeedAlpha": null,
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "smallest-ai",
              "voiceId": "emily",
              "model": "lightning",
              "speed": null,
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            },
            {
              "cachingEnabled": true,
              "provider": "tavus",
              "voiceId": "r52da2535a",
              "personaId": "string",
              "callbackUrl": "string",
              "conversationName": "string",
              "conversationalContext": "string",
              "customGreeting": "string",
              "properties": {
                "maxCallDuration": 0,
                "participantLeftTimeout": 0,
                "participantAbsentTimeout": 0,
                "enableRecording": true,
                "enableTranscription": true,
                "applyGreenscreen": true,
                "language": "string",
                "recordingS3BucketName": "string",
                "recordingS3BucketRegion": "string",
                "awsAssumeRoleArn": "string"
              },
              "chunkPlan": {
                "enabled": true,
                "minCharacters": 30,
                "punctuationBoundaries": [
                  "。",
                  "，",
                  ".",
                  "!",
                  "?",
                  ";",
                  "،",
                  "۔",
                  "।",
                  "॥",
                  "|",
                  "||",
                  ",",
                  ":"
                ],
                "formatPlan": {
                  "enabled": true,
                  "numberToDigitsCutoff": 2025,
                  "replacements": [
                    {
                      "type": "exact",
                      "replaceAllEnabled": false,
                      "key": "string",
                      "value": "string"
                    },
                    {
                      "type": "regex",
                      "regex": "string",
                      "options": [
                        {
                          "type": "ignore-case",
                          "enabled": true
                        }
                      ],
                      "value": "string"
                    }
                  ],
                  "formattersEnabled": [
                    "markdown"
                  ]
                }
              }
            }
          ]
        }
      },
      "prompt": "string",
      "globalNodePlan": {
        "enabled": false,
        "enterCondition": ""
      },
      "variableExtractionPlan": {
        "output": [
          {
            "type": "string",
            "title": "/4ZqSMVyXu4fof/",
            "description": "string",
            "enum": [
              "string"
            ]
          }
        ]
      },
      "name": "string",
      "isStart": true,
      "metadata": {}
    },
    {
      "type": "tool",
      "tool": {
        "async": false,
        "messages": [
          {
            "contents": [
              {
                "type": "text",
                "text": "string",
                "language": "aa"
              }
            ],
            "type": "request-start",
            "blocking": false,
            "content": "string",
            "conditions": [
              {
                "operator": "eq",
                "param": "string",
                "value": "string"
              }
            ]
          },
          {
            "contents": [
              {
                "type": "text",
                "text": "string",
                "language": "aa"
              }
            ],
            "type": "request-complete",
            "role": "assistant",
            "endCallAfterSpokenEnabled": false,
            "content": "string",
            "conditions": [
              {
                "operator": "eq",
                "param": "string",
                "value": "string"
              }
            ]
          },
          {
            "contents": [
              {
                "type": "text",
                "text": "string",
                "language": "aa"
              }
            ],
            "type": "request-failed",
            "endCallAfterSpokenEnabled": false,
            "content": "string",
            "conditions": [
              {
                "operator": "eq",
                "param": "string",
                "value": "string"
              }
            ]
          },
          {
            "contents": [
              {
                "type": "text",
                "text": "string",
                "language": "aa"
              }
            ],
            "type": "request-response-delayed",
            "timingMilliseconds": 1000,
            "content": "string",
            "conditions": [
              {
                "operator": "eq",
                "param": "string",
                "value": "string"
              }
            ]
          }
        ],
        "type": "apiRequest",
        "method": "POST",
        "timeoutSeconds": 20,
        "name": "string",
        "description": "string",
        "url": "string",
        "body": {
          "type": "string",
          "items": {},
          "properties": {},
          "description": "string",
          "required": [
            "string"
          ],
          "regex": "string",
          "value": "string",
          "target": "string",
          "enum": [
            "string"
          ]
        },
        "headers": {
          "type": "string",
          "items": {},
          "properties": {},
          "description": "string",
          "required": [
            "string"
          ],
          "regex": "string",
          "value": "string",
          "target": "string",
          "enum": [
            "string"
          ]
        },
        "backoffPlan": {
          "type": "fixed",
          "maxRetries": 0,
          "baseDelaySeconds": 1
        },
        "function": {
          "strict": false,
          "name": "/9jinGvYi0qgL6QME2nAt8zbCDAu7JxA_sf3ZygHEtuDF4P7ok1S/",
          "description": "string",
          "parameters": {
            "type": "object",
            "properties": {
              "additionalProp1": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "string",
                "required": [
                  "string"
                ],
                "regex": "string",
                "value": "string",
                "target": "string",
                "enum": [
                  "string"
                ]
              },
              "additionalProp2": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "string",
                "required": [
                  "string"
                ],
                "regex": "string",
                "value": "string",
                "target": "string",
                "enum": [
                  "string"
                ]
              },
              "additionalProp3": {
                "type": "string",
                "items": {},
                "properties": {},
                "description": "string",
                "required": [
                  "string"
                ],
                "regex": "string",
                "value": "string",
                "target": "string",
                "enum": [
                  "string"
                ]
              }
            },
            "required": [
              "string"
            ]
          }
        },
        "server": {
          "timeoutSeconds": 20,
          "url": "string",
          "headers": {},
          "backoffPlan": {
            "type": "fixed",
            "maxRetries": 0,
            "baseDelaySeconds": 1
          }
        }
      },
      "toolId": "string",
      "name": "string",
      "isStart": true,
      "metadata": {}
    }
  ],
  "model": {
    "provider": "openai",
    "model": "gpt-4.1",
    "temperature": 2,
    "maxTokens": 10000
  },
  "name": "string",
  "edges": [
    {
      "condition": {
        "type": "ai",
        "prompt": "string"
      },
      "from": "string",
      "to": "string",
      "metadata": {}
    }
  ]
}