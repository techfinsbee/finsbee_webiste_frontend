"use client";

import { useEffect, useState } from "react";
import MixpanelProvider from "./MixpanelProvider";
import FacebookPixel from "./FacebookPixel";


export default function TrackingProvider({ children }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie_consent") === "accepted") {
      setEnabled(true);
    }
  }, []);

  return (
    <>
      {enabled && (
        <>
          <MixpanelProvider />
          <FacebookPixel />
        </>
      )}
      {children}
    </>
  );
}