import { useEffect, useState } from 'react';

export default function useScrollSpy(ids, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const onScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let currentId = '';

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          currentId = section.id;
        }
      });

      setActiveId(currentId);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return activeId;
}