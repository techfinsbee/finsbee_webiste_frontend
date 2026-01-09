"use client";

import { useEffect } from "react";
import mixpanel, { initMixpanel } from "@/lib/mixpanel";
import { usePathname } from "next/navigation";


export default function MixpanelProvider({ children }) {
  const pathname = usePathname();

  // Init only once
  useEffect(() => {
    initMixpanel();
  }, []);

  // Track page views
  useEffect(() => {
    if (!pathname) return;
    mixpanel.track("Page View", {
      page: pathname,
    });
  }, [pathname]);

  return children;
}
