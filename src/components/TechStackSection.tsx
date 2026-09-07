// components/TechStackSection.tsx
'use client';

import React, { useState } from 'react';
import { TECH_STACK } from '@/data/siteData';
import { Layers, Terminal, Cpu, Database, Cloud, Bot } from 'lucide-react';

const techIcons: Record<string, React.ReactNode> = {
  // Frontend
  'React': (
    <svg className="w-6 h-6 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  'Next.js 15': (
    <svg className="w-6 h-6 fill-current text-black dark:text-white" viewBox="0 0 180 180">
      <path fill="currentColor" d="M90 0a90 90 0 1 0 90 90A90.09 90.09 0 0 0 90 0Zm39.2 133.4-44.6-57.9v57.9H70.8V46.6h13.8l44.6 57.9V46.6h13.8v86.8h-13.8Z" />
    </svg>
  ),
  'TypeScript': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#3178C6">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm8.19 12.246h2.463v8.082h-2.463v-8.082zm-4.326 0h2.463v8.082H4.989v-8.082zm8.887 0h5.637v2.012h-3.174v6.07H13.876v-8.082z" />
    </svg>
  ),
  'Tailwind CSS': (
    <svg className="w-6 h-6 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  'Vue.js': (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path fill="#42B883" d="M2 3h3.5L12 14.2 18.5 3H22L12 21 2 3z" />
      <path fill="#35495E" d="M6.5 3h3.2L12 7.1 14.3 3h3.2L12 12.6 6.5 3z" />
    </svg>
  ),
  'Angular': (
    <svg className="w-6 h-6 text-[#DD0031]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5 2.1 6l1.5 12.6L12 22.5l8.4-3.9 1.5-12.6L12 2.5zm0 3.3 5.4 12h-2.1l-1.1-2.8H9.8l-1.1 2.8H6.6L12 5.8zm1.5 7.4L12 9.5l-1.5 3.7h3z" />
    </svg>
  ),

  // Backend
  'Node.js': (
    <svg className="w-6 h-6 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.25a1.5 1.5 0 0 0-.75.2l-8.25 4.76a1.5 1.5 0 0 0-.75 1.3v9.52a1.5 1.5 0 0 0 .75 1.3l8.25 4.76a1.5 1.5 0 0 0 1.5 0l8.25-4.76a1.5 1.5 0 0 0 .75-1.3V8.51a1.5 1.5 0 0 0-.75-1.3L12.75 2.45a1.5 1.5 0 0 0-.75-.2z" />
    </svg>
  ),
  'Python': (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path fill="#3776AB" d="M11.9 1.2c-4.8 0-4.5 2.1-4.5 2.1l.01 2.2h4.6v.7H5.2S2 5.8 2 10.7s2.8 4.7 2.8 4.7h1.7v-2.3c0-2.6 2.3-2.5 2.3-2.5h3.9c2.3 0 2.2-2.1 2.2-2.1V4.1c.1-2.9-3-2.9-3-2.9zm-2.4 1.5a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" />
      <path fill="#FFD43B" d="M12.1 22.8c4.8 0 4.5-2.1 4.5-2.1l-.01-2.2H12v-.7h6.8s3.2.4 3.2-4.5-2.8-4.7-2.8-4.7h-1.7v2.3c0 2.6-2.3 2.5-2.3 2.5h-3.9c-2.3 0-2.2 2.1-2.2 2.1v4.4c0 2.9 3 2.9 3 2.9zm2.4-1.5a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" />
    </svg>
  ),
  'FastAPI': (
    <svg className="w-6 h-6 text-[#009688]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.75 4.5l5.25 7.5h-4.5v7.5L6.75 12h4.5V4.5z" />
    </svg>
  ),
  'Laravel': (
    <svg className="w-6 h-6 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
      <path d="m20.5 6.3-8.2-4.7a.6.6 0 0 0-.6 0L3.5 6.3a.6.6 0 0 0-.3.5v9.4c0 .2.1.4.3.5l8.2 4.7c.2.1.4.1.6 0l8.2-4.7c.2-.1.3-.3.3-.5V6.8c0-.2-.1-.4-.3-.5zm-8.5-3.3 7 4-2.8 1.6-7-4 2.8-1.6zm-7.6 5.1 7 4v8l-7-4V8.1zm8.8 12v-8l2.9-1.7v3.2c0 .3.2.6.5.6.3 0 .5-.3.5-.6v-3.8l3.1-1.8v8.1l-7 4z" />
    </svg>
  ),
  'Spring Boot': (
    <svg className="w-6 h-6 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.9 10.6c-.6-4.5-4.2-8.1-8.7-8.7-5.9-.8-11 3.5-11.2 9.4-.2 5.1 3.6 9.4 8.7 10.3 6.1 1.1 11.4-3.3 11.9-9.3.1-.6-.2-1.2-.7-1.7zm-9.9 8.2c-3.8 0-6.8-3.1-6.8-6.8 0-3.8 3.1-6.8 6.8-6.8 3.7 0 6.8 3 6.8 6.8 0 3.7-3.1 6.8-6.8 6.8z" />
    </svg>
  ),
  'GraphQL': (
    <svg className="w-6 h-6 text-[#E10098]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8.66 5a2 2 0 1 0 1.73 3 2 2 0 0 0-1.73-3zm-17.32 0a2 2 0 1 0-1.73 3 2 2 0 0 0 1.73-3zm17.32 10a2 2 0 1 0-1.73 3 2 2 0 0 0 1.73-3zm-17.32 0a2 2 0 1 0 1.73 3 2 2 0 0 0-1.73-3zM12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    </svg>
  ),

  // Mobile
  'Flutter': (
    <svg className="w-6 h-6 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.314 0 2.3 12 6.557 16.257 22.828 0h-8.514zm-.028 10.457L7.757 16.985 14.286 23.514H22.8L16.271 16.985l6.515-6.528h-8.486z" />
    </svg>
  ),
  'React Native': (
    <svg className="w-6 h-6 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  'Dart': (
    <svg className="w-6 h-6 text-[#0175C2]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.1 3.2 0 19.9l4.5 4.1h15.4l4.1-4.1V7.3L16.7 0H7.3L4.1 3.2zm15.4 16.7H6.2L3.1 18 6.4 5.3h8.5l4.6 4.6v10z" />
    </svg>
  ),
  'Expo': (
    <svg className="w-6 h-6 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 0 12 21.818H0L12 0zm0 6.545L4.545 19.636h14.91L12 6.545z" />
    </svg>
  ),
  'Swift': (
    <svg className="w-6 h-6 text-[#F05138]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.9 14.8c-.8 2.2-2.3 4.2-4.3 5.4-3.5 2.2-8 1.9-11.3-.7 1.8.2 3.8-.2 5.3-1.2-2.1-.2-3.8-1.5-4.5-3.4 1 .2 2.1 0 2.9-.5-2.2-.6-3.7-2.6-3.6-4.9.8.5 1.8.7 2.7.7-2-.1-3.6-2.9-2.3-5.2 2.5 3 6.1 4.8 10.1 5-.4-1.9.2-3.8 1.7-5 2.1-1.6 5.1-1.3 6.8.8 1-.2 2.1-.6 3-1.2-.3 1.1-1.1 2-2.1 2.6 1-.1 1.9-.4 2.8-.8-.7 1.1-1.6 2-2.6 2.8-.1 1.9-.7 3.8-1.7 5.6z" />
    </svg>
  ),
  'Kotlin': (
    <svg className="w-6 h-6 text-[#7F52FF]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 24H0V0h24L12 12z" />
    </svg>
  ),

  // Database
  'PostgreSQL': (
    <svg className="w-6 h-6 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a9 9 0 0 0-9 9c0 4.1 2.7 7.5 6.5 8.6v-2.3c-2.6-.9-4.5-3.3-4.5-6.3a7 7 0 1 1 14 0c0 3-1.9 5.4-4.5 6.3v2.3c3.8-1.1 6.5-4.5 6.5-8.6a9 9 0 0 0-9-9z" />
    </svg>
  ),
  'MongoDB': (
    <svg className="w-6 h-6 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C11.5 0 11 .5 11 1c0 6.6-4 8.7-4 14.5 0 4.1 3.1 7.5 7 7.5s7-3.4 7-7.5C21 9.7 17 7.6 17 1c0-.5-.5-1-1-1h-4zm0 2.2c2.8 4.2 5 7.1 5 13.3 0 2.8-2.2 5-5 5s-5-2.2-5-5c0-6.2 2.2-9.1 5-13.3z" />
    </svg>
  ),
  'MySQL': (
    <svg className="w-6 h-6 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2V9.5z" />
    </svg>
  ),
  'Firebase': (
    <svg className="w-6 h-6 text-[#FFCA28]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.89 15.672 6.255.992a.558.558 0 0 1 1.05-.125l2.457 4.674zm15.422.37-2.071-12.87a.557.557 0 0 0-.965-.295L3.312 16.042l7.747 4.364a1.867 1.867 0 0 0 1.83 0z" />
    </svg>
  ),
  'Redis': (
    <svg className="w-6 h-6 text-[#DC382D]" viewBox="0 0 24 24" fill="currentColor">
      <path d="m21.6 8.5-9.1-4.8c-.3-.2-.7-.2-1 0L2.4 8.5c-.4.2-.6.6-.6 1v6.9c0 .4.2.8.6 1l9.1 4.8c.3.2.7.2 1 0l9.1-4.8c.4-.2.6-.6.6-1V9.5c0-.4-.2-.8-.6-1z" />
    </svg>
  ),
  'Supabase': (
    <svg className="w-6 h-6 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.4 22.8c-.8.9-2.2.3-2.2-.9V13H3c-.9 0-1.4-1.1-.8-1.7L13.7.8c.8-.9 2.2-.3 2.2.9V11H24c.9 0 1.4 1.1.8 1.7L13.4 22.8z" />
    </svg>
  ),

  // Cloud
  'AWS': (
    <svg className="w-6 h-6 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.7 14.5c-2.4 1.8-5.9 2.7-8.9 2.7-4.2 0-8-1.5-10.8-4-.2-.2-.2-.6.1-.8.3-.3.7-.2.9.1 2.6 2.3 6.1 3.7 9.8 3.7 2.7 0 5.8-.8 8-2.3.4-.3.9.1.9.3zm2.5-1c-.3-.4-1.9-.6-2.8-.5-.3 0-.3-.3-.1-.5 1.4-.9 3.6-.6 3.9-.2.3.4-.1 2.5-1.5 3.5-.2.2-.5 0-.4-.2.4-.7.9-1.7.9-2.1z" />
    </svg>
  ),
  'Docker': (
    <svg className="w-6 h-6 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.9 6.2h2.2v2.1h-2.2V6.2zm-2.8 0h2.2v2.1h-2.2V6.2zm-2.8 0h2.2v2.1H8.3V6.2zm8.4 2.8h2.2v2.1h-2.2V9zm-2.8 0h2.2v2.1h-2.2V9zm-2.8 0h2.2v2.1h-2.2V9zm-2.8 0h2.2v2.1H8.3V9zm-2.8 0H7.7v2.1H5.5V9zm18.3 2.5c-.3-.2-1.3-.4-2.4.2-.3-.8-.9-1.5-1.6-1.9l-.6-.3-.4.5c-.5.8-.7 1.7-.6 2.7 0 .2-.4.4-.6.4H1.3c-.4 0-.7.3-.7.7 0 3.3 2.1 6.2 5.5 7.4 5.9 2 12.8.2 16.5-4.5 1-.8 1.9-2.7 2.1-3.6 0-.2-.2-.4-.4-.5z" />
    </svg>
  ),
  'Kubernetes': (
    <svg className="w-6 h-6 text-[#326CE5]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2 3.3 7.2v10L12 22.2l8.7-5v-10L12 2.2zm0 2.3 6.7 3.9v7.7L12 20 5.3 16.1V8.4L12 4.5z" />
    </svg>
  ),
  'CI/CD': (
    <svg className="w-6 h-6 text-[#2088FF]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  ),
  'Vercel': (
    <svg className="w-6 h-6 fill-current text-black dark:text-white" viewBox="0 0 24 24">
      <path d="M12 1 24 22H0L12 1Z" />
    </svg>
  ),
  'DigitalOcean': (
    <svg className="w-6 h-6 text-[#0080FF]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),

  // AI
  'OpenAI API': (
    <svg className="w-6 h-6 fill-current text-black dark:text-white" viewBox="0 0 24 24">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.22-9.61a4.47 4.47 0 0 1 2.341-1.974v5.684a.792.792 0 0 0 .392.68l5.827 3.369-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.38 8.694zm15.808 3.39-5.844-3.373 2.02-1.167a.076.076 0 0 1 .071 0l4.83 2.79a4.5 4.5 0 0 1-.684 8.12V12.76a.796.796 0 0 0-.393-.676zm2.016-3.79-4.783-2.763a.771.771 0 0 0-.78 0L8.8 9.299V6.967a.08.08 0 0 1 .033-.062l4.84-2.797a4.5 4.5 0 0 1 6.677 4.664v.021zM9.508 13.918l2.492-1.439 2.492 1.439v2.878l-2.492 1.439-2.492-1.439z" />
    </svg>
  ),
  'LangChain': (
    <svg className="w-6 h-6 text-[#1C3C3C] dark:text-[#2BD576]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a5 5 0 0 0-5 5c0 1.9 1 3.5 2.5 4.3v1.4C7.5 13.5 6 15.5 6 18a6 6 0 0 0 12 0c0-2.5-1.5-4.5-3.5-5.3v-1.4c1.5-.8 2.5-2.4 2.5-4.3a5 5 0 0 0-5-5zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3 8a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4z" />
    </svg>
  ),
  'Gemini Flash': (
    <svg className="w-6 h-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z" />
    </svg>
  ),
  'Hugging Face': (
    <svg className="w-6 h-6 text-[#FFD21E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3.5 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8.5 9zm7 0a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 15.5 9zm-3.5 8.5c-2.5 0-4.5-1.5-5-3.5h10c-.5 2-2.5 3.5-5 3.5z" />
    </svg>
  ),
  'n8n': (
    <svg className="w-6 h-6 text-[#EA4B71]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.8 4.8a4.8 4.8 0 0 0-4.3 2.7H9.5A4.8 4.8 0 0 0 1 9.6a4.8 4.8 0 0 0 8.5 2.1h5a4.8 4.8 0 0 0 8.5-2.1 4.8 4.8 0 0 0-4.2-4.8z" />
    </svg>
  ),
  'Zapier': (
    <svg className="w-6 h-6 text-[#FF4A00]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 0h-3v8.5H2v3h8.5V20h3v-8.5H22v-3h-8.5z" />
    </svg>
  ),
};

const categoryConfig: Record<string, { icon: React.ReactNode; bg: string; border: string }> = {
  Frontend: {
    icon: <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    bg: 'bg-indigo-50/80 dark:bg-indigo-950/40',
    border: 'border-indigo-100 dark:border-indigo-900/60',
  },
  Backend: {
    icon: <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    bg: 'bg-emerald-50/80 dark:bg-emerald-950/40',
    border: 'border-emerald-100 dark:border-emerald-900/60',
  },
  Mobile: {
    icon: <Cpu className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    bg: 'bg-sky-50/80 dark:bg-sky-950/40',
    border: 'border-sky-100 dark:border-sky-900/60',
  },
  Database: {
    icon: <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    bg: 'bg-purple-50/80 dark:bg-purple-950/40',
    border: 'border-purple-100 dark:border-purple-900/60',
  },
  Cloud: {
    icon: <Cloud className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    bg: 'bg-amber-50/80 dark:bg-amber-950/40',
    border: 'border-amber-100 dark:border-amber-900/60',
  },
  AI: {
    icon: <Bot className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    bg: 'bg-rose-50/80 dark:bg-rose-950/40',
    border: 'border-rose-100 dark:border-rose-900/60',
  },
};

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<string>('Frontend');
  const current = categoryConfig[activeTab] || categoryConfig['Frontend'];

  return (
    <section id="stack" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/80">
          Our Architecture Toolkit
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
          Technologies We Master
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Production-proven languages, resilient database backends, and AI frameworks built for hyperscale speed.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(TECH_STACK).map((category) => {
          const isSelected = activeTab === category;
          const conf = categoryConfig[category];
          return (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                isSelected
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-indigo-500/25 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400'
              }`}
            >
              {conf.icon}
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {TECH_STACK[activeTab as keyof typeof TECH_STACK]?.map((tech, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center space-y-3 group"
          >
            <div
              className={`w-12 h-12 rounded-xl ${current.bg} border ${current.border} flex items-center justify-center group-hover:scale-110 transition-transform`}
            >
              {techIcons[tech] || (
                <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300">
                  {tech.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}