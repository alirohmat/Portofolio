import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import TerminalText from '../ui/TerminalText';

import { ShieldCheck, Cpu, Terminal, ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-12 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          OPERATIONS & DEPLOYMENT DASHBOARD
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-text transition-colors duration-300">
          {portfolioData.profile.name}
        </h1>

        <p className="mt-4 text-accent text-lg sm:text-xl font-mono font-medium">
          {portfolioData.profile.role}
        </p>

        <p className="mt-2 text-xs text-slate-500 dark:text-muted font-mono flex items-center justify-center gap-1">
          <MapPin size={13} className="text-accent" /> {portfolioData.profile.location}
        </p>

        <div className="mt-6 max-w-2xl mx-auto bg-slate-900/90 text-emerald-400 dark:bg-slate-950/90 p-4 rounded-xl border border-slate-800 shadow-xl font-mono text-sm text-left relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Terminal size={14} className="text-accent" /> terminal_status.sh
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
            </span>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
            {portfolioData.profile.bio}
          </p>
          <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2 text-accent text-xs">
            <span>&gt;</span>
            <TerminalText text={portfolioData.profile.tagline} />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {[
            { label: "SYS: ONLINE", icon: Cpu },
            { label: "UPTIME: 99.9%", icon: ShieldCheck },
            { label: "LAST DEPLOY: RDM MODULE", icon: Terminal }
          ].map((m) => {
            const Icon = m.icon;
            return (
              <span
                key={m.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-surface/60 text-slate-700 dark:text-muted text-xs font-mono px-3 py-1.5 shadow-sm transition-all duration-300 hover:border-accent/50"
              >
                <Icon size={12} className="text-accent" />
                [ {m.label} ]
              </span>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
          <a
            href="#systems"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 shadow-md shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 font-mono text-sm"
          >
            View Deployed Systems
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-surface/50 text-slate-900 dark:text-text px-6 py-3 rounded-xl hover:border-accent/60 hover:text-accent transition-all duration-300 font-mono text-sm"
          >
            Initialize Contact
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#logs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 text-slate-400 dark:text-slate-600 hover:text-accent dark:hover:text-accent transition-colors flex flex-col items-center text-xs font-mono gap-1 group"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown size={14} className="animate-bounce text-accent" />
      </motion.a>
    </section>
  );
}
