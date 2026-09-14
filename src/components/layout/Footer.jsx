import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)]/60 py-10 backdrop-blur">
      <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-bold tracking-tight">ALI ROHMATULLOH<span className="text-lime-dim dark:text-lime">_</span></p>
          <p className="mono-label mt-1 opacity-50">sys.impl // ops.spec — Tuban, Jatim</p>
        </div>
        <p className="font-mono text-xs opacity-50">© 2026 Ali Rohmatulloh. All systems nominal.</p>
      </div>
    </footer>
  );
}
