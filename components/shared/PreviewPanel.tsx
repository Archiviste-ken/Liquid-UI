import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

type PreviewPanelProps = PropsWithChildren<{
  className?: string;
}>;

export function PreviewPanel({ className, children }: PreviewPanelProps) {
  return (
    <div
      className={cn(
        "liquid-panel relative overflow-hidden bg-liquid-muted/70 p-6 backdrop-blur-sm dark:bg-liquid-muted/45 sm:p-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.16),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_36%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.14),transparent_36%)]" />
      <div className="relative flex min-h-48 items-center justify-center">
        {children}
      </div>
    </div>
  );
}
