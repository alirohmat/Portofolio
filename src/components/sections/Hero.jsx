import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/portfolioData';

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
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300">
          {profile.role}
        </p>
        <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
          {profile.bio ? `${profile.bio.slice(0, 147).split(' ').slice(0, -1).join(' ')}...` : ''}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center">
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition shadow-sm"
          >
            Connect
          </a>
          <a
            href="#systems"
            className="w-full sm:w-auto rounded-lg border border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
