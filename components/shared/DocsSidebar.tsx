"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";

const links = [
  { href: "/docs", label: "Overview" },
  { href: "/docs/components/button", label: "Button" },
  { href: "/docs/components/card", label: "Card" },
  { href: "/docs/components/input", label: "Input" },
  { href: "/docs/components/alert", label: "Alert" },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="liquid-panel h-fit self-start rounded-2xl bg-liquid-surface/70 p-3 backdrop-blur-md">
      <div className="mb-2 rounded-xl border border-liquid-ink/10 bg-liquid-muted/70 px-3 py-2">
        <p className="text-xs uppercase tracking-[0.24em] text-liquid-subtle">
          Navigation
        </p>
        <h2 className="mt-1 text-sm font-semibold text-liquid-ink">
          Liquid UI Docs
        </h2>
      </div>
      <nav aria-label="Documentation sections" className="space-y-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block rounded-xl px-3 py-2.5 text-sm font-medium transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liquid-ring",
                active
                  ? "bg-linear-to-r from-cyan-300/30 to-emerald-200/25 text-liquid-ink shadow-[0_8px_18px_rgba(14,165,233,0.12)]"
                  : "text-liquid-subtle hover:bg-liquid-muted/75 hover:text-liquid-ink",
              )}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
