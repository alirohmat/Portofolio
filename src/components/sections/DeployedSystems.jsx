import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Rocket } from 'lucide-react';
import { deployedSystems } from '../../data/portfolioData';
import StatusBadge from '../ui/StatusBadge';
import SectionHeading from '../ui/SectionHeading';

export default function DeployedSystems() {
  return (
    <section id="systems" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          index="02"
          eyebrow="deployed.systems"
          title="Proyek & Implementasi"
          desc="Sistem yang sudah live di production. Bukan mockup, bukan demo lokal."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {deployedSystems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="card-line group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card dark:hover:border-lime/40 sm:p-7"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(closest-side, rgba(200,240,75,0.18), transparent)' }}
              />
              <div className="flex items-start justify-between gap-3">
                <StatusBadge status={item.status} />
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] text-lime-dim transition-colors group-hover:border-lime/50 dark:text-lime">
                  <Rocket size={18} />
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{item.name}</h3>
              <p className="mono-label mt-1 opacity-60">{item.role}</p>

              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg bg-[var(--accent-soft)] px-3 py-1.5 font-mono text-[13px] font-bold text-lime-dim transition-transform hover:scale-[1.02] dark:text-lime"
                >
                  {item.displayUrl} <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="mt-3 w-fit rounded-lg border border-[var(--border-color)] px-3 py-1.5 font-mono text-[13px] opacity-70">
                  {item.displayUrl}
                </span>
              )}

              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">{item.details}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-3 py-1 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {item.highlights && (
                <ul className="mt-4 space-y-2 border-t border-[var(--border-color)] pt-4">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-muted)]">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-lime-dim dark:text-lime" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
