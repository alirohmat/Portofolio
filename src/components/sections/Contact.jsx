import React, { useState } from 'react';
import portfolioData from '../../data/portfolioData';
import { Phone, Mail, MapPin, Download, MessageSquare, Copy, Check } from 'lucide-react';

export default function Contact() {
  const { contact, profile } = portfolioData;
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCVDownload = (e) => {
    e.preventDefault();
    const cvContent = `CURRICULUM VITAE - ${profile.name}
Role: ${profile.role}
Lokasi: ${profile.location}
Kontak: ${contact.phone} | ${contact.email}

RINGKASAN:
${profile.bio}

KEAHILAN UTAMA:
${portfolioData.techSkills.map(s => `- ${s.name} (${s.level}%)`).join('\n')}

SOFT SKILLS:
${portfolioData.softSkills.join(', ')}

RIWAYAT OPERASIONAL & WORK LOGS:
${portfolioData.operationalLogs.map(l => `- ${l.role} @ ${l.org} (${l.period})\n  Focus: ${l.focus}\n  Details: ${l.details}`).join('\n\n')}

PENDIDIKAN:
- ${portfolioData.education.degree} - ${portfolioData.education.institution} (${portfolioData.education.period})
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${profile.name.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-mono text-accent text-2xl mb-2">{"< Initialize_Contact_Protocol />"}</h2>
        <p className="text-slate-600 dark:text-muted mb-8 transition-colors duration-300">
          Siap berkolaborasi & melakukan deployment sistem untuk kebutuhan operasional Anda
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-surface border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 transition-colors duration-300 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-primary/50 border border-slate-200/60 dark:border-slate-800 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2.5 rounded-lg text-accent shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-muted block">TELEPHONE / WA</span>
                    <a href={`tel:${contact.phone}`} className="text-sm font-mono text-slate-900 dark:text-text hover:text-accent font-medium transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contact.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-accent transition-colors"
                  aria-label="Copy Phone"
                >
                  {copiedKey === 'phone' ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-primary/50 border border-slate-200/60 dark:border-slate-800 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2.5 rounded-lg text-accent shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-muted block">EMAIL ADDRESS</span>
                    <a href={`mailto:${contact.email}`} className="text-sm font-mono text-slate-900 dark:text-text hover:text-accent font-medium transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(contact.email, 'email')}
                  className="p-2 text-slate-400 hover:text-accent transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedKey === 'email' ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-primary/50 border border-slate-200/60 dark:border-slate-800 transition-colors">
                <div className="bg-accent/10 p-2.5 rounded-lg text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-muted block">LOCATION</span>
                  <span className="text-sm font-mono text-slate-900 dark:text-text font-medium">{contact.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleCVDownload}
                className="inline-flex items-center justify-center gap-2 bg-accent text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-all duration-300 font-mono text-sm shadow-sm"
              >
                <Download size={16} />
                Download CV Record
              </button>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-primary/50 text-slate-900 dark:text-text px-6 py-3 rounded-xl hover:border-accent/60 hover:text-accent transition-all duration-300 font-mono text-sm"
              >
                <MessageSquare size={16} className="text-accent" />
                Direct WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
