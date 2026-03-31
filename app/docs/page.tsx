import Link from "next/link";

import { CodeBlock } from "@/components/shared/CodeBlock";
import { Section } from "@/components/shared/Section";
import { Button, Card } from "@/components/ui";

const installCode = `npm install framer-motion clsx tailwind-merge`;

export default function DocsHomePage() {
  return (
    <div className="space-y-8">
      <Section
        title="Welcome to Liquid UI"
        description="A production-ready component library with glass, neo, and hybrid rendering modes. Each component is typed, accessible, and optimized for copy-paste workflows."
      >
        <Card variant="glass" className="space-y-4">
          <h2 className="text-xl font-semibold">Quick Install</h2>
          <CodeBlock code={installCode} language="bash" />
          <div className="flex flex-wrap gap-3">
            <Link href="/docs/components/button">
              <Button variant="hybrid" intent="primary" withGlow>
                Start With Button
              </Button>
            </Link>
            <Link href="/docs/components">
              <Button variant="glass" intent="secondary">
                All Components
              </Button>
            </Link>
          </div>
        </Card>
      </Section>

      <Section title="Design Principles">
        <div className="grid gap-4 md:grid-cols-3">
          <Card variant="glass" className="space-y-2">
            <h3 className="text-lg font-semibold">Glassmorphism</h3>
            <p className="text-sm text-liquid-subtle">
              Subtle blur, translucent layers, and refined borders for elevated
              interfaces.
            </p>
          </Card>
          <Card variant="neo" className="space-y-2">
            <h3 className="text-lg font-semibold">Neomorphism</h3>
            <p className="text-sm text-liquid-subtle">
              Soft shadows and inset depth that create tactile and calm
              interactions.
            </p>
          </Card>
          <Card variant="hybrid" className="space-y-2">
            <h3 className="text-lg font-semibold">Hybrid</h3>
            <p className="text-sm text-liquid-subtle">
              Controlled blend of blur and depth with balanced visual weight.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
