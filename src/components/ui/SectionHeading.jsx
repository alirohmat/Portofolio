import React from 'react';

export default function SectionHeading({ index, eyebrow, title, desc, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls}`}>
      <p className="mono-label flex items-center gap-2 text-lime-deep dark:text-lime">
        <span className="inline-block h-px w-8 bg-current opacity-60" />
        {index} // {eyebrow}
      </p>
      <h2 className="text-balance mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">{desc}</p>}
    </div>
  );
}
