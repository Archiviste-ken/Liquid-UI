import { cn } from "@/lib/cn";

import type { ButtonIntent, ButtonSize } from "./button.types";
import type { LiquidVariant } from "@/lib/utils";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-xl border font-semibold transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liquid-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:translate-y-px disabled:cursor-not-allowed disabled:opacity-65";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const toneByVariant: Record<LiquidVariant, Record<ButtonIntent, string>> = {
  glass: {
    primary:
      "border-cyan-400/70 bg-linear-to-br from-cyan-300/90 via-sky-300/85 to-emerald-300/90 text-slate-950 shadow-[0_10px_28px_rgba(14,165,233,0.28)] hover:brightness-[1.04] dark:border-cyan-300/60 dark:from-cyan-500/70 dark:via-sky-500/55 dark:to-emerald-500/65 dark:text-cyan-50 dark:shadow-[0_14px_34px_rgba(14,165,233,0.42)]",
    secondary:
      "border-slate-300/80 bg-white/80 text-slate-900 shadow-[0_8px_20px_rgba(71,85,105,0.18)] hover:bg-white/95 dark:border-slate-400/55 dark:bg-slate-800/72 dark:text-slate-100 dark:shadow-[0_10px_26px_rgba(2,6,23,0.5)]",
    danger:
      "border-fuchsia-400/70 bg-linear-to-br from-rose-400/88 via-fuchsia-400/84 to-pink-400/88 text-rose-950 shadow-[0_10px_28px_rgba(244,63,94,0.32)] hover:brightness-[1.04] dark:border-fuchsia-300/62 dark:from-rose-500/72 dark:via-fuchsia-500/58 dark:to-pink-500/66 dark:text-rose-50 dark:shadow-[0_14px_34px_rgba(244,63,94,0.42)]",
    minimal:
      "border-slate-300/55 bg-white/45 text-liquid-ink hover:bg-white/75 dark:border-slate-500/45 dark:bg-slate-800/45 dark:text-slate-100 dark:hover:bg-slate-800/72",
  },
  neo: {
    primary:
      "liquid-neo border-cyan-200/70 bg-cyan-100 text-cyan-900 shadow-[7px_7px_16px_rgba(21,94,117,0.2),-7px_-7px_16px_rgba(255,255,255,0.72)] hover:brightness-[1.05] dark:border-cyan-500/40 dark:bg-cyan-900/52 dark:text-cyan-50",
    secondary:
      "liquid-neo border-slate-200/70 bg-slate-100 text-slate-800 hover:brightness-[1.03] dark:border-slate-500/40 dark:bg-slate-800/62 dark:text-slate-100",
    danger:
      "liquid-neo border-rose-200/75 bg-rose-100 text-rose-900 hover:brightness-[1.03] dark:border-rose-500/45 dark:bg-rose-900/52 dark:text-rose-50",
    minimal:
      "liquid-neo border-slate-200/65 bg-slate-100/75 text-slate-800 hover:brightness-[1.03] dark:border-slate-500/35 dark:bg-slate-800/54 dark:text-slate-100",
  },
  hybrid: {
    primary:
      "border-cyan-400/68 bg-linear-to-br from-cyan-300/88 via-sky-300/76 to-emerald-300/84 text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.3)] backdrop-blur-md hover:shadow-[0_18px_38px_rgba(14,165,233,0.38)] dark:border-cyan-300/62 dark:from-cyan-500/68 dark:via-sky-500/52 dark:to-emerald-500/62 dark:text-cyan-50",
    secondary:
      "border-slate-300/65 bg-linear-to-br from-slate-100/94 via-white/44 to-slate-200/78 text-slate-900 shadow-[0_10px_26px_rgba(71,85,105,0.2)] backdrop-blur-md hover:shadow-[0_14px_34px_rgba(71,85,105,0.24)] dark:border-slate-400/50 dark:from-slate-700/64 dark:via-slate-700/44 dark:to-slate-800/62 dark:text-slate-100",
    danger:
      "border-fuchsia-400/68 bg-linear-to-br from-rose-400/86 via-fuchsia-400/76 to-pink-400/84 text-rose-950 shadow-[0_12px_30px_rgba(244,63,94,0.32)] backdrop-blur-md hover:shadow-[0_18px_38px_rgba(244,63,94,0.4)] dark:border-fuchsia-300/62 dark:from-rose-500/68 dark:via-fuchsia-500/52 dark:to-pink-500/62 dark:text-rose-50",
    minimal:
      "border-slate-300/55 bg-linear-to-br from-slate-100/82 to-white/42 text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.16)] backdrop-blur-sm hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)] dark:border-slate-500/46 dark:from-slate-700/62 dark:to-slate-800/52 dark:text-slate-100",
  },
};

const glowByVariant: Record<LiquidVariant, string> = {
  glass:
    "after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.28),transparent_62%)]",
  neo: "after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top,rgba(167,243,208,0.24),transparent_65%)]",
  hybrid:
    "after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.24),transparent_58%)]",
};

type ButtonClassOptions = {
  variant: LiquidVariant;
  intent: ButtonIntent;
  size: ButtonSize;
  withGlow?: boolean;
};

export function getButtonClasses({
  variant,
  intent,
  size,
  withGlow,
}: ButtonClassOptions) {
  return cn(
    base,
    sizeClasses[size],
    toneByVariant[variant][intent],
    withGlow && glowByVariant[variant],
  );
}
