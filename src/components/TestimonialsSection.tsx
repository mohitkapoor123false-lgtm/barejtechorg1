import React from 'react';
import { TESTIMONIALS } from '@/data/siteData';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Verified Reviews & Testimonials
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-300 dark:text-slate-700" />
              </div>
              <p className="text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.author}</h4>
                <p className="text-xs text-slate-500">{t.role} • {t.company}</p>
              </div>
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                via {t.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
