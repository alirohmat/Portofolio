import React from 'react';

export default function Card({ children, className = '', hover = true, ...rest }) {
  return (
    <div
      className={`bg-white dark:bg-surface border border-slate-200 dark:border-slate-700 rounded-xl p-5 sm:p-6 transition-colors duration-300 ${hover ? 'transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
