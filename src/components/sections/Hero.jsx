import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import TerminalText from '../ui/TerminalText';

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-[85vh] items-center justify-center pt-20 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl px-6 text-center"
      >
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {portfolioData.profile.name}
        </h1>
        <p className="mt-3 text-sm font-medium uppercase tracking-widest text-accent sm:text-base">
          {portfolioData.profile.role}
        </p>
        <div className="mt-6 font-mono text-xs text-slate-500 dark:text-slate-400">
          <TerminalText text={portfolioData.profile.tagline} />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {["SYS: ONLINE", "UPTIME: 99.9%", "LAST DEPLOY: RDM"].map((m) => (
            <span key={m} className="flex items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              {m}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <a
            href="#systems"
            className="w-full rounded-md bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Explore Systems
          </a>
        </div>
      </motion.div>
    </section>
  );
}
