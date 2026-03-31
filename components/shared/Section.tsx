import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type SectionProps = PropsWithChildren<{
  title?: string;
  description?: string;
  className?: string;
}>;

export function Section({
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      {(title || description) && (
        <header className="space-y-2">
          {title && (
            <h2 className="text-2xl font-semibold text-liquid-ink">{title}</h2>
          )}
          {description && (
            <p className="max-w-3xl text-liquid-subtle">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
