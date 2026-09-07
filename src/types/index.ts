// types/index.ts
export interface Project {
  id: string;
  title: string;
  category?: 'Web' | 'Mobile' | 'UI/UX';
  description: string;
  tags: string[];
  metrics?: string;
  status: 'LIVE' | 'BUILDING' | 'DESIGN';
  progress?: number;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  stack: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  source: 'Clutch' | 'Google';
}

export interface FAQItem {
  question: string;
  answer: string;
}