"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ToastType = "default" | "success" | "error" | "loading";

interface ToastItem {
  id: number | string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastOptions {
  id?: number | string;
  duration?: number;
}

type Listener = (items: ToastItem[]) => void;

let toastStore: ToastItem[] = [];
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener([...toastStore]));
}

function removeToast(id: number | string) {
  toastStore = toastStore.filter((item) => item.id !== id);
  emit();
}

function upsertToast(type: ToastType, message: string, options?: ToastOptions) {
  const id = options?.id ?? Date.now() + Math.floor(Math.random() * 1000);
  const duration = type === "loading" ? 0 : options?.duration ?? 3500;

  const nextToast: ToastItem = { id, message, type, duration };
  const exists = toastStore.some((item) => item.id === id);

  toastStore = exists
    ? toastStore.map((item) => (item.id === id ? nextToast : item))
    : [nextToast, ...toastStore].slice(0, 3);
  emit();

  if (duration > 0) {
    window.setTimeout(() => removeToast(id), duration);
  }

  return id;
}

export const toast = {
  loading: (message: string, options?: ToastOptions) =>
    upsertToast("loading", message, options),
  success: (message: string, options?: ToastOptions) =>
    upsertToast("success", message, options),
  error: (message: string, options?: ToastOptions) =>
    upsertToast("error", message, options),
  message: (message: string, options?: ToastOptions) =>
    upsertToast("default", message, options),
  dismiss: (id?: number | string) => {
    if (id === undefined) {
      toastStore = [];
      emit();
      return;
    }

    removeToast(id);
  },
};

type ToasterProps = {
  position?: "top-center";
};

export function Toaster({ position = "top-center" }: ToasterProps) {
  const [toasts, setToasts] = useState<ToastItem[]>(toastStore);

  useEffect(() => {
    const listener: Listener = (items) => setToasts(items);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return (
    <div
      className={`fixed z-[110] pointer-events-none ${
        position === "top-center" ? "top-4 left-1/2 -translate-x-1/2" : "top-4 left-4"
      }`}
    >
      <AnimatePresence>
        {toasts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            className="pointer-events-auto mt-2 w-[min(90vw,28rem)] rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 shadow-lg backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <p
                className={`font-medium ${
                  item.type === "success"
                    ? "text-emerald-300"
                    : item.type === "error"
                      ? "text-rose-300"
                      : item.type === "loading"
                        ? "text-blue-300"
                        : "text-slate-100"
                }`}
              >
                {item.message}
              </p>
              <button
                className="text-slate-400 hover:text-white"
                onClick={() => toast.dismiss(item.id)}
                aria-label="Dismiss toast"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
