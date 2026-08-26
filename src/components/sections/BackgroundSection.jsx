import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, CheckCircle2, Shield } from 'lucide-react';
import portfolioData from '../../data/portfolioData';
import Card from '../ui/Card';

export default function BackgroundSection() {
  const { education, organization } = portfolioData;

  return (
    <section id="background" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-mono text-accent text-2xl mb-2">{"< Formal_&_Org_Background />"}</h2>
        <p className="text-slate-600 dark:text-muted mb-8 transition-colors duration-300">
          Fondasi akademis dan keterlibatan organisasi penguat integritas & tanggung jawab
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full flex flex-col justify-between hover:border-accent/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl text-accent">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 dark:text-muted uppercase tracking-wider">
                        Pendidikan Formal
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-text text-base">
                        {education.degree}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <p className="text-slate-700 dark:text-text font-medium text-sm">
                    {education.institution}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-muted">
                    <span>Periode: {education.period}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-accent font-semibold">
                      <CheckCircle2 size={13} /> {education.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-muted">
                [ VERIFIED ACADEMIC RECORD ]
              </div>
            </Card>
          </motion.div>

          {/* Organization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between hover:border-accent/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl text-accent">
                      <Building2 size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 dark:text-muted uppercase tracking-wider">
                        Pengabdian & Organisasi
                      </span>
                      <h3 className="font-bold text-slate-900 dark:text-text text-base">
                        {organization.role}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <p className="text-slate-700 dark:text-text font-medium text-sm">
                    {organization.org}
                  </p>
                  <p className="text-xs font-mono text-accent">
                    Status: {organization.period}
                  </p>
                  <p className="text-slate-600 dark:text-muted text-xs sm:text-sm leading-relaxed mt-2">
                    {organization.details}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-muted flex items-center gap-1">
                <Shield size={13} className="text-accent" /> [ OPERATIONAL RESPONSIBILITY ]
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
