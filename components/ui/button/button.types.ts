import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import type { LiquidVariant } from "@/lib/utils";

export type ButtonIntent = "primary" | "secondary" | "danger" | "minimal";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = Omit<
  HTMLMotionProps<"button">,
  "children" | "disabled"
> & {
  variant?: LiquidVariant;
  intent?: ButtonIntent;
  size?: ButtonSize;
  withGlow?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
};
