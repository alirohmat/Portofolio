import React from 'react';

export default function StatusBadge({ status }) {
  const isLive = status === 'LIVE';
  const isDeployed = status === 'DEPLOYED';

  const badgeClassName = isLive
    ? 'bg-accent/10 border-accent/30 text-accent'
    : isDeployed
    ? 'bg-slate-100 dark:bg-surface border-slate-200 dark:border-slate-700 text-slate-700 dark:text-text'
    : 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-muted';

  return (
    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-bold border transition-colors duration-300 ${badgeClassName}`}>
      <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-accent animate-pulse' : isDeployed ? 'bg-accent' : 'bg-slate-400 dark:bg-muted'}`} />
      {status}
    </span>
  );
}
