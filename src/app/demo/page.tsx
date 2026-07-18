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

  return (
    <div>
      <Button disabled={blockingLoading} onClick={handleBlocking}>
        {blockingLoading ? "loading" : "Blocking"}
      </Button>

      <Button disabled={backgroundLoading} onClick={handleBackground}>
        {backgroundLoading ? "loading" : "Background"}
      </Button>
    </div>
  );
}
