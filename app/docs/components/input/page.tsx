"use client";

import { useState } from "react";

import { CodeBlock } from "@/components/shared/CodeBlock";
import { ModeTabs } from "@/components/shared/ModeTabs";
import { PreviewPanel } from "@/components/shared/PreviewPanel";
import { PropsTable } from "@/components/shared/PropsTable";
import { Section } from "@/components/shared/Section";
import { Input } from "@/components/ui";
import type { LiquidVariant } from "@/lib/utils";

const codeExample = `import { Input } from "@/components/ui/input";

<Input
  variant="glass"
  label="Email"
  placeholder="you@example.com"
  hint="We only use this for product updates."
/>`;

const propRows = [
  {
    name: "variant",
    type: '"glass" | "neo" | "hybrid"',
    defaultValue: '"glass"',
    description: "Visual style mode.",
  },
  {
    name: "inputSize",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "Input control height.",
  },
  {
    name: "label",
    type: "string",
    description: "Accessible label above field.",
  },
  {
    name: "hint",
    type: "string",
    description: "Help text rendered below input.",
  },
  {
    name: "error",
    type: "string",
    description: "Error message and invalid state.",
  },
];

export default function InputDocsPage() {
  const [mode, setMode] = useState<LiquidVariant>("glass");

  return (
    <div className="space-y-8">
      <Section
        title="Input"
        description="Accessible text input with labels, hint text, and inline error support for form UX."
      >
        <ModeTabs value={mode} onChangeAction={setMode} />
      </Section>

      <Section title="Preview">
        <PreviewPanel>
          <div className="w-full max-w-md">
            <Input
              variant={mode}
              label="Workspace name"
              placeholder="liquid-portal"
              hint="Use lowercase letters and hyphens only."
            />
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Code">
        <CodeBlock code={codeExample} />
      </Section>

      <Section title="Variants">
        <PreviewPanel className="min-h-0!">
          <div className="grid w-full gap-3 md:grid-cols-3">
            <Input variant="glass" label="Glass" placeholder="example" />
            <Input variant="neo" label="Neo" placeholder="example" />
            <Input variant="hybrid" label="Hybrid" placeholder="example" />
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Sizes">
        <PreviewPanel className="min-h-0!">
          <div className="w-full max-w-md space-y-3">
            <Input
              variant={mode}
              inputSize="sm"
              label="Small"
              placeholder="size=sm"
            />
            <Input
              variant={mode}
              inputSize="md"
              label="Medium"
              placeholder="size=md"
            />
            <Input
              variant={mode}
              inputSize="lg"
              label="Large"
              placeholder="size=lg"
            />
          </div>
        </PreviewPanel>
      </Section>

      <Section title="States">
        <PreviewPanel className="min-h-0!">
          <div className="w-full max-w-md space-y-3">
            <Input variant={mode} label="Default" placeholder="Active input" />
            <Input
              variant={mode}
              label="Disabled"
              placeholder="Unavailable"
              disabled
            />
            <Input
              variant={mode}
              label="Error"
              placeholder="your@email.com"
              error="Please enter a valid email address."
            />
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Props API">
        <PropsTable rows={propRows} />
      </Section>
    </div>
  );
}
