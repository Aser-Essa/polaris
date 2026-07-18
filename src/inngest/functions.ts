// src/inngest/functions.ts
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { inngest } from "./client";

export const demoGenerate = inngest.createFunction(
  { id: "demo-generate", triggers: { event: "demo/generate" } },
  async ({ step }) => {
    await step.run("generate-text", async () => {
      return await generateText({
        model: google("gemini-3-flash-preview"),
        prompt: "Write a vegetarian lasagna recipe for 4 people.",
      });
    });
  },
);
