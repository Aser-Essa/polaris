"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [blockingLoading, setBlockingLoading] = useState(false);
  const [backgroundLoading, setBackgroundLoading] = useState(false);

  const handleBlocking = async () => {
    setBlockingLoading(true);
    await fetch("/api/demo/blocking", { method: "POST" });
    setBlockingLoading(false);
  };

  const handleBackground = async () => {
    setBackgroundLoading(true);
    await fetch("/api/demo/background", { method: "POST" });
    setBackgroundLoading(false);
  };

  const handleClientError = async () => {
    throw new Error("Client Error: Something went wrong!");
  };

  const handleApiError = async () => {
    await fetch("/api/demo/error", { method: "POST" });
  };

  const handleInngestError = async () => {
    await fetch("/api/demo/inngest-error", { method: "POST" });
  };

  return (
    <div>
      <Button disabled={blockingLoading} onClick={handleBlocking}>
        {blockingLoading ? "loading" : "Blocking"}
      </Button>

      <Button disabled={backgroundLoading} onClick={handleBackground}>
        {backgroundLoading ? "loading" : "Background"}
      </Button>

      <div className=" mt-5 space-x-3">
        <Button onClick={handleClientError} variant={"destructive"}>
          Client Error
        </Button>

        <Button onClick={handleApiError} variant={"destructive"}>
          API Error
        </Button>

        <Button onClick={handleInngestError} variant={"destructive"}>
          Inngest Error
        </Button>
      </div>
    </div>
  );
}
