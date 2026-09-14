import React from 'react';

export default function Card({ children, className = '', hover = true, ...rest }) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 sm:p-6 transition-all duration-300 ${hover ? 'hover:border-blue-300 hover:shadow-md' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
