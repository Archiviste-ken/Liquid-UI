"use client";

import { useState } from "react";

import { CodeBlock } from "@/components/shared/CodeBlock";
import { ModeTabs } from "@/components/shared/ModeTabs";
import { PreviewPanel } from "@/components/shared/PreviewPanel";
import { PropsTable } from "@/components/shared/PropsTable";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/ui";
import type { LiquidVariant } from "@/lib/utils";

const codeExample = `import { Card } from "@/components/ui/card";

<Card variant="glass" className="space-y-2">
  <h3>Revenue Snapshot</h3>
  <p>+21% this month</p>
</Card>`;

const propRows = [
  {
    name: "variant",
    type: '"glass" | "neo" | "hybrid"',
    defaultValue: '"glass"',
    description: "Controls visual depth behavior.",
  },
  {
    name: "className",
    type: "string",
    description: "Extends spacing and layout styles.",
  },
  { name: "children", type: "ReactNode", description: "Card content." },
];

export default function CardDocsPage() {
  const [mode, setMode] = useState<LiquidVariant>("glass");

  return (
    <div className="space-y-8">
      <Section
        title="Card"
        description="A flexible content container for dashboards, settings panes, and highlight callouts."
      >
        <ModeTabs value={mode} onChangeAction={setMode} />
      </Section>

      <Section title="Preview">
        <PreviewPanel>
          <Card variant={mode} className="max-w-sm space-y-2">
            <h3 className="text-lg font-semibold text-liquid-ink">
              Monthly Metrics
            </h3>
            <p className="text-sm text-liquid-subtle">
              Engagement is up 18.4% with lower bounce rates.
            </p>
          </Card>
        </PreviewPanel>
      </Section>

      <Section title="Code">
        <CodeBlock code={codeExample} />
      </Section>

      <Section title="Variants">
        <PreviewPanel className="min-h-0!">
          <div className="grid w-full gap-3 md:grid-cols-3">
            <Card variant="glass" className="space-y-1">
              <h3 className="font-semibold text-liquid-ink">Glass</h3>
              <p className="text-xs text-liquid-subtle">
                Translucent and layered.
              </p>
            </Card>
            <Card variant="neo" className="space-y-1">
              <h3 className="font-semibold text-liquid-ink">Neo</h3>
              <p className="text-xs text-liquid-subtle">Soft and tactile.</p>
            </Card>
            <Card variant="hybrid" className="space-y-1">
              <h3 className="font-semibold text-liquid-ink">Hybrid</h3>
              <p className="text-xs text-liquid-subtle">
                Balanced and expressive.
              </p>
            </Card>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Sizes">
        <PreviewPanel className="min-h-0!">
          <div className="space-y-3">
            <Card variant={mode} className="max-w-xs">
              Compact card size
            </Card>
            <Card variant={mode} className="max-w-md">
              Standard card size
            </Card>
            <Card variant={mode} className="max-w-xl">
              Expanded card size
            </Card>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="States">
        <PreviewPanel className="min-h-0!">
          <div className="grid w-full gap-3 md:grid-cols-3">
            <Card variant={mode}>Default state</Card>
            <Card variant={mode} className="ring-2 ring-liquid-ring/50">
              Focused state
            </Card>
            <Card variant={mode} className="opacity-60">
              Muted state
            </Card>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Props API">
        <PropsTable rows={propRows} />
      </Section>
    </div>
  );
}
