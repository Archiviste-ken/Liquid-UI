import type { InputHTMLAttributes } from "react";

import type { LiquidVariant } from "@/lib/utils";

export type InputSize = "sm" | "md" | "lg";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  hint?: string;
  error?: string;
  variant?: LiquidVariant;
  inputSize?: InputSize;
};
