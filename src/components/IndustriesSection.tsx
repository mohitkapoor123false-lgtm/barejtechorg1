import React from 'react';
import { GraduationCap, ShoppingBag, HeartPulse, Truck, Building2, Landmark } from 'lucide-react';

const industries = [
  {
    icon: <ShoppingBag className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900',
    title: 'E-Commerce & D2C Brands',
    desc: 'Headless storefronts, custom checkout funnels, inventory syncing, and automated invoice delivery.',
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    badgeBg: 'bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-900',
    title: 'Education & EdTech',
    desc: 'Student learning portals, proctored testing software, attendance management, and fee collection.',
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    badgeBg: 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900',
    title: 'Healthcare & Clinics',
    desc: 'Telemedicine scheduling, patient record portals, diagnostic reports, and doctor booking apps.',
  },
  {
    icon: <Truck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900',
    title: 'Logistics & Supply Chain',
    desc: 'Real-time vehicle tracking, consignment dashboards, route optimization, and driver apps.',
  },
  {
    icon: <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    badgeBg: 'bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-900',
    title: 'Real Estate & Infrastructure',
    desc: 'Property listing marketplaces, virtual tours, dynamic inquiry forms, and CRM integration.',
  },
  {
    icon: <Landmark className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    badgeBg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900',
    title: 'Fintech & Billing Systems',
    desc: 'GST-compliant invoicing, subscription billing engines, multi-currency processing, and ledgers.',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
        <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80">
          Domain Specialization
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Industries We Build For
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Tailored architectures engineered specifically around your industry's compliance and user flow requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 space-y-3 hover:border-indigo-400 transition-all shadow-sm hover:shadow-md"
          >
            <div className={`p-3 w-fit rounded-xl border ${item.badgeBg}`}>
              {item.icon}
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
