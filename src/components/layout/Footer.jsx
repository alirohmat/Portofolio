import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-primary py-6 text-center transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-sm text-slate-600 dark:text-muted font-mono">
          Copyright © 2026 ALI ROHMATULLOH — System Implementer
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="mailto:alirohmat@yahoo.com" className="flex items-center text-sm text-slate-600 dark:text-muted hover:text-accent transition-colors">
            <Mail size={16} className="mr-1" />
            alirohmat@yahoo.com
          </a>
          <a href="tel:+6282132789470" className="flex items-center text-sm text-slate-600 dark:text-muted hover:text-accent transition-colors">
            <Phone size={16} className="mr-1" />
            +62 821 3278 9470
          </a>
          <p className="flex items-center text-sm text-slate-600 dark:text-muted">
            <MapPin size={16} className="mr-1" />
            Kab. Tuban
          </p>
        </div>
      </div>
    </footer>
  );
}
