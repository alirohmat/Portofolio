import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import { Cpu, Users } from 'lucide-react';

export default function TechStack() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-mono text-accent text-2xl mb-2">{"< Tech_&_Soft_Modules />"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Hard Modules */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={20} className="text-accent" />
              <h3 className="font-mono text-lg text-slate-900 dark:text-text transition-colors duration-300">Hard Modules</h3>
            </div>

            {portfolioData.techSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-sm text-slate-900 dark:text-text transition-colors duration-300">{skill.name}</span>
                  <span className="text-xs text-slate-500 dark:text-muted">{skill.level}%</span>
                </div>
                <div className="bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden transition-colors duration-300">
                  <div
                    className="bg-accent h-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Soft Protocols */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-accent" />
              <h3 className="font-mono text-lg text-slate-900 dark:text-text transition-colors duration-300">Soft Protocols</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {portfolioData.softSkills.map((skill) => (
                <div
                  key={skill}
                  className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent rounded-lg px-3 py-2 text-sm text-center font-mono text-slate-700 dark:text-text hover:border-accent transition-colors duration-300 cursor-default"
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
