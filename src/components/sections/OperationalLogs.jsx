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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.operationalLogs.map((log, index) => {
            const Icon = logIcons[log.type] || ClipboardList;
            return (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Icon size={16} className="text-accent shrink-0" />
                    <span className="font-medium text-slate-900 dark:text-text text-sm">{log.role}</span>
                    <span className="bg-slate-100 dark:bg-primary border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-muted text-xs px-2 py-0.5 rounded transition-colors duration-300">
                      {log.org} • {log.period}
                    </span>
                  </div>
                  <p className="mt-2 text-accent text-xs font-mono">FOCUS: {log.focus}</p>
                  <p className="mt-2 text-slate-600 dark:text-muted text-sm transition-colors duration-300">{log.details}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {log.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-accent/30 text-accent text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
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
