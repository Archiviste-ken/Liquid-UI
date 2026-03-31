import Link from "next/link";

import { Card } from "@/components/ui";

const components = [
  {
    name: "Button",
    href: "/docs/components/button",
    text: "Motion-ready buttons with intent, size, and visual mode variants.",
  },
  {
    name: "Card",
    href: "/docs/components/card",
    text: "Adaptive surfaces for content grouping across glass, neo, and hybrid styles.",
  },
  {
    name: "Input",
    href: "/docs/components/input",
    text: "Accessible form controls with labels, hints, and inline validation states.",
  },
  {
    name: "Alert",
    href: "/docs/components/alert",
    text: "Contextual feedback with semantic intents and calm visual contrast.",
  },
];

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-liquid-ink">Components</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {components.map((component) => (
          <Link key={component.name} href={component.href}>
            <Card
              variant="glass"
              className="h-full space-y-2 transition hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-semibold text-liquid-ink">
                {component.name}
              </h3>
              <p className="text-sm text-liquid-subtle">{component.text}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
