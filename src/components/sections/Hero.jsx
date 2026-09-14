import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, ShieldCheck, Server, Database } from 'lucide-react';
import { contact, profile } from '../../data/portfolioData';

const marqueeItems = [
  'AI-ASSISTED DEV',
  'DNS / SSL CONFIG',
  'SYSTEM DEPLOYMENT',
  'ZERO-INCIDENT OPS',
  'DATA ACCURACY 100%',
  'RDM IMPLEMENTATION',
];

const stats = [
  { icon: ShieldCheck, value: '0', label: 'Incident sanitasi' },
  { icon: Database, value: '100%', label: 'Akurasi arsip' },
  { icon: Server, value: '2', label: 'System live' },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pb-10 pt-28">
      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)]/80 px-3 py-1.5 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
          <span className="mono-label opacity-80">{profile.tagline}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-balance mt-6 font-display text-[13vw] font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-[88px]"
        >
          ALI
          <br />
          ROHMAT<span className="text-lime-dim dark:text-lime">ULLOH</span>
          <span className="animate-blink text-lime-dim dark:text-lime">_</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <p className="mono-label text-lime-dim dark:text-lime">{profile.role}</p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-base">
              {profile.bio}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-[15px] font-bold text-lime-ink shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
              >
                Hubungi Saya <ArrowUpRight size={17} strokeWidth={2.5} />
              </a>
              <a
                href="#systems"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] px-7 py-3.5 text-[15px] font-semibold transition-colors hover:border-lime/50"
              >
                Lihat Proyek <ArrowDown size={17} />
              </a>
            </div>
            <p className="mono-label mt-6 flex items-center gap-2 opacity-60">
              <MapPin size={13} /> {profile.location} — {contact.phone}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="card-line rounded-2xl p-4 text-center backdrop-blur">
                <s.icon size={18} className="mx-auto text-lime-dim dark:text-lime" />
                <p className="mt-2 font-display text-2xl font-bold">{s.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-[var(--text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mask-fade-x mt-14 overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-surface)]/60 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee gap-8 pr-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap font-mono text-[12px] tracking-[0.2em]">
              {item} <span className="text-lime-dim dark:text-lime">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
