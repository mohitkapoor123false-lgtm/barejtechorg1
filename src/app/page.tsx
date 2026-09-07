// app/page.tsx
import Navbar from '@/components/Navbar';
import SideDotNavigation from '@/components/SideDotNavigation';
import Hero from '@/components/Hero';
import ClientSection from '@/components/ClientSection';
import ClientShowcaseModal from '@/components/ClientShowcaseModal';
import AiAuditTool from '@/components/AiAuditTool';
import IndustriesSection from '@/components/IndustriesSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import DeliverablesChecklist from '@/components/DeliverablesChecklist';
import TechStackSection from '@/components/TechStackSection';
import ProcessSection from '@/components/ProcessSection';
import CompanyStory from '@/components/CompanyStory';
import CultureSection from '@/components/CultureSection';
import ComparisonSection from '@/components/ComparisonSection';
import DirectFounderCall from '@/components/DirectFounderCall';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogInsights from '@/components/BlogInsights';
import FAQSection from '@/components/FAQSection';
import CareersSection from '@/components/CareersSection';
import ContactForm from '@/components/ContactForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ConsultationModal from '@/components/ConsultationModal';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-600 selection:text-white transition-colors">
      <Navbar />
      <SideDotNavigation />
      <Hero />
      <ClientSection />
      <ClientShowcaseModal />
      <AiAuditTool />
      <IndustriesSection />
      <ServicesSection />
      <PortfolioSection />
      <DeliverablesChecklist />
      <TechStackSection />
      <ProcessSection />
      <CompanyStory />
      <CultureSection />
      <ComparisonSection />
      <DirectFounderCall />
      <PricingSection />
      <TestimonialsSection />
      <BlogInsights />
      <FAQSection />
      <CareersSection />
      <ContactForm />
      <FloatingWhatsApp />
      <ConsultationModal />

      {/* Footer with Active Maps, Email, and Phone Links */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div>
              <span className="font-black text-lg text-white">
                Al Barej <span className="text-indigo-400">Tech</span>
              </span>
              <p className="text-slate-400 text-xs mt-1">
                Accelerating digital transformation with robust software architecture.
              </p>
            </div>

            {/* Interactive Contact & Location Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs">
              <a
                href="https://maps.google.com/?q=25.15,83.64+(Barej,+District+Kaimur,+Bihar)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Barej, Kaimur, Bihar
              </a>
              <a
                href="mailto:info@albarejtech.com"
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                info@albarejtech.com
              </a>
              <a
                href="tel:+917982145805"
                className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                +91-79821-45805
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Al Barej Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="font-mono text-[11px] text-slate-500">
              Engineered with Next.js 15, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}