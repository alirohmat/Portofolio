import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, CalendarDays, ChevronDown } from 'lucide-react';
import { operationalLogs } from '../../data/portfolioData';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';

export default function OperationalLogs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="logs" className="scroll-mt-20 section-pad">
      <div className="container-shell">
        <SectionHeading
          index="01"
          eyebrow="operational.logs"
          title="Pengalaman Profesional"
          desc="Jejak peran operasional dan implementasi teknis. Disiplin lapangan diterjemahkan jadi keandalan sistem."
        />

        <div className="relative mt-12">
          {/* Timeline dot & line only sm+ */}
          <div className="absolute bottom-4 left-[19px] top-2 hidden w-px bg-[var(--border-color)] md:block" />
          <div className="flex flex-col gap-5">
            {operationalLogs.map((log, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative md:pl-14"
                >
                  <span className="absolute left-[11px] top-7 hidden h-[18px] w-[18px] rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)] shadow-sm md:block">
                    <span className="absolute inset-[3px] rounded-full bg-[var(--accent)]" />
                  </span>
                  <Card className="group relative overflow-hidden p-0 sm:p-6">
                    <div className="absolute inset-y-0 left-0 w-1 bg-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100" />
                    
                    {/* Mobile Accordion Header / Desktop Always Expanded Header */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={isOpen}
                      className="tap w-full flex items-center justify-between p-5 text-left md:cursor-default md:p-0 md:min-h-0"
                    >
                      <div className="flex flex-wrap items-center gap-2 pr-2">
                        <span className="rounded-md bg-[var(--accent-soft)] px-2 py-1 font-mono text-[11px] font-bold text-[var(--accent)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-display text-lg font-bold tracking-tight">{log.role}</h3>
                        {log.status && (
                          <span className="rounded-full border border-[var(--border-color)] px-2 py-0.5 font-mono text-[10px] tracking-widest opacity-60">
                            {log.status}
                          </span>
                        )}
                      </div>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 md:hidden text-[var(--text-muted)] ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Content: always visible on md+, collapsible on mobile */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out md:grid-rows-[1fr] md:opacity-100 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 px-5 pb-5 pt-0 md:px-0 md:pb-0 md:pt-0' : 'grid-rows-[0fr] opacity-0 overflow-hidden px-5 pb-0 pt-0 md:px-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mono-label mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 opacity-70">
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 size={13} /> {log.org}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays size={13} /> {log.period}
                          </span>
                        </p>
                        <p className="mt-2 font-mono text-[11px] font-bold tracking-[0.18em] text-[var(--accent)]">
                          FOCUS: {log.focus.toUpperCase()}
                        </p>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">{log.details}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {log.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-1 text-xs font-medium transition-colors hover:border-[var(--accent)]/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
