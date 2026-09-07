'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 150): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      // Find all valid section elements on the page
      const sections = sectionIds
        .map((id) => ({
          id,
          element: document.getElementById(id),
        }))
        .filter((item): item is { id: string; element: HTMLElement } => item.element !== null);

      if (sections.length === 0) return;

      // Sort sections by their vertical position in document
      sections.sort((a, b) => {
        const topA = a.element.getBoundingClientRect().top + window.scrollY;
        const topB = b.element.getBoundingClientRect().top + window.scrollY;
        return topA - topB;
      });

      const scrollPosition = window.scrollY + offset;

      // Check if user is near the bottom of the page -> activate last section (e.g. contact)
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      // Find the current section in view
      let currentActive = sections[0].id;
      for (const section of sections) {
        const sectionTop = section.element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= sectionTop - 20) {
          currentActive = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
