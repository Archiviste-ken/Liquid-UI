import { cn } from "@/lib/cn";
import type { LiquidVariant } from "@/lib/utils";

const base = "liquid-panel rounded-2xl p-6 transition duration-200";

const variantMap: Record<LiquidVariant, string> = {
  glass: "liquid-glass",
  neo: "liquid-neo",
  hybrid:
    "border-cyan-200/36 bg-linear-to-br from-white/82 via-sky-100/46 to-teal-100/38 shadow-[0_16px_36px_rgba(2,6,23,0.14)] backdrop-blur-md dark:border-cyan-500/28 dark:from-slate-900/82 dark:via-cyan-900/34 dark:to-emerald-900/28 dark:shadow-[0_18px_38px_rgba(0,0,0,0.46)]",
};

export function getCardClasses(variant: LiquidVariant) {
  return cn(base, variantMap[variant]);
}
