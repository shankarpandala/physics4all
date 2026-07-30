"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/physics4all/sw.js", { scope: "/physics4all/" })
        .catch(() => {});
    }
  }, []);

  return null;
}
