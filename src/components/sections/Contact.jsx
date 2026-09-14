import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contact } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';

function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
}

export default function Contact() {
  const rows = [
    { icon: Phone, label: 'PHONE / WA', value: contact.phone, href: contact.whatsapp },
    { icon: Mail, label: 'EMAIL', value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: 'BASE', value: contact.location },
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
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-4 transition-colors hover:border-lime/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-lime-ink">
                  <row.icon size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mono-label opacity-50">{row.label}</p>
                  <p className="truncate text-[15px] font-semibold">{row.value}</p>
                </div>
                <button
                  type="button"
                  onClick={() => copyText(row.value)}
                  aria-label={`Copy ${row.label}`}
                  className="rounded-lg border border-[var(--border-color)] p-2.5 opacity-60 transition-all hover:border-lime/60 hover:opacity-100"
                >
                  <Copy size={15} />
                </button>
              </div>
            ))}
          </div>

          <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 font-bold text-lime-ink shadow-glow transition-transform hover:scale-[1.01] active:scale-95"
            >
              <MessageCircle size={18} /> Chat WhatsApp
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-3.5 font-semibold transition-colors hover:border-lime/50"
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
