import React from 'react';

export default function StatusBadge({ status }) {
  const isLive = status === 'LIVE';
  const isDeployed = status === 'DEPLOYED';

  const badgeClass = isLive
    ? 'border-lime/40 bg-lime/10 text-lime'
    : isDeployed
      ? 'border-[var(--border-color)] bg-[var(--accent-soft)] text-[var(--text-primary)]'
      : 'border-[var(--border-color)] text-[var(--text-muted)]';

  const dotClass = isLive ? 'bg-lime animate-pulse' : isDeployed ? 'bg-lime' : 'bg-current opacity-50';

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] font-bold tracking-widest ${badgeClass}`}>
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
      {status}
    </span>
  );
}
