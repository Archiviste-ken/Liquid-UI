"use client";

import { useState } from "react";

import { cn } from "@/lib/cn";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export function CodeBlock({
  code,
  language = "tsx",
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className={cn(
        "liquid-panel overflow-hidden bg-[#0c1220] text-[#e5efff]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-widest text-[#9db1d6]">
          {language}
        </span>
        <button
          type="button"
          onClick={onCopy}
          className="rounded-md border border-white/20 px-3 py-1 text-xs font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Copy code snippet"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-6">
        <code>{code}</code>
      </pre>
    </div>
  );
}
