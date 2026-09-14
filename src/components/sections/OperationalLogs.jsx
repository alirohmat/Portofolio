import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CalendarDays } from 'lucide-react';
import { operationalLogs } from '../../data/portfolioData';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

export default function OperationalLogs() {
  return (
    <section id="logs" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          index="01"
          eyebrow="operational.logs"
          title="Pengalaman Profesional"
          desc="Jejak peran operasional dan implementasi teknis. Disiplin lapangan diterjemahkan jadi keandalan sistem."
        />

        <div className="relative mt-12">
          <div className="absolute bottom-4 left-[19px] top-2 hidden w-px bg-[var(--border-color)] md:block" />
          <div className="flex flex-col gap-5">
            {operationalLogs.map((log, index) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative md:pl-14"
              >
                <span className="absolute left-[11px] top-7 hidden h-[18px] w-[18px] rounded-full border-2 border-lime bg-[var(--bg-primary)] shadow-glow md:block">
                  <span className="absolute inset-[3px] rounded-full bg-lime" />
                </span>
                <Card className="group relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1 bg-lime opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-lime px-2 py-1 font-mono text-[11px] font-bold text-lime-ink">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-lg font-bold tracking-tight">{log.role}</h3>
                    {log.status && (
                      <span className="rounded-full border border-[var(--border-color)] px-2 py-0.5 font-mono text-[10px] tracking-widest opacity-60">
                        {log.status}
                      </span>
                    )}
                  </div>
                  <p className="mono-label mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 opacity-70">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 size={13} /> {log.org}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={13} /> {log.period}
                    </span>
                  </p>
                  <p className="mt-2 font-mono text-[11px] font-bold tracking-[0.18em] text-lime-dim dark:text-lime">
                    FOCUS: {log.focus.toUpperCase()}
                  </p>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">{log.details}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {log.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-1 text-xs font-medium transition-colors hover:border-lime/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
