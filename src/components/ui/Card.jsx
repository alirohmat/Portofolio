import React from 'react';

export default function Card({ children, className = '', hover = true, ...rest }) {
  return (
    <div
      className={`card-line rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
        hover ? 'hover:-translate-y-1 hover:shadow-card dark:hover:border-lime/40' : ''
      } ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
