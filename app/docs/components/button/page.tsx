"use client";

import { useState } from "react";

import { CodeBlock } from "@/components/shared/CodeBlock";
import { ModeTabs } from "@/components/shared/ModeTabs";
import { PreviewPanel } from "@/components/shared/PreviewPanel";
import { PropsTable } from "@/components/shared/PropsTable";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui";
import type { LiquidVariant } from "@/lib/utils";

const codeExample = `import { Button } from "@/components/ui/button";

<Button variant="hybrid" intent="primary" size="md" withGlow>
  Continue
</Button>`;

const propRows = [
  {
    name: "variant",
    type: '"glass" | "neo" | "hybrid"',
    defaultValue: '"glass"',
    description: "Visual rendering mode.",
  },
  {
    name: "intent",
    type: '"primary" | "secondary" | "danger" | "minimal"',
    defaultValue: '"primary"',
    description: "Semantic action tone.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "Control height and spacing.",
  },
  {
    name: "withGlow",
    type: "boolean",
    defaultValue: "false",
    description: "Adds a subtle radial highlight.",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    description: "Shows spinner and sets aria-busy.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Disables interaction and keyboard events.",
  },
];

export default function ButtonDocsPage() {
  const [mode, setMode] = useState<LiquidVariant>("glass");

  return (
    <div className="space-y-8">
      <Section
        title="Button"
        description="The primary interaction control with built-in accessibility focus rings, loading states, and framer-motion feedback."
      >
        <ModeTabs value={mode} onChangeAction={setMode} />
      </Section>

      <Section title="Preview">
        <PreviewPanel>
          <Button variant={mode} intent="primary" size="md" withGlow>
            Launch Flow
          </Button>
        </PreviewPanel>
      </Section>

      <Section title="Code">
        <CodeBlock code={codeExample} />
      </Section>

      <Section title="Variants">
        <PreviewPanel className="min-h-0!">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant={mode} intent="primary">
              Primary
            </Button>
            <Button variant={mode} intent="secondary">
              Secondary
            </Button>
            <Button variant={mode} intent="danger">
              Danger
            </Button>
            <Button variant={mode} intent="minimal">
              Minimal
            </Button>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Sizes">
        <PreviewPanel className="min-h-0!">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant={mode} size="sm">
              Small
            </Button>
            <Button variant={mode} size="md">
              Medium
            </Button>
            <Button variant={mode} size="lg">
              Large
            </Button>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="States">
        <PreviewPanel className="min-h-0!">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant={mode}>Default</Button>
            <Button variant={mode} loading>
              Saving
            </Button>
            <Button variant={mode} disabled>
              Disabled
            </Button>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Props API">
        <PropsTable rows={propRows} />
      </Section>
    </div>
  );
}
