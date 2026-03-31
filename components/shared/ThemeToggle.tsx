"use client";

import { useEffect, useSyncExternalStore } from "react";

import { cn } from "@/lib/cn";

type ThemeMode = "light" | "dark";

const THEME_KEY = "liquid-theme";
const THEME_EVENT = "liquid-theme-change";

function getPreferredTheme(): ThemeMode {
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Ignore storage access issues and fallback to system preference.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function subscribeThemeChange(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const mediaChangeHandler = () => onStoreChange();

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", mediaChangeHandler);
  } else if (typeof media.addListener === "function") {
    media.addListener(mediaChangeHandler);
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(THEME_EVENT, onStoreChange);

  return () => {
    if (typeof media.removeEventListener === "function") {
      media.removeEventListener("change", mediaChangeHandler);
    } else if (typeof media.removeListener === "function") {
      media.removeListener(mediaChangeHandler);
    }

    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(THEME_EVENT, onStoreChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeThemeChange,
    getPreferredTheme,
    () => "light",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Ignore storage write failures in restricted environments.
    }
  }, [theme]);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      // Ignore storage write failures in restricted environments.
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition sm:px-4 sm:py-2 sm:text-sm",
        "border-liquid-ink/15 bg-liquid-surface/80 text-liquid-ink hover:bg-liquid-surface",
        "shadow-[0_8px_20px_rgba(15,23,42,0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liquid-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
      )}
      aria-label="Toggle light and dark theme"
    >
      <span
        className={cn(
          "size-2 rounded-full",
          theme === "light" ? "bg-slate-500" : "bg-cyan-400",
        )}
      />
      {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
}
