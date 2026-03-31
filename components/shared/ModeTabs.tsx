"use client";

import {
  liquidVariantLabels,
  liquidVariants,
  type LiquidVariant,
} from "@/lib/utils";
import { cn } from "@/lib/cn";

type ModeTabsProps = {
  value: LiquidVariant;
  onChangeAction: (value: LiquidVariant) => void;
};

export function ModeTabs({ value, onChangeAction }: ModeTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Component visual mode"
      className="inline-flex rounded-xl border border-liquid-ink/20 bg-liquid-surface/60 p-1"
    >
      {liquidVariants.map((mode) => (
        <button
          key={mode}
          role="tab"
          aria-selected={mode === value}
          type="button"
          onClick={() => onChangeAction(mode)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-sm font-semibold transition",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liquid-ring",
            mode === value
              ? "bg-liquid-accent/20 text-liquid-ink"
              : "text-liquid-subtle hover:text-liquid-ink",
          )}
        >
          {liquidVariantLabels[mode]}
        </button>
      ))}
    </div>
  );
}
