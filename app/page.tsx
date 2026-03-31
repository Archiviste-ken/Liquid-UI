"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/shared/Container";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Alert, Button, Card, Input } from "@/components/ui";

export default function Home() {
  const reduceMotion = useReducedMotion();
  const riseIn = {
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const },
  };

  return (
    <main className="py-5 sm:py-12">
      <Container className="space-y-8 sm:space-y-10">
        <motion.header
          className="liquid-panel liquid-glass liquid-hero-glow relative overflow-hidden rounded-3xl p-4 sm:p-10"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="relative mb-6 flex flex-wrap items-start justify-between gap-3 border-b border-liquid-ink/10 pb-4 sm:mb-10 sm:items-center sm:gap-4 sm:pb-6"
            {...riseIn}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-liquid-ink text-sm font-bold text-liquid-surface">
                LQ
              </span>
              <div>
                <p className="text-base font-semibold text-liquid-ink">
                  Liquid UI
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-liquid-subtle">
                  SaaS Component System
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-start sm:gap-2">
              <Link
                href="/docs"
                className="rounded-full px-3 py-1.5 text-xs font-medium text-liquid-subtle transition hover:bg-liquid-surface/65 hover:text-liquid-ink sm:px-4 sm:py-2 sm:text-sm"
              >
                Docs
              </Link>
              <Link
                href="/docs/components"
                className="rounded-full px-3 py-1.5 text-xs font-medium text-liquid-subtle transition hover:bg-liquid-surface/65 hover:text-liquid-ink sm:px-4 sm:py-2 sm:text-sm"
              >
                Components
              </Link>
              <ThemeToggle />
            </div>
          </motion.div>

          <div className="relative grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <motion.div
              className="space-y-4 sm:space-y-6"
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.55,
                ease: "easeOut",
                delay: 0.12,
              }}
            >
              <motion.p
                className="inline-flex rounded-full border border-liquid-ink/15 bg-liquid-surface/75 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-liquid-subtle"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.18 }}
              >
                Enterprise-Grade UI Foundation
              </motion.p>
              <motion.h1
                className="max-w-4xl text-[2.75rem] font-bold leading-[1.04] text-liquid-ink sm:text-6xl xl:text-7xl"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              >
                Build high-converting SaaS interfaces faster.
              </motion.h1>
              <motion.div
                className="flex flex-wrap gap-3"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.34, ease: "easeOut" }}
              >
                <Link href="/docs/components/button">
                  <Button variant="hybrid" intent="primary" size="lg" withGlow>
                    Explore Components
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button variant="glass" intent="secondary" size="lg">
                    Open Documentation
                  </Button>
                </Link>
              </motion.div>
              <motion.p
                className="max-w-3xl text-base leading-7 text-liquid-subtle sm:text-xl sm:leading-8"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
              >
                Liquid UI blends premium glass depth, tactile neomorphism, and
                calibrated hybrid surfaces into a production-ready workflow.
              </motion.p>
              <motion.div
                className="hidden gap-3 sm:grid sm:grid-cols-3"
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
              >
                <div className="rounded-2xl border border-liquid-ink/10 bg-liquid-surface/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-liquid-subtle">
                    Build Ready
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-liquid-ink">
                    100%
                  </p>
                </div>
                <div className="rounded-2xl border border-liquid-ink/10 bg-liquid-surface/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-liquid-subtle">
                    Core Components
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-liquid-ink">
                    4
                  </p>
                </div>
                <div className="rounded-2xl border border-liquid-ink/10 bg-liquid-surface/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-liquid-subtle">
                    Theme Modes
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-liquid-ink">
                    3
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
            >
              <Card variant="hybrid" className="space-y-4 self-start">
                <p className="text-xs uppercase tracking-[0.22em] text-liquid-subtle">
                  Quick Install
                </p>
                <div className="rounded-2xl border border-cyan-200/20 bg-[#090f1c] p-4 font-mono text-xs text-[#cde5ff] sm:text-sm">
                  <p className="text-cyan-300">
                    $ npm install framer-motion clsx tailwind-merge
                  </p>
                  <p className="mt-3 text-[#88a4c8]">$ npm run dev</p>
                </div>
                <Alert
                  variant="hybrid"
                  intent="info"
                  title="Copy-paste workflow"
                >
                  Component docs include preview, source blocks, and props
                  references.
                </Alert>
              </Card>
            </motion.div>
          </div>
        </motion.header>

        <motion.section
          className="grid gap-4 lg:grid-cols-12"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: "easeOut" }}
        >
          <Card variant="hybrid" className="space-y-4 lg:col-span-7">
            <h2 className="text-2xl font-semibold text-liquid-ink">
              SaaS-Grade Experience
            </h2>
            <p className="text-liquid-subtle">
              Redesigned layout with stronger hierarchy, tighter spacing rhythm,
              better contrast control, and a dashboard-like composition.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-liquid-ink/10 bg-liquid-surface/70 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-liquid-subtle">
                  Glass
                </p>
                <p className="mt-1 text-sm text-liquid-ink">Ambient depth</p>
              </div>
              <div className="rounded-xl border border-liquid-ink/10 bg-liquid-surface/70 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-liquid-subtle">
                  Neo
                </p>
                <p className="mt-1 text-sm text-liquid-ink">Tactile surfaces</p>
              </div>
              <div className="rounded-xl border border-liquid-ink/10 bg-liquid-surface/70 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-liquid-subtle">
                  Hybrid
                </p>
                <p className="mt-1 text-sm text-liquid-ink">
                  Balanced premium UI
                </p>
              </div>
            </div>
          </Card>

          <Card variant="glass" className="space-y-4 lg:col-span-5">
            <h2 className="text-xl font-semibold text-liquid-ink">
              Live Form Surface
            </h2>
            <Input
              variant="glass"
              label="Workspace slug"
              placeholder="liquid-analytics"
              hint="Used in URLs and internal project routing."
            />
            <Button
              variant="hybrid"
              intent="primary"
              className="w-full"
              withGlow
            >
              Create Workspace
            </Button>
          </Card>
        </motion.section>
      </Container>
    </main>
  );
}
