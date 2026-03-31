export default function Loading() {
  return (
    <main className="min-h-screen liquid-grid">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4">
        <div className="liquid-panel liquid-glass w-full max-w-xl rounded-3xl p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-liquid-ink text-sm font-bold text-liquid-surface">
              LQ
            </span>
            <div>
              <p className="text-lg font-semibold text-liquid-ink">Liquid UI</p>
              <p className="text-xs uppercase tracking-[0.24em] text-liquid-subtle">
                Loading Experience
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="liquid-shimmer h-2.5 rounded-full" />
            <div className="liquid-shimmer h-2.5 w-4/5 rounded-full" />
            <div className="liquid-shimmer h-2.5 w-2/3 rounded-full" />
          </div>

          <div className="mt-7 flex items-center gap-2">
            <span className="liquid-loader-dot" />
            <span className="liquid-loader-dot [animation-delay:120ms]" />
            <span className="liquid-loader-dot [animation-delay:240ms]" />
            <p className="ml-2 text-sm text-liquid-subtle">
              Preparing interface...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
