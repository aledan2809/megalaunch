// ═══════════════════════════════════════════════════════
// AI Router — ML Project Entry Point
// ═══════════════════════════════════════════════════════

import { AIRouter } from "ai-router";
import type { AIRequest, AIResponse } from "ai-router";
import { ML_PRESET } from "./ml-preset";

export { ML_PRESET } from "./ml-preset";
export type { AIRequest, AIResponse } from "ai-router";

// Singleton router instance for the ML project
let _router: AIRouter | null = null;

function getRouter(): AIRouter {
  if (!_router) {
    _router = new AIRouter(ML_PRESET);
  }
  return _router;
}

/**
 * Route an AI request through the ML preset.
 * Free providers are tried first, with Claude as final fallback.
 */
export async function routeAI(request: AIRequest): Promise<AIResponse> {
  return getRouter().chat(request);
}

/**
 * Get the underlying router instance (for health checks, metrics, etc.)
 */
export function getMLRouter(): AIRouter {
  return getRouter();
}
