import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Mail, MapPin, MessageCircle, Phone, Check } from 'lucide-react';
import { contact } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);

  const copyText = (text, fieldKey) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedField(fieldKey);
        setTimeout(() => setCopiedField(null), 2000);
      }).catch(() => {});
    }
  };

  const rows = [
    { key: 'phone', icon: Phone, label: 'PHONE / WA', value: contact.phone, href: contact.whatsapp },
    { key: 'email', icon: Mail, label: 'EMAIL', value: contact.email, href: `mailto:${contact.email}` },
    { key: 'base', icon: MapPin, label: 'BASE', value: contact.location },
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          index="04"
          eyebrow="contact.sh"
          title="Hubungi Saya"
          desc="Butuh implementer yang rapi di data dan cepat di deploy? Jalur tercepat di bawah."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="card-line relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl p-6 sm:p-10"
        >
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[500px] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(200,240,75,0.16), transparent)' }}
          />
          <div className="relative space-y-3">
            {rows.map((row) => {
              const isCopied = copiedField === row.key;
              return (
                <div
                  key={row.label}
                  className="relative flex min-h-[64px] items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-4 transition-colors hover:border-lime/50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-lime-ink">
                    <row.icon size={19} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="mono-label opacity-50">{row.label}</p>
                    <p className="break-words text-[15px] font-semibold leading-relaxed">{row.value}</p>
                  </div>
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      onClick={() => copyText(row.value, row.key)}
                      aria-label={`Copy ${row.label}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] opacity-70 transition-all hover:border-lime/60 hover:opacity-100 active:scale-95"
                    >
                      {isCopied ? <Check size={18} className="text-lime-deep dark:text-lime" /> : <Copy size={18} />}
                    </button>
                    <AnimatePresence>
                      {isCopied && (
                        <motion.span
                          initial={{ opacity: 0, y: 4, scale: 0.95 }}
                          animate={{ opacity: 1, y: -32, scale: 1 }}
                          exit={{ opacity: 0, y: -36, scale: 0.95 }}
                          className="absolute -top-2 right-0 z-10 rounded-md bg-lime px-2 py-0.5 font-mono text-[11px] font-bold text-lime-ink shadow-md"
                        >
                          Disalin
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative mt-6 flex flex-col gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-lime px-6 py-4 font-bold text-lime-ink shadow-glow transition-transform hover:scale-[1.01] active:scale-95"
            >
              <MessageCircle size={18} /> Chat WhatsApp
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-4 font-semibold transition-colors hover:border-lime/50 active:scale-95"
            >
              <Mail size={18} /> Kirim Email
            </a>
          </div>

          <p className="relative mt-5 text-center font-mono text-[11px] tracking-widest opacity-50">
            AVG_RESPONSE :: &lt; 24 JAM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
