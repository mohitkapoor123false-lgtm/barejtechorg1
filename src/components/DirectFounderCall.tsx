import React from 'react';
import { PhoneCall, Zap } from 'lucide-react';

export default function DirectFounderCall() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-bold">
            <Zap className="w-3.5 h-3.5" />
            Fast-Track Discovery
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">
            Have a Time-Sensitive Project?
          </h3>
          <p className="text-xs text-slate-300 max-w-md">
            Skip the queue. Connect directly with our lead architects on WhatsApp for instant scope evaluation.
          </p>
        </div>

        <a
          href="https://wa.me/917982145805?text=Hi%20Al%20Barej%20Tech!%20I%20need%20a%20priority%20consultation%20for%20my%20upcoming%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
        >
          <PhoneCall className="w-4 h-4 text-white" />
          Talk to Lead Architect
        </a>
      </div>
    </section>
  );
}
