"use client";

import { ReactNode, useEffect, useState } from "react";
import OfflineArcade from "./OfflineArcade";

type Props = {
  children: ReactNode;
};

export default function OfflineExperienceGate({ children }: Props) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <>
      {children}
      {!isOnline && <OfflineArcade />}
    </>
  );
}
