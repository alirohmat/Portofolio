import React from 'react';
import { motion } from 'framer-motion';
import { techSkills, softSkills } from '../../data/portfolioData';

export default function TechStack() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Technical Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Hard Modules */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Core Competencies</h3>

            {techSkills.map((skill) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-xs text-slate-500">{skill.level}%</span>
                </div>
                <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="bg-blue-600 h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Soft Protocols */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Professional Soft Skills</h3>

            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-slate-50 dark:bg-slate-800 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-center hover:border-blue-400 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
