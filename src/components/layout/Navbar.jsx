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
      <div className="container-shell flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime font-mono text-sm font-bold text-lime-ink shadow-glow">
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
                <span className="mr-1 text-[10px] text-lime-dim dark:text-lime">{link.index}</span>
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="mr-1 hidden rounded-full bg-lime px-4 py-2 text-[13px] font-bold text-lime-ink transition-transform hover:scale-[1.03] active:scale-95 md:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] transition-all hover:border-lime/60"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 transition-colors hover:text-lime-dim md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute left-0 top-16 w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 shadow-card backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 font-mono text-[15px] transition-colors hover:bg-[var(--accent-soft)]"
                >
                  <span className="mr-2 text-xs text-lime-dim dark:text-lime">{link.index}</span>
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-lime px-4 py-3 text-center font-bold text-lime-ink"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
