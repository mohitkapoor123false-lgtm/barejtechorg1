'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send } from 'lucide-react';

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasShown = sessionStorage.getItem('consultation_modal_shown');
        if (!hasShown) {
          setIsOpen(true);
          sessionStorage.setItem('consultation_modal_shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/917982145805?text=Hi!%20I%20would%20like%20to%20claim%20my%20free%2030-minute%20technical%20consultation.%20My%20email%20is%20${encodeURIComponent(email)}`,
      '_blank'
    );
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-8 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl space-y-6">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Free Architecture Call
          </div>
          <h3 className="text-2xl font-black">Claim a Free 30-Min Technical Consultation</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Get an objective evaluation of your product roadmap, technology choices, and estimated timeline from our senior team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="yourname@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            Claim Consultation
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}