import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, ShieldCheck, Mic, Users, Smile, Clock, HeartHandshake } from 'lucide-react';
import { techSkills, softSkills, education, organization } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

const iconMap = { Target, ShieldCheck, Mic, Users, Smile, Clock };

export default function TechStack() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          index="03"
          eyebrow="tech.stack"
          title="Keahlian Teknis"
          desc="Kompetensi inti yang dipakai tiap hari di lapangan dan di server."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-line rounded-3xl p-6 sm:p-8">
            <p className="mono-label opacity-60">core_competency.sh</p>
            <div className="mt-6 space-y-6">
              {techSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      <span className="mr-2 font-mono text-[11px] text-lime-deep dark:text-lime">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {skill.name}
                    </span>
                    <span className="rounded-md bg-lime px-2 py-0.5 font-mono text-[11px] font-bold text-lime-ink">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-lime-dim to-lime"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: i * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-lime p-2 text-lime-ink"><GraduationCap size={17} /></span>
                <div>
                  <p className="text-[13px] font-bold">{education.degree}</p>
                  <p className="mt-0.5 font-mono text-[11px] opacity-60">{education.institution} • {education.period}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-lime p-2 text-lime-ink"><HeartHandshake size={17} /></span>
                <div>
                  <p className="text-[13px] font-bold">{organization.role}</p>
                  <p className="mt-0.5 font-mono text-[11px] opacity-60">{organization.org} • {organization.period}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mono-label opacity-60">soft_protocols[]</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {softSkills.map((skill, i) => {
                const Icon = iconMap[skill.icon] || Target;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                    className="card-line group rounded-2xl p-4 transition-all hover:-translate-y-0.5 dark:hover:border-lime/40"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime text-lime-ink transition-transform group-hover:scale-110">
                      <Icon size={17} />
                    </div>
                    <p className="mt-3 text-sm font-bold">{skill.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{skill.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
