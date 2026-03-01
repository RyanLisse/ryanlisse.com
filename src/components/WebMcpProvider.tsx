"use client";

import type {} from "@mcp-b/webmcp-types";
import { initializeWebMCPPolyfill } from "@mcp-b/webmcp-polyfill";
import { useEffect } from "react";
import type { WebMcpCatalog } from "@/lib/webmcp/catalog";
import { createWebMcpTools } from "@/lib/webmcp/client";

declare global {
  interface Window {
    __ryanLisseWebMcpRegistered?: boolean;
  }
}

type WebMcpProviderProps = {
  catalog: WebMcpCatalog;
};

export function WebMcpProvider({ catalog }: WebMcpProviderProps) {
  useEffect(() => {
    if (!catalog.enabled || typeof window === "undefined" || typeof navigator === "undefined") {
      return;
    }

    initializeWebMCPPolyfill({
      installTestingShim: process.env.NODE_ENV === "production" ? false : "if-missing",
    });

    if (window.__ryanLisseWebMcpRegistered) {
      return;
    }

    const tools = createWebMcpTools(catalog);

    for (const tool of tools) {
      navigator.modelContext.registerTool(tool as never);
    }

    window.__ryanLisseWebMcpRegistered = true;

    return () => {
      if (typeof navigator.modelContext?.unregisterTool === "function") {
        for (const tool of tools) {
          navigator.modelContext.unregisterTool(tool.name);
        }
      }

      window.__ryanLisseWebMcpRegistered = false;
    };
  }, [catalog]);

  return null;
}
