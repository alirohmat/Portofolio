import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import TerminalText from '../ui/TerminalText';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-14 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-text transition-colors duration-300">
          {portfolioData.profile.name}
        </h1>
        <p className="mt-4 text-accent text-lg">{portfolioData.profile.role}</p>
        <div className="mt-6">
          <TerminalText text={portfolioData.profile.tagline} />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["SYS: ONLINE", "UPTIME: 99.9%", "LAST DEPLOY: RDM MODULE"].map((m) => (
            <span key={m} className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-surface/50 text-slate-600 dark:text-muted text-xs font-mono px-3 py-1 transition-colors duration-300">
              [ {m} ]
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#systems"
            className="bg-accent text-white dark:text-primary font-bold px-6 py-3 rounded-lg hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-300"
          >
            View Deployed Systems
          </a>
          <a
            href="#contact"
            className="border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-text px-6 py-3 rounded-lg hover:border-accent/50 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
