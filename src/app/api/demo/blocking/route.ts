import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST() {
  const response = await generateText({
    model: google("gemini-3.5-flash"),
    prompt: "Write a vegetarian lasagna recipe for 5 people.",
    telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    },
  });

  return Response.json({ response });
}
