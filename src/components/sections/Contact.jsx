import React from 'react';
import { contact } from '../../data/portfolioData';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">Get in Touch</h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-10">Feel free to reach out for professional collaborations or inquiries.</p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 sm:p-10 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 dark:bg-slate-700 p-3 rounded-lg text-blue-600 dark:text-blue-400 shrink-0">
                  <Phone size={20} />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{contact.phone}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 dark:bg-slate-700 p-3 rounded-lg text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail size={20} />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{contact.email}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 dark:bg-slate-700 p-3 rounded-lg text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{contact.location}</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-sm"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
