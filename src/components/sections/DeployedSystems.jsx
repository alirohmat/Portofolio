import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import StatusBadge from '../ui/StatusBadge';
import portfolioData from '../../data/portfolioData';
import { Rocket, ExternalLink, Server } from 'lucide-react';

export default function DeployedSystems() {
  return (
    <section id="systems" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-mono text-accent text-2xl mb-2">{"< Deployed_Systems />"}</h2>
        <p className="text-slate-600 dark:text-muted mb-8 transition-colors duration-300">Active Nodes — sistem yang sudah live & deployed ke production</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.deployedSystems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <Card className="h-full hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <StatusBadge status={item.status} />
                    <h3 className="font-bold mt-2 text-slate-900 dark:text-text transition-colors duration-300">{item.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-muted">{item.role}</p>
                  </div>
                  <Rocket size={20} className="text-accent shrink-0" />
                </div>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-accent hover:text-emerald-600 dark:hover:text-accent underline inline-flex items-center gap-1 transition-colors duration-300"
                  >
                    {item.displayUrl} <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-slate-500 dark:text-muted text-sm">{item.displayUrl}</span>
                )}

                <p className="text-slate-600 dark:text-muted text-sm mt-3 transition-colors duration-300">{item.details}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.stack.map((tech) => (
                    <span key={tech} className="border border-slate-200 dark:border-slate-700 text-xs px-2 py-0.5 rounded-full text-slate-600 dark:text-muted transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {item.highlights && (
                  <ul className="list-disc pl-5 mt-3 text-xs text-slate-600 dark:text-muted transition-colors duration-300">
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
