// ═══════════════════════════════════════════════════════
// AI Router — ML Project Preset
// ═══════════════════════════════════════════════════════
//
// Free providers first, Claude as final fallback.
// Used by MegaLaunch for any AI-powered features.

import type { AIRouterConfig, AIProviderID } from "ai-router";

const ML_PROVIDERS: AIProviderID[] = [
  "cerebras",
  "sambanova",
  "gemini",
  "mistral",
  "cohere",
  "openrouter",
  "together",
  "fireworks",
  "groq",
  "openai",
  "claude-cli",
  "claude",
];

export const ML_PRESET: Partial<AIRouterConfig> = {
  projectName: "ML",
  defaultProvider: "auto",
  providers: ML_PROVIDERS,
  maxInputChars: 4000,
  retryDelayMs: 2000,
  maxRetries: 2,
};
