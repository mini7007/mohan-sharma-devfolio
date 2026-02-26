"use client";
import { useEffect, useState } from "react";

interface DeviceInfo {
  isTouchDevice: boolean;
  prefersReducedMotion: boolean;
  isLowEndDevice: boolean;
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isTouchDevice: false,
    prefersReducedMotion: false,
    isLowEndDevice: false,
  });

  useEffect(() => {
    // Check for touch device
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      navigator.maxTouchPoints > 0 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check for low-end device (estimated via memory)
    const isLowEndDevice =
      (navigator.deviceMemory as number) < 4 ||
      window.matchMedia("(prefers-reduced-data: reduce)").matches;

    setDeviceInfo({
      isTouchDevice,
      prefersReducedMotion,
      isLowEndDevice,
    });

    // Listen for changes
    const reduceMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleReduceMotionChange = () => {
      setDeviceInfo((prev) => ({
        ...prev,
        prefersReducedMotion: reduceMotionMQ.matches,
      }));
    };

    reduceMotionMQ.addEventListener("change", handleReduceMotionChange);
    return () =>
      reduceMotionMQ.removeEventListener("change", handleReduceMotionChange);
  }, []);

  return deviceInfo;
}
