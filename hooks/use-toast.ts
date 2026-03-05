"use client";

import { useCallback, useEffect, useState } from "react";

export type ToastVariant = "default" | "success" | "destructive";

export interface ToastInput {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastItem extends ToastInput {
  id: number;
}

type Listener = (toasts: ToastItem[]) => void;

let toastStore: ToastItem[] = [];
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener([...toastStore]));
}

function removeToast(id: number) {
  toastStore = toastStore.filter((toast) => toast.id !== id);
  emit();
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>(toastStore);

  useEffect(() => {
    const listener: Listener = (nextToasts) => setToasts(nextToasts);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const toast = useCallback((input: ToastInput) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    const nextToast: ToastItem = {
      id,
      variant: input.variant ?? "default",
      duration: input.duration ?? 3500,
      ...input,
    };

    toastStore = [nextToast, ...toastStore].slice(0, 3);
    emit();

    window.setTimeout(() => removeToast(id), nextToast.duration);

    return id;
  }, []);

  const dismiss = useCallback((id: number) => {
    removeToast(id);
  }, []);

  return { toast, toasts, dismiss };
}
