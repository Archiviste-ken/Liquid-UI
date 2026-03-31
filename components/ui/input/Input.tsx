import { cn } from "@/lib/cn";

import { getInputClasses } from "./input.styles";
import type { InputProps } from "./input.types";

export function Input({
  label,
  hint,
  error,
  id,
  variant = "glass",
  inputSize = "md",
  className,
  ...props
}: InputProps) {
  const fallbackId =
    id ?? label?.toLowerCase().replace(/\s+/g, "-") ?? "liquid-input";
  const hintId = hint ? `${fallbackId}-hint` : undefined;
  const errorId = error ? `${fallbackId}-error` : undefined;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={fallbackId}
          className="text-sm font-semibold text-liquid-ink"
        >
          {label}
        </label>
      )}
      <input
        id={fallbackId}
        className={cn(
          getInputClasses(variant, inputSize, Boolean(error)),
          className,
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={
          [hintId, errorId].filter(Boolean).join(" ") || undefined
        }
        {...props}
      />
      {error ? (
        <p id={errorId} className="text-xs font-medium text-rose-600">
          {error}
        </p>
      ) : (
        hint && (
          <p id={hintId} className="text-xs text-liquid-subtle">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
