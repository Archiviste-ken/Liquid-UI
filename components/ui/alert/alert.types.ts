import type { HTMLAttributes } from "react";

import type { LiquidVariant } from "@/lib/utils";

export type AlertIntent = "info" | "success" | "warning" | "danger";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: LiquidVariant;
  intent?: AlertIntent;
  title?: string;
};
