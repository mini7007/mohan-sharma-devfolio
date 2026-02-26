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
    // Touch device detection
    const isTouchDevice =
      window.matchMedia("(hover: none)").matches ||
      navigator.maxTouchPoints > 0 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Safe deviceMemory detection
    const nav = navigator as Navigator & { deviceMemory?: number };
    const deviceMemory = nav.deviceMemory ?? 8;

    const isLowEndDevice =
      deviceMemory < 4 ||
      window.matchMedia("(prefers-reduced-data: reduce)").matches;

    setDeviceInfo({
      isTouchDevice,
      prefersReducedMotion,
      isLowEndDevice,
    });

    const reduceMotionMQ = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const handleReduceMotionChange = () => {
      setDeviceInfo((prev) => ({
        ...prev,
        prefersReducedMotion: reduceMotionMQ.matches,
      }));
    };

    reduceMotionMQ.addEventListener("change", handleReduceMotionChange);

    return () => {
      reduceMotionMQ.removeEventListener(
        "change",
        handleReduceMotionChange
      );
    };
  }, []);

  return deviceInfo;
}