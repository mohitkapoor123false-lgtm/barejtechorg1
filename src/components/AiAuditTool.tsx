'use client';

import React, { useState } from 'react';
import { Cpu, ArrowRight } from 'lucide-react';

export default function AiAuditTool() {
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
  });
  const [calculated, setCalculated] = useState(false);

  const toggleAnswer = (key: string) => {
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const trueCount = Object.values(answers).filter(Boolean).length;
  const score = trueCount * 25;

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-slate-900/90 border border-slate-800 shadow-2xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
            <Cpu className="w-4 h-4" />
            30-Second Architecture Audit
          </div>
          <h2 className="text-3xl sm:text-4xl font-black">
            Is Your Tech Stack AI & Scale-Ready?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Check the criteria below to instantly assess your technical velocity and bottleneck risk.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3.5">
          <div
            onClick={() => toggleAnswer('q1')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
              answers.q1
                ? 'bg-blue-500/10 border-blue-500 text-white'
                : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs sm:text-sm font-semibold">
              Our site/app loads in under 1.2 seconds on mobile devices globally.
            </span>
            <input type="checkbox" checked={answers.q1} readOnly className="accent-blue-600 w-4 h-4" />
          </div>

          <div
            onClick={() => toggleAnswer('q2')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
              answers.q2
                ? 'bg-blue-500/10 border-blue-500 text-white'
                : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs sm:text-sm font-semibold">
              We have an automated CI/CD pipeline with end-to-end type validation.
            </span>
            <input type="checkbox" checked={answers.q2} readOnly className="accent-blue-600 w-4 h-4" />
          </div>

          <div
            onClick={() => toggleAnswer('q3')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
              answers.q3
                ? 'bg-blue-500/10 border-blue-500 text-white'
                : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs sm:text-sm font-semibold">
              Our databases and APIs utilize edge caching and auto-scaling rules.
            </span>
            <input type="checkbox" checked={answers.q3} readOnly className="accent-blue-600 w-4 h-4" />
          </div>

          <div
            onClick={() => toggleAnswer('q4')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
              answers.q4
                ? 'bg-blue-500/10 border-blue-500 text-white'
                : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs sm:text-sm font-semibold">
              We leverage AI workflows or vector retrieval for customer automation.
            </span>
            <input type="checkbox" checked={answers.q4} readOnly className="accent-blue-600 w-4 h-4" />
          </div>

          <div className="pt-4 flex flex-col sm:row items-center justify-between gap-4">
            <button
              onClick={() => setCalculated(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-2"
            >
              Compute Architecture Score
              <ArrowRight className="w-4 h-4" />
            </button>

            {calculated && (
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-mono">Infrastructure Score:</span>
                <span className={`text-xl font-bold font-mono ${score >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {score}% {score >= 75 ? '• High Velocity' : '• Modernization Needed'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
