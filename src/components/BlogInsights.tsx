import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    tag: 'Web Architecture',
    readTime: '4 min read',
    title: 'When Should Startups Choose Next.js Over Plain React?',
    desc: 'A breakdown of SSR, edge caching, and SEO benefits when building commercial web applications.',
  },
  {
    tag: 'Mobile Development',
    readTime: '6 min read',
    title: 'Flutter vs React Native in 2026: A Practical Comparison',
    desc: 'How to pick the right cross-platform framework based on app performance, team skills, and budget.',
  },
  {
    tag: 'Cost Optimization',
    readTime: '5 min read',
    title: '5 Common Oversights That Inflate Custom Software Costs',
    desc: 'Key steps to defining your MVP features early to prevent scope creep and unnecessary rework.',
  },
];

export default function BlogInsights() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">
          Knowledge & Insights
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Practical Guides For Founders
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((post, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-sm"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-blue-600 dark:text-blue-400 font-bold">{post.tag}</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {post.desc}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-2"
            >
              Discuss This Topic
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
