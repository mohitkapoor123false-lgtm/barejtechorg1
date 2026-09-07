// components/SideDotNavigation.tsx
'use client';

import React from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

interface NavSection {
  id: string;
  label: string;
}

const SECTIONS: NavSection[] = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'about', label: 'About Us' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
];

export default function SideDotNavigation() {
  const sectionIds = SECTIONS.map((s) => s.id);
  const activeId = useScrollSpy(sectionIds, 250);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Section navigation dots"
      className="fixed right-3 xl:right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-2.5 p-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md"
    >
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Scroll to ${section.label}`}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
          >
            {/* Tooltip Label */}
            <span className="pointer-events-none absolute right-8 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-md">
              {section.label}
            </span>

            {/* Dot Indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-6 bg-indigo-600 dark:bg-indigo-400 shadow-md shadow-indigo-500/50 scale-100'
                  : 'w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-indigo-400 scale-90'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
}