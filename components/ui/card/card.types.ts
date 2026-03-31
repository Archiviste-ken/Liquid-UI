import type { HTMLAttributes } from "react";

import type { LiquidVariant } from "@/lib/utils";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: LiquidVariant;
};
