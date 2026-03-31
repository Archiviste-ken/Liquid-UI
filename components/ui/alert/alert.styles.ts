import { cn } from "@/lib/cn";
import type { LiquidVariant } from "@/lib/utils";

import type { AlertIntent } from "./alert.types";

const base = "liquid-panel rounded-xl border px-4 py-3 backdrop-blur-sm";

const intentMap: Record<AlertIntent, string> = {
  info: "text-sky-950 dark:text-sky-100",
  success: "text-emerald-950 dark:text-emerald-100",
  warning: "text-amber-950 dark:text-amber-100",
  danger: "text-rose-950 dark:text-rose-100",
};

const variantMap: Record<LiquidVariant, Record<AlertIntent, string>> = {
  glass: {
    info: "border-sky-300/58 bg-linear-to-br from-sky-100/92 to-cyan-100/78 shadow-[0_8px_20px_rgba(56,189,248,0.18)] dark:border-sky-500/45 dark:from-sky-900/66 dark:to-cyan-900/52 dark:shadow-[0_12px_30px_rgba(2,6,23,0.42)]",
    success:
      "border-emerald-300/58 bg-linear-to-br from-emerald-100/92 to-teal-100/78 shadow-[0_8px_20px_rgba(16,185,129,0.18)] dark:border-emerald-500/45 dark:from-emerald-900/66 dark:to-teal-900/52 dark:shadow-[0_12px_30px_rgba(2,6,23,0.42)]",
    warning:
      "border-amber-300/58 bg-linear-to-br from-amber-100/92 to-orange-100/78 shadow-[0_8px_20px_rgba(245,158,11,0.18)] dark:border-amber-500/45 dark:from-amber-900/66 dark:to-orange-900/52 dark:shadow-[0_12px_30px_rgba(2,6,23,0.42)]",
    danger:
      "border-rose-300/58 bg-linear-to-br from-rose-100/92 to-fuchsia-100/78 shadow-[0_8px_20px_rgba(244,63,94,0.2)] dark:border-rose-500/45 dark:from-rose-900/66 dark:to-fuchsia-900/52 dark:shadow-[0_12px_30px_rgba(2,6,23,0.42)]",
  },
  neo: {
    info: "liquid-neo border-sky-300/55 bg-sky-50 dark:border-sky-500/40 dark:bg-sky-950/42",
    success:
      "liquid-neo border-emerald-300/55 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-950/42",
    warning:
      "liquid-neo border-amber-300/55 bg-amber-50 dark:border-amber-500/40 dark:bg-amber-950/42",
    danger:
      "liquid-neo border-rose-300/55 bg-rose-50 dark:border-rose-500/40 dark:bg-rose-950/42",
  },
  hybrid: {
    info: "border-sky-300/60 bg-linear-to-br from-sky-100/88 to-cyan-100/65 dark:border-sky-500/42 dark:from-sky-900/48 dark:to-cyan-900/38",
    success:
      "border-emerald-300/60 bg-linear-to-br from-emerald-100/88 to-teal-100/65 dark:border-emerald-500/42 dark:from-emerald-900/48 dark:to-teal-900/38",
    warning:
      "border-amber-300/60 bg-linear-to-br from-amber-100/88 to-orange-100/65 dark:border-amber-500/42 dark:from-amber-900/48 dark:to-orange-900/38",
    danger:
      "border-rose-300/60 bg-linear-to-br from-rose-100/88 to-fuchsia-100/65 dark:border-rose-500/42 dark:from-rose-900/48 dark:to-fuchsia-900/38",
  },
};

export function getAlertClasses(variant: LiquidVariant, intent: AlertIntent) {
  return cn(base, variantMap[variant][intent], intentMap[intent]);
}
