import { cn } from "@/lib/cn";
import type { LiquidVariant } from "@/lib/utils";

import type { InputSize } from "./input.types";

const baseInput =
  "w-full rounded-xl border px-4 text-sm text-liquid-ink placeholder:text-liquid-subtle/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liquid-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60";

const sizeMap: Record<InputSize, string> = {
  sm: "h-9",
  md: "h-11",
  lg: "h-12",
};

const variantMap: Record<LiquidVariant, string> = {
  glass:
    "liquid-glass border-white/60 bg-white/40 dark:border-slate-500/38 dark:bg-slate-900/60",
  neo: "liquid-neo dark:border-slate-500/38 dark:bg-slate-900/58",
  hybrid:
    "border-cyan-200/40 bg-linear-to-br from-white/80 via-sky-100/55 to-teal-100/45 shadow-[inset_1px_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(15,23,42,0.12)] backdrop-blur-sm dark:border-cyan-500/28 dark:from-slate-900/78 dark:via-cyan-900/30 dark:to-emerald-900/24",
};

export function getInputClasses(
  variant: LiquidVariant,
  inputSize: InputSize,
  invalid?: boolean,
) {
  return cn(
    baseInput,
    sizeMap[inputSize],
    variantMap[variant],
    invalid && "border-rose-400 focus-visible:ring-rose-400",
  );
}
