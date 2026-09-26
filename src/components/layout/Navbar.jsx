import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X, Terminal } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import useTheme from '../../hooks/useTheme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Logs', href: '#logs', index: '01' },
    { label: 'Systems', href: '#systems', index: '02' },
    { label: 'Skills', href: '#skills', index: '03' },
    { label: 'Contact', href: '#contact', index: '04' },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'border-[var(--border-color)] bg-[var(--bg-primary)]/85 shadow-card'
          : 'border-transparent bg-[var(--bg-primary)]/60'
      }`}
    >
      <div className="container-shell flex h-14 items-center justify-between md:h-16">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)] font-mono text-sm font-bold text-lime-ink shadow-glow">
            <Terminal size={16} strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-tight">ALI ROHMATULLOH</span>
            <span className="mono-label mt-1 hidden text-[10px] opacity-60 sm:inline">sys.impl // ops.spec</span>
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group rounded-lg px-3 py-2 font-mono text-[13px] text-[var(--text-muted)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)]"
              >
                <span className="mr-1 text-[10px] text-[var(--accent)]">{link.index}</span>
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="mr-1 hidden rounded-full bg-[var(--accent)] px-4 py-2 text-[13px] font-bold text-lime-ink transition-transform hover:scale-[1.03] active:scale-95 md:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] transition-all hover:border-[var(--accent)]/60"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] transition-colors hover:text-[var(--accent)] md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="mobile-bottom-sheet"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl border-t border-[var(--border-color)] bg-[var(--bg-primary)] p-6 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[var(--border-color)]" />
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex h-12 items-center rounded-xl px-4 font-mono text-[16px] transition-colors hover:bg-[var(--accent-soft)]"
                  >
                    <span className="mr-3 text-xs text-[var(--accent)]">{link.index}</span>
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex h-12 items-center justify-center rounded-xl bg-[var(--accent)] font-bold text-lime-ink"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
