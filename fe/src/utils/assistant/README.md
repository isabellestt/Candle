# Assistant Factory System

This system allows you to easily create multiple assistants with different voices without duplicating code.

## Quick Start

### 1. Create a new assistant with a predefined voice type:

```typescript
import { createNewAssistant } from "./assistantExamples";

const myAssistant = createNewAssistant("John", "TEENAGE_FRIEND");
```

### 2. Create a custom assistant with specific configuration:

```typescript
import { createAssistant } from "./assistantFactory";

const customAssistant = createAssistant({
  name: "Custom Assistant",
  voiceId: "Harry", // or use VOICE_CONFIG.TEENAGE_FRIEND
  systemPrompt: "Your custom system prompt here...",
  firstMessage: "Hello! How can I help you?",
  endCallMessage: "Thanks for calling! Take care!",
});
```

## Available Voice Types

Use these predefined voice types from `voiceConfig.ts`:

- `TEENAGE_FRIEND` - Harry (Male, friendly)
- `YOUNG_COUNSELOR` - Hana (Female, warm)
- `SUPPORT_COMPANION` - Adam (Male, supportive)
- `PROFESSIONAL_COUNSELOR` - Sarah (Female, professional)
- `HELPLINE_AGENT` - Hana (Female, caring)
- `CRISIS_SUPPORT` - Emma (Female, calm)
- `AUTHORITY_FIGURE` - James (Male, authoritative)
- `EMERGENCY_RESPONDER` - Michael (Male, clear)

## Available Voice IDs

Direct voice IDs you can use:

**Male Voices:**
- `Harry` - Friendly, approachable
- `Adam` - Warm, supportive
- `James` - Authoritative, clear
- `Michael` - Professional, calm

**Female Voices:**
- `Hana` - Warm, caring
- `Sarah` - Professional, empathetic
- `Emma` - Calm, soothing
- `Lucy` - Gentle, understanding

**Neutral/Other:**
- `Alex` - Neutral, adaptable
- `Sam` - Versatile, friendly

## Examples

### Example 1: Create a teenage support assistant
```typescript
const teenAssistant = createNewAssistant("Alex", "TEENAGE_FRIEND");
```

### Example 2: Create a professional counselor
```typescript
const counselorAssistant = createNewAssistant("Dr. Sarah", "PROFESSIONAL_COUNSELOR");
```

### Example 3: Create a custom assistant with specific voice
```typescript
const customAssistant = createAssistant({
  name: "Emergency Support",
  voiceId: "Michael", // Direct voice ID
  systemPrompt: "You are an emergency support assistant...",
  firstMessage: "Emergency support, how can I help?",
  endCallMessage: "Stay safe and take care.",
});
```

## Using in your app

1. **Import the assistant:**
```typescript
import { getAssistantByName } from "./assistants";
```

2. **Use in your VAPI hook:**
```typescript
const assistant = getAssistantByName("Noah"); // Returns Noah assistant
```

3. **Or create dynamically:**
```typescript
const dynamicAssistant = createNewAssistant("Dynamic", "YOUNG_COUNSELOR");
```

## Benefits

- **No code duplication** - All assistants share the same base configuration
- **Easy voice changes** - Change voices by updating one line
- **Type safety** - TypeScript ensures you use valid voice IDs
- **Centralized management** - All voice options in one place
- **Flexible** - Can use predefined types or direct voice IDs

## Adding New Voices

To add new voices, update `voiceConfig.ts`:

```typescript
export const VOICE_IDS = {
  // ... existing voices
  NEW_VOICE: "NewVoiceId",
} as const;

export const VOICE_CONFIG = {
  // ... existing configs
  NEW_TYPE: VOICE_IDS.NEW_VOICE,
} as const;
``` 