import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import useTheme from '../../hooks/useTheme';
import useScrollSpy from '../../hooks/useScrollSpy';

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
    { id: 'logs', label: 'Logs', href: '#logs' },
    { id: 'systems', label: 'Systems', href: '#systems' },
    { id: 'background', label: 'Background', href: '#background' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const activeSection = useScrollSpy(['logs', 'systems', 'background', 'skills', 'contact'], 120);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-primary/80 transition-all duration-300 ${
        scrolled ? 'shadow-md shadow-slate-900/5 dark:shadow-black/40' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex flex-col leading-none group">
          <span className="font-mono font-bold tracking-tight text-slate-900 dark:text-text group-hover:text-accent transition-colors">
            ALI ROHMATULLOH
          </span>
          <span className="text-[10px] font-mono text-slate-500 dark:text-muted">System Implementer</span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-mono tracking-wider transition-colors relative py-1 ${
                    isActive
                      ? 'text-accent font-bold'
                      : 'text-slate-600 dark:text-text hover:text-accent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg border border-slate-300 bg-white p-2 text-text transition hover:border-accent/50 dark:border-slate-700 dark:bg-transparent dark:text-text"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-900 transition-colors hover:text-accent dark:text-text md:hidden"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-surface md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3 font-mono text-xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-md px-3 py-2 transition-colors ${
                      isActive
                        ? 'bg-accent/10 text-accent font-bold border-l-2 border-accent'
                        : 'text-slate-700 dark:text-text hover:bg-slate-100 dark:hover:bg-primary/40 hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
