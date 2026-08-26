import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Terminal, History } from 'lucide-react';
import portfolioData from '../../data/portfolioData';
import Card from '../ui/Card';

const logIcons = {
  'OPERATIONAL_LOG': ClipboardList,
  'TECH_LOG': Terminal,
  'HISTORY_LOG': History,
};

export default function OperationalLogs() {
  return (
    <section id="logs" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-mono text-accent text-2xl mb-2">{"< Operational_Logs />"}</h2>
        <p className="text-slate-600 dark:text-muted mb-8 transition-colors duration-300">Fondasi ketelitian dari operasional lapangan hingga deployment sistem</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolioData.operationalLogs.map((log, index) => {
            const Icon = logIcons[log.type] || ClipboardList;
            return (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full flex flex-col justify-between hover:border-accent/40 hover:shadow-xl transition-all duration-300">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-accent/10 border border-accent/20 rounded-lg text-accent">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-text text-base leading-tight">
                            {log.role}
                          </h3>
                          <span className="text-xs font-mono text-slate-500 dark:text-muted">
                            {log.org}
                          </span>
                        </div>
                      </div>
                      <span className="bg-slate-100 dark:bg-primary/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-muted text-[11px] font-mono px-2.5 py-1 rounded-md shrink-0">
                        {log.period}
                      </span>
                    </div>

                    <div className="mt-2 py-1 px-2.5 bg-slate-100/70 dark:bg-primary/50 border border-slate-200/60 dark:border-slate-800 rounded-md font-mono text-xs text-accent">
                      <span className="text-slate-500 dark:text-muted mr-1">TARGET:</span> {log.focus}
                    </div>

                    <p className="mt-3 text-slate-600 dark:text-muted text-xs sm:text-sm leading-relaxed">
                      {log.details}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {log.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-accent/5 border border-accent/25 text-accent font-mono text-[11px] px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
