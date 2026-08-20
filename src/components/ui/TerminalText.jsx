import React, { useEffect, useState } from 'react';

export default function TerminalText({ text, speed = 40, cursor = true, className = '' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (index >= text.length) {
      setIsDone(true);
      return undefined;
    }

    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearInterval(timer);
  }, [index, speed, text]);

  return (
    <span className={`font-mono text-accent ${className}`.trim()}>
      {displayedText}
      {cursor && isDone && <span className="animate-pulse">|</span>}
    </span>
  );
}