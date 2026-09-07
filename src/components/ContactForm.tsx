// components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    budget: '₹50,000 - ₹2,00,000',
    details: '',
  });

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi Al Barej Tech Team! I am reaching out regarding a ${formData.service} project. My name is ${
        formData.fullName || 'there'
      }. Budget: ${formData.budget}. Details: ${formData.details || "Let's schedule a call."}`
    );
    window.open(`https://wa.me/917982145805?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppRedirect();
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Contact Info & Pinned Map Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 leading-tight">
                Let's Build Something Remarkable.
              </h2>
              <p className="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-base">
                Tell us about your objectives and technical timeline. Our engineering leads will respond with a full architecture blueprint within 24 hours.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-300">
              {/* Clickable Address -> Google Maps Pin for Barej, Kaimur */}
              <a
                href="https://maps.google.com/?q=25.15,83.64+(Barej,+District+Kaimur,+Bihar)"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-950 transition-all"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-rose-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white transition-colors">Barej, District Kaimur, Bihar, India</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </a>

              {/* Clickable Email */}
              <a
                href="mailto:info@albarejtech.com"
                className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-950 transition-all"
              >
                <Mail className="w-5 h-5 text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all group-hover:text-white transition-colors">info@albarejtech.com</span>
              </a>

              {/* Clickable Phone */}
              <a
                href="tel:+917982145805"
                className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-950 transition-all"
              >
                <Phone className="w-5 h-5 text-purple-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">+91-79821-45805 (Mon-Sat, 9AM-7PM IST)</span>
              </a>
            </div>

            {/* Embedded Google Map with precise Pin Marker on Barej, Kaimur */}
            <div className="group relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
              {/* Floating Pulse Pin Badge */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-md text-xs font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                </span>
                <span className="text-white font-mono text-[11px]">Barej, Kaimur, Bihar</span>
              </div>

              {/* Open in Full Map Button */}
              <a
                href="https://maps.google.com/?q=25.15,83.64+(Barej,+District+Kaimur,+Bihar)"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Barej Kaimur in Google Maps"
                className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 backdrop-blur-md text-white text-[11px] font-bold shadow-md transition-all hover:scale-105"
              >
                <MapPin className="w-3.5 h-3.5 text-white fill-current" />
                View Full Map
              </a>

              {/* Google Maps iFrame pinned to Barej, District Kaimur */}
              <iframe
                title="Barej District Kaimur Location Map"
                src="https://maps.google.com/maps?q=Barej,+Mohania,+Kaimur,+Bihar&t=m&z=13&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-full border-0 grayscale contrast-125 opacity-85 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <button
              onClick={handleWhatsAppRedirect}
              className="w-full py-3.5 sm:py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-3 text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Directly On WhatsApp
            </button>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 w-full">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-950 border border-slate-800 space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Service Required</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
                  >
                    <option>Website Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Product Design</option>
                    <option>AI & Automation Workflows</option>
                    <option>Cloud & Backend Architecture</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
                >
                  <option>Under ₹50,000</option>
                  <option>₹50,000 - ₹2,00,000</option>
                  <option>₹2,00,000 - ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Project Description</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project goals, milestones, and target launch timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-600 hover:opacity-95 text-white font-bold shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Send Proposal Request
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}