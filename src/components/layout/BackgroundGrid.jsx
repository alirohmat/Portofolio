import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-colors duration-300" aria-hidden="true">
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />
      <div className="grid-bg-light absolute inset-0 dark:hidden" />
      <div className="grid-bg-dark absolute inset-0 hidden dark:block" />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(200,240,75,0.16), transparent)' }}
      />
      <div
        className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl dark:opacity-100 opacity-40"
        style={{ background: 'radial-gradient(closest-side, rgba(101,163,13,0.18), transparent)' }}
      />
      <div
        className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full blur-3xl dark:opacity-100 opacity-30"
        style={{ background: 'radial-gradient(closest-side, rgba(200,240,75,0.10), transparent)' }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent dark:block hidden" />
    </div>
  );
}
