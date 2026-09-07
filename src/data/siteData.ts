// data/siteData.ts
import { Project, ServiceItem, Testimonial, FAQItem } from '@/types';

export const CLIENT_PARTNERS = [
  {
    name: 'Mahi Botanical barrier care',
    tagline: 'Organic Skincare & Barrier Restoration',
    badge: 'D2C Brand',
  },
  {
    name: 'Sharda Academy Centre Of Excellence',
    tagline: 'Premier Educational Institution',
    badge: 'EdTech & Training',
  },
];

export const LIVE_PROJECT_WIDGETS: Project[] = [
  {
    id: 'p1',
    title: 'Mahi Botanical Care Store',
    description: 'High-conversion headless D2C store with customized ingredient matching.',
    tags: ['Next.js 15', 'Shopify Plus', 'Tailwind', 'Stripe'],
    metrics: '+210% increase in checkout rate',
    status: 'LIVE',
    progress: 100,
  },
  {
    id: 'p2',
    title: 'Sharda Academy LMS & Portal',
    description: 'Comprehensive hybrid-learning & proctored testing platform for 15k+ students.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    metrics: '99.98% exam uptime delivered',
    status: 'LIVE',
    progress: 100,
  },
  {
    id: 'p5',
    title: 'CloudAPI Backend Framework',
    description: 'Scalable multi-tenant microservices architecture handling 200k+ daily queries.',
    tags: ['Node.js', 'TypeScript', 'AWS ECS', 'PostgreSQL'],
    metrics: '200k+ daily queries processed',
    status: 'LIVE',
    progress: 100,
  },
];

export const ALL_PROJECTS: Project[] = [...LIVE_PROJECT_WIDGETS];

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Website Development',
    description: 'High-performance, programmatic SEO-optimized websites built with modern frameworks from landing experiences to complex web applications.',
    stack: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    icon: 'Code2',
  },
  {
    id: '02',
    title: 'Mobile App Development',
    description: 'Fluid iOS and Android applications with offline-first support, native hardware integration, and proactive push pipelines.',
    stack: ['Flutter', 'React Native', 'Dart', 'Firebase', 'Expo'],
    icon: 'Smartphone',
  },
  {
    id: '03',
    title: 'UI/UX & Product Design',
    description: 'Design systems and conversion-focused customer journeys backed by quantitative UX research and clickable interactive prototypes.',
    stack: ['Figma', 'Design Systems', 'Prototyping', 'Framer'],
    icon: 'Layout',
  },
  {
    id: '04',
    title: 'Backend & Cloud Infrastructure',
    description: 'Resilient microservices, GraphQL/REST APIs, and autoscaling cloud topologies engineered for zero downtime.',
    stack: ['Node.js', 'Python', 'FastAPI', 'AWS', 'Docker', 'PostgreSQL'],
    icon: 'Server',
  },
  {
    id: '05',
    title: 'E-Commerce Engineering',
    description: 'Ultra-fast headless online stores with custom payment gateways, real-time inventory sync, and hyper-optimized checkout funnels.',
    stack: ['Shopify', 'WooCommerce', 'Razorpay', 'Stripe', 'Next.js Commerce'],
    icon: 'ShoppingBag',
  },
  {
    id: '06',
    title: 'AI & Automation Workflows',
    description: 'Intelligent AI agents, LangChain retrieval systems, vector search pipelines, and autonomous workflow bots that reduce operational overhead.',
    stack: ['OpenAI API', 'LangChain', 'Python', 'TensorFlow', 'n8n'],
    icon: 'Sparkles',
  },
  {
    id: '07',
    title: 'Maintenance & 24/7 Support',
    description: 'Continuous uptime monitoring, security patching, CI/CD pipeline tuning, and dedicated SLA-backed feature iteration.',
    stack: ['24/7 Support', 'CI/CD', 'Realtime Monitoring', 'SLA Guarantees'],
    icon: 'ShieldCheck',
  },
];

export const COMPARISON_DATA = [
  {
    feature: 'Communication & Workflow',
    ourWay: 'Dedicated PM, daily async video updates & Slack/WhatsApp access',
    others: 'Slow email ticketing, vague timelines & scattered ownership',
  },
  {
    feature: 'Delivery & Reliability',
    ourWay: 'Strict weekly milestone demos with deterministic timelines',
    others: 'Frequent delays, silent weeks, and rushed handoffs',
  },
  {
    feature: 'Post-Launch Warranty',
    ourWay: '30-45 Days free warranty & priority bug-fix SLAs included',
    others: 'Disappear immediately post-payment or invoice heavy hourly rates',
  },
  {
    feature: 'Code Quality & Ownership',
    ourWay: '100% IP ownership, typed architectures & comprehensive documentation',
    others: 'Spaghetti code, third-party lock-ins & unmaintainable forks',
  },
  {
    feature: 'NDA & IP Protection',
    ourWay: 'Strict mutual NDA executed before deep-dive scoping',
    others: 'Informal agreements with no enterprise compliance',
  },
];

export const TECH_STACK = {
  Frontend: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
  Backend: ['Node.js', 'Python', 'FastAPI', 'Laravel', 'Spring Boot', 'GraphQL'],
  Mobile: ['Flutter', 'React Native', 'Dart', 'Expo', 'Swift', 'Kotlin'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Supabase'],
  Cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'DigitalOcean'],
  AI: ['OpenAI API', 'LangChain', 'Gemini Flash', 'Hugging Face', 'n8n', 'Zapier'],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Al Barej Tech engineered our digital storefront with incredible precision. Our checkout conversion shot up by 210%, and page load speeds are under 800ms.',
    author: 'Sunil Verma',
    role: 'Co-Founder',
    company: 'Mahi Botanical barrier care',
    rating: 5,
    source: 'Clutch',
  },
  {
    id: 't2',
    quote: 'The learning portal they deployed for our students handled peak entrance examination traffic without a single hiccup. Truly world-class engineers.',
    author: 'Dr. Anand Sharda',
    role: 'Director of Academics',
    company: 'Sharda Academy Centre Of Excellence',
    rating: 5,
    source: 'Google',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How much does a typical project cost?',
    answer: 'Pricing is scoped transparently based on deliverables and complexity. Basic web apps and brand experiences start from ₹40,000, while end-to-end custom multi-tenant SaaS or cross-platform mobile apps typically range between ₹1.5 Lakh to ₹8 Lakh. We provide an exact fixed-price quote upfront.',
  },
  {
    question: 'How fast can you deliver our project?',
    answer: 'Standard marketing platforms and MVPs launch within 2–4 weeks. Complex full-stack mobile applications and scalable portals generally take 6–10 weeks, backed by weekly deployable builds.',
  },
  {
    question: 'Do you sign an NDA before we share sensitive business logic?',
    answer: 'Yes. We sign an enterprise-grade Non-Disclosure Agreement (NDA) prior to any discovery call to ensure your IP and market advantage remain 100% confidential.',
  },
  {
    question: 'What happens after our product is deployed?',
    answer: 'Every project includes 30 days of complimentary white-glove post-launch maintenance, bug fixing, and server tuning. We also offer dedicated monthly retainers for continuous feature velocity.',
  },
];