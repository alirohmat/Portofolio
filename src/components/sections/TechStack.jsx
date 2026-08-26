import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import { Cpu, Users } from 'lucide-react';

export default function TechStack() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-mono text-accent text-2xl mb-2">{"< Tech_&_Soft_Modules />"}</h2>
        <p className="text-slate-600 dark:text-muted mb-8 transition-colors duration-300">
          Kombinasi keahlian teknis implementasi sistem & kompetensi interpersonal
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hard Modules */}
          <div className="bg-white dark:bg-surface border border-slate-200 dark:border-slate-700 rounded-xl p-6 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700/80 pb-3">
              <Cpu size={20} className="text-accent" />
              <h3 className="font-mono font-bold text-lg text-slate-900 dark:text-text">Hard Modules (Technical)</h3>
            </div>

            <div className="space-y-4">
              {portfolioData.techSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5 font-mono">
                    <span className="text-xs sm:text-sm text-slate-900 dark:text-text font-medium">{skill.name}</span>
                    <span className="text-xs text-accent font-bold">{skill.level}%</span>
                  </div>
                  <div className="bg-slate-100 dark:bg-primary/80 rounded-full h-2.5 overflow-hidden border border-slate-200/50 dark:border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      className="bg-accent h-full rounded-full shadow-sm shadow-accent/50"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Protocols */}
          <div className="bg-white dark:bg-surface border border-slate-200 dark:border-slate-700 rounded-xl p-6 transition-colors duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700/80 pb-3">
                <Users size={20} className="text-accent" />
                <h3 className="font-mono font-bold text-lg text-slate-900 dark:text-text">Soft Protocols (Interpersonal)</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.softSkills.map((skill) => (
                  <div
                    key={skill}
                    className="border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-primary/50 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-center font-mono text-slate-800 dark:text-text hover:border-accent hover:text-accent transition-all duration-300 cursor-default flex items-center justify-center gap-2 group shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform shrink-0" />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-muted">
              [ PROTOCOLS READY FOR COLLABORATION ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
