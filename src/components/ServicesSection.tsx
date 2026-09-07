import React from 'react';
import { SERVICES } from '@/data/siteData';
import { Code2, Smartphone, Layout, Server, ShoppingBag, Sparkles, ShieldCheck } from 'lucide-react';

const serviceVisuals: Record<string, { icon: React.ReactNode; badgeBg: string; borderHover: string; glow: string }> = {
  Code2: {
    icon: <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900',
    borderHover: 'hover:border-indigo-400 hover:shadow-indigo-500/10',
    glow: 'text-indigo-600 dark:text-indigo-400',
  },
  Smartphone: {
    icon: <Smartphone className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
    badgeBg: 'bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-900',
    borderHover: 'hover:border-sky-400 hover:shadow-sky-500/10',
    glow: 'text-sky-600 dark:text-sky-400',
  },
  Layout: {
    icon: <Layout className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    badgeBg: 'bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-900',
    borderHover: 'hover:border-purple-400 hover:shadow-purple-500/10',
    glow: 'text-purple-600 dark:text-purple-400',
  },
  Server: {
    icon: <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900',
    borderHover: 'hover:border-emerald-400 hover:shadow-emerald-500/10',
    glow: 'text-emerald-600 dark:text-emerald-400',
  },
  ShoppingBag: {
    icon: <ShoppingBag className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
    badgeBg: 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900',
    borderHover: 'hover:border-rose-400 hover:shadow-rose-500/10',
    glow: 'text-rose-600 dark:text-rose-400',
  },
  Sparkles: {
    icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    badgeBg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900',
    borderHover: 'hover:border-amber-400 hover:shadow-amber-500/10',
    glow: 'text-amber-500',
  },
  ShieldCheck: {
    icon: <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    badgeBg: 'bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-900',
    borderHover: 'hover:border-teal-400 hover:shadow-teal-500/10',
    glow: 'text-teal-600 dark:text-teal-400',
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80">
          What We Do
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Architecting Scalable Solutions Across Every Screen
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
          From concept to high-availability deployment, we handle end-to-end digital solutions utilizing modern technology stacks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((item) => {
          const config = serviceVisuals[item.icon] || serviceVisuals['Code2'];
          return (
            <div
              key={item.id}
              className={`group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl space-y-6 flex flex-col justify-between ${config.borderHover}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl border ${config.badgeBg} group-hover:scale-110 transition-transform`}>
                    {config.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                    {item.id}
                  </span>
                </div>
                <h3 className={`text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:${config.glow}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                {item.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-100/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
