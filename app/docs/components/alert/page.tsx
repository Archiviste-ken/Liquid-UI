"use client";

import { useState } from "react";

import { CodeBlock } from "@/components/shared/CodeBlock";
import { ModeTabs } from "@/components/shared/ModeTabs";
import { PreviewPanel } from "@/components/shared/PreviewPanel";
import { PropsTable } from "@/components/shared/PropsTable";
import { Section } from "@/components/shared/Section";
import { Alert } from "@/components/ui";
import type { LiquidVariant } from "@/lib/utils";

const codeExample = `import { Alert } from "@/components/ui/alert";

<Alert variant="hybrid" intent="success" title="Deployment complete">
  Your release is now available worldwide.
</Alert>`;

const propRows = [
  {
    name: "variant",
    type: '"glass" | "neo" | "hybrid"',
    defaultValue: '"glass"',
    description: "Visual style mode.",
  },
  {
    name: "intent",
    type: '"info" | "success" | "warning" | "danger"',
    defaultValue: '"info"',
    description: "Semantic status type.",
  },
  {
    name: "title",
    type: "string",
    description: "Optional heading for the alert.",
  },
  { name: "children", type: "ReactNode", description: "Message content." },
];

export default function AlertDocsPage() {
  const [mode, setMode] = useState<LiquidVariant>("glass");

  return (
    <div className="space-y-8">
      <Section
        title="Alert"
        description="Contextual system feedback for success, info, warning, and error messages."
      >
        <ModeTabs value={mode} onChangeAction={setMode} />
      </Section>

      <Section title="Preview">
        <PreviewPanel>
          <div className="w-full max-w-xl">
            <Alert variant={mode} intent="success" title="Saved successfully">
              Settings have been updated and synced across your workspace.
            </Alert>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Code">
        <CodeBlock code={codeExample} />
      </Section>

      <Section title="Variants">
        <PreviewPanel className="min-h-0!">
          <div className="grid w-full gap-3 md:grid-cols-3">
            <Alert variant="glass" intent="info" title="Glass mode">
              Soft and translucent.
            </Alert>
            <Alert variant="neo" intent="info" title="Neo mode">
              Tactile and calm.
            </Alert>
            <Alert variant="hybrid" intent="info" title="Hybrid mode">
              Balanced depth and blur.
            </Alert>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Sizes">
        <PreviewPanel className="min-h-0!">
          <div className="w-full max-w-xl space-y-3">
            <Alert
              variant={mode}
              intent="info"
              className="text-xs"
              title="Compact"
            >
              Quick inline status update.
            </Alert>
            <Alert
              variant={mode}
              intent="info"
              className="text-sm"
              title="Default"
            >
              Standard message length for common feedback.
            </Alert>
            <Alert
              variant={mode}
              intent="info"
              className="text-base"
              title="Expanded"
            >
              Long-form guidance for more complex issues in workflows.
            </Alert>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="States">
        <PreviewPanel className="min-h-0!">
          <div className="w-full max-w-xl space-y-3">
            <Alert variant={mode} intent="info" title="Information">
              New API keys were generated for your project.
            </Alert>
            <Alert variant={mode} intent="warning" title="Warning">
              Your trial has 3 days left before limits apply.
            </Alert>
            <Alert variant={mode} intent="danger" title="Error">
              Connection failed. Please retry after verifying network settings.
            </Alert>
          </div>
        </PreviewPanel>
      </Section>

      <Section title="Props API">
        <PropsTable rows={propRows} />
      </Section>
    </div>
  );
}
