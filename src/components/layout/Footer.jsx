import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, Briefcase } from 'lucide-react';
import { contact } from '../../data/portfolioData';

export default function Footer() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ketika footer terlihat di viewport, sembunyikan sticky bar
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="site-footer" className="border-t border-[var(--border-color)] bg-[var(--bg-surface)]/60 py-10 pb-28 sm:pb-10 backdrop-blur">
        <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-sm font-bold tracking-tight">ALI ROHMATULLOH<span className="text-lime-deep dark:text-lime">_</span></p>
            <p className="mono-label mt-1 opacity-50">sys.impl // ops.spec — Tuban, Jatim</p>
          </div>
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <p className="font-mono text-xs opacity-50">© 2026 Ali Rohmatulloh. All systems nominal.</p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] opacity-70 transition-all hover:border-lime/60 hover:opacity-100 active:scale-95"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA PWA Bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 sm:hidden ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="border-t border-[var(--border-color)] bg-[var(--bg-surface)]/95 px-4 py-3 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-lime font-bold text-lime-ink shadow-sm active:scale-95"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href="#deployed-systems"
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] font-semibold text-[var(--text-primary)] active:scale-95"
            >
              <Briefcase size={16} /> Proyek
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
