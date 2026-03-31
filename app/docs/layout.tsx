import type { PropsWithChildren } from "react";

import { Container } from "@/components/shared/Container";
import { DocsSidebar } from "@/components/shared/DocsSidebar";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export default function DocsLayout({ children }: PropsWithChildren) {
  return (
    <main className="py-6 sm:py-8">
      <Container>
        <div className="liquid-panel liquid-glass mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-liquid-subtle">
              Liquid UI Platform
            </p>
            <h1 className="text-2xl font-semibold text-liquid-ink sm:text-3xl">
              Documentation
            </h1>
          </div>
          <ThemeToggle />
        </div>
        <div className="grid items-start gap-5 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
          <DocsSidebar />
          <div className="liquid-panel liquid-glass min-h-[70vh] rounded-2xl p-4 sm:p-6">
            <div className="space-y-8">{children}</div>
          </div>
        </div>
      </Container>
    </main>
  );
}
