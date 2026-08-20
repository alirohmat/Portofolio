import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';
import { Phone, Mail, MapPin, Download } from 'lucide-react';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-mono text-accent text-2xl mb-2">{"< Initialize_Contact_Protocol />"}</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-surface border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 transition-colors duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg text-accent shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-sm text-slate-900 dark:text-text transition-colors duration-300">{contact.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg text-accent shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-sm text-slate-900 dark:text-text transition-colors duration-300">{contact.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-sm text-slate-900 dark:text-text transition-colors duration-300">{contact.location}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-accent text-white dark:text-primary font-bold px-6 py-3 rounded-lg hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors duration-300"
              >
                <Download size={16} />
                Download CV
              </a>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-text px-6 py-3 rounded-lg hover:border-accent/50 transition-colors duration-300"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
