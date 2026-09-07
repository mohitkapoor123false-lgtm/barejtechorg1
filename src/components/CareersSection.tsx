// components/CareersSection.tsx
'use client';

import React, { useState } from 'react';
import { Briefcase, Mail, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

const OPEN_ROLES = [
  {
    title: 'Senior Full-Stack Engineer',
    type: 'Full-time / Remote',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Mobile Application Developer',
    type: 'Full-time / Remote',
    tags: ['Flutter', 'React Native', 'Firebase'],
  },
  {
    title: 'UI/UX & Product Designer',
    type: 'Full-time / Remote',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
];

export default function CareersSection() {
  const [copied, setCopied] = useState(false);
  const email = 'info@albarejtech.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="careers" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80">
          Join Our Team
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Build High-Impact Tech With Us
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          We are always searching for passionate engineers, designers, and problem solvers. Send us your resume and work portfolio.
        </p>
      </div>

      {/* Career Callout Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold font-mono">
              <Briefcase className="w-3.5 h-3.5" />
              Careers & Open Positions
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Drop Your Resume Directly to Our Inbox
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Attach your CV, portfolio link, or GitHub profile. Mention your primary tech stack, years of experience, and desired role in the subject line.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`mailto:${email}?subject=${encodeURIComponent('Career Application - [Your Name / Role]')}&body=${encodeURIComponent('Hi Al Barej Tech Team,\n\nI would like to apply for a role with your team. Please find my portfolio and attached resume below.\n\nLinkedIn/GitHub:\nPrimary Stack:\nYears of Experience:\n')}`}
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Your Resume
            </a>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 font-mono text-xs transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Open Track Roles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {OPEN_ROLES.map((role, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {role.type}
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">{role.title}</h4>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {role.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${email}?subject=${encodeURIComponent(`Application for ${role.title}`)}&body=${encodeURIComponent(`Hi Al Barej Tech Team,\n\nI am applying for the position of ${role.title}.\n\nPlease find my resume and portfolio links below.`)}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-sky-400 hover:underline pt-3 border-t border-slate-100 dark:border-slate-800"
            >
              Apply via Email
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}