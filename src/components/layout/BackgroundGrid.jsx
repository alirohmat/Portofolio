import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-primary pointer-events-none transition-colors duration-300">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at center, rgba(16,185,129,0.06), transparent 70%)",
        }}
      />
    </div>
  );
}
