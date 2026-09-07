import React from 'react';
import { CheckCircle2, ShieldCheck, FileCode2, BookOpen, KeyRound, HeartHandshake } from 'lucide-react';

const deliverables = [
  {
    icon: <FileCode2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60',
    title: 'Clean, Documented Source Code',
    desc: 'Fully typed TypeScript codebase stored in your private GitHub / GitLab repository.',
  },
  {
    icon: <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
    badgeBg: 'bg-sky-50 dark:bg-sky-950/60',
    title: 'Architecture & API Documentation',
    desc: 'Step-by-step setup guides, Postman collections, and environment variable references.',
  },
  {
    icon: <KeyRound className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    badgeBg: 'bg-purple-50 dark:bg-purple-950/60',
    title: '100% Administrative & Cloud Access',
    desc: 'All master credentials, database keys, and domain DNS settings handed over completely.',
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60',
    title: '30 Days Free Warranty Period',
    desc: 'Immediate bug fixes and server adjustments post-launch at zero additional cost.',
  },
  {
    icon: <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
    badgeBg: 'bg-pink-50 dark:bg-pink-950/60',
    title: 'Video Walkthrough & Team Training',
    desc: 'Recorded Loom tutorials on how your team can update content, banners, and settings.',
  },
  {
    icon: <HeartHandshake className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    badgeBg: 'bg-amber-50 dark:bg-amber-950/60',
    title: 'Signed Intellectual Property Release',
    desc: 'Legal transfer certifying your company owns all patents, designs, and software created.',
  },
];

export default function DeliverablesChecklist() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-10">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80">
            What You Own
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Everything Included With Every Project Handover
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((d, i) => (
            <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-300 transition-colors">
              <div className={`p-2 rounded-xl ${d.badgeBg} shrink-0 mt-0.5 shadow-sm`}>
                {d.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">{d.title}</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
