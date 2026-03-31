import { cn } from "@/lib/cn";

import { getCardClasses } from "./card.styles";
import type { CardProps } from "./card.types";

export function Card({
  variant = "glass",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <article className={cn(getCardClasses(variant), className)} {...props}>
      {children}
    </article>
  );
}
