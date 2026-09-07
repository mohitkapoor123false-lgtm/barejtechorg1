// components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const NAV_LINKS = [
  { href: '#hero', id: 'hero', label: 'Home' },
  { href: '#services', id: 'services', label: 'Services' },
  { href: '#portfolio', id: 'portfolio', label: 'Portfolio' },
  { href: '#stack', id: 'stack', label: 'Tech Stack' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#why-us', id: 'why-us', label: 'Why Us' },
  { href: '#pricing', id: 'pricing', label: 'Pricing' },
  { href: '#testimonials', id: 'testimonials', label: 'Testimonials' },
  { href: '#faq', id: 'faq', label: 'FAQ' },
  { href: '#careers', id: 'careers', label: 'Careers' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [manualActive, setManualActive] = useState<string | null>(null);

  const spyActiveSection = useScrollSpy(
    NAV_LINKS.map((link) => link.id),
    140
  );

  const activeSection = manualActive || spyActiveSection;

  useEffect(() => {
    if (!manualActive) return;
    const timer = setTimeout(() => {
      setManualActive(null);
    }, 800);
    return () => clearTimeout(timer);
  }, [manualActive]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    e.preventDefault();
    setManualActive(id);
    setMobileOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 75;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#D6E8FF]/90 dark:bg-[#0A1628]/90 border-b border-indigo-200/50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-all">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              </svg>
            </div>
            <div>
              <span className="font-black text-lg sm:text-xl tracking-tight text-[#0F172A] dark:text-white flex items-center gap-1">
                Al Barej <span className="text-indigo-600 dark:text-sky-400">Tech</span>
              </span>
              <p className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-slate-600 dark:text-slate-400 hidden xs:block">
                Accelerating Innovation
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-6 text-xs font-semibold">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id, link.href)}
                  className={`relative py-1.5 transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-indigo-600 dark:text-sky-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-sky-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2.5px] w-full bg-indigo-600 dark:bg-sky-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact', '#contact')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Quote
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <div className="sm:hidden">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-indigo-100/60 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden px-4 pt-3 pb-6 space-y-1.5 bg-[#D6E8FF]/95 dark:bg-[#0A1628]/95 backdrop-blur-xl border-b border-indigo-200/50 dark:border-slate-800 shadow-xl max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.href)}
                className={`block px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                  isActive
                    ? 'bg-indigo-100/80 dark:bg-slate-900 text-indigo-600 dark:text-sky-400 font-bold border-l-4 border-indigo-600'
                    : 'text-slate-800 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-indigo-200/50 dark:border-slate-800">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact', '#contact')}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-center text-xs font-bold shadow-md block transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}