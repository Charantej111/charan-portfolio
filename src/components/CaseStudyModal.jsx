import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const CASE_STUDIES = {
  1: {
    id: 1,
    tag: 'Marketplace · Consumer · Product Operations · 0→1',
    title: 'Delizoo',
    subtitle: 'Building a food delivery marketplace where every side of the marketplace has to work.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1600&q=80',
    meta: [
      { label: 'Role', value: 'Co-Founder · Product lead & Operations' },
      { label: 'Timeline', value: '2026 - Present' },
      { label: 'Category', value: 'Marketplace · Consumer · Operations' },
      { label: 'Stage', value: '0→1 Live Product' },
    ],
    sections: [
      {
        title: 'Overview',
        content:
          'Delizoo is a hyperlocal food delivery marketplace built around fairer economics for customers and restaurant partners. The product orchestrates real-time experiences across customer ordering, restaurant partner order management, rider fulfillment, and dispatch operations.',
      },
      {
        title: 'The challenge',
        content:
          'A marketplace is not one product—it is several interdependent systems that have to operate in lockstep. High platform commissions, poor operational visibility, and rider routing inefficiencies squeeze restaurant margins while creating unpredictable customer wait times. The core challenge was aligning customer value, merchant unit economics, and operational efficiency into a sustainable 0→1 marketplace model.',
      },
      {
        title: 'Product discovery & operations strategy',
        content:
          'We conducted field research with local restaurant partners, dispatch operators, and delivery riders. The insights revealed that transparent pricing and predictable turnaround times mattered far more to restaurant retention than discount promotions. We designed operational workflows that reduced order prep bottlenecks and balanced demand during peak meal windows.',
      },
      {
        title: 'Execution & impact',
        content:
          'Shipped comprehensive apps and operational tools covering customer ordering, restaurant vendor portal, and rider tracking. Surpassed 2,000+ app downloads while establishing reliable unit economics and partner trust across the local ecosystem.',
      },
    ],
  },
  2: {
    id: 2,
    tag: 'AI Product · Voice UX · Adaptive Systems',
    title: 'InterviewPilot',
    subtitle: 'Building an AI interviewer that understands the candidate, role, and company.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80',
    meta: [
      { label: 'Role', value: 'Product Lead' },
      { label: 'Timeline', value: '2026' },
      { label: 'Domain', value: 'AI Product · Voice UX · LLMs' },
      { label: 'Focus', value: 'Adaptive Evaluation Systems' },
    ],
    sections: [
      {
        title: 'Overview',
        content:
          'InterviewPilot is an AI interview platform that creates personalized interview experiences around the candidate, role, and company. It combines voice interaction, adaptive questioning, and structured evaluation rubrics to assess technical and behavioral competence authentically.',
      },
      {
        title: 'The challenge',
        content:
          'Standard AI mock interviews are generic, rigid, and feel robotic. They ask boilerplate questions regardless of candidate responses and deliver superficial feedback. The hard problem in AI interviewing is not the voice generation—it is making AI evaluation genuinely useful, contextual, and responsive to candidate nuances in real-time.',
      },
      {
        title: 'AI product thinking & voice UX',
        content:
          'Engineered an adaptive prompt system and evaluation pipeline that analyzes job descriptions, company cultural anchors, and candidate resume context. The voice UX was architected to allow natural conversational pauses, follow-up probe questions, and supportive candidate pacing.',
      },
      {
        title: 'Evaluation & outcomes',
        content:
          'Built multidimensional feedback scorecards covering technical depth, communication clarity, and problem-solving framework. Candidates receive actionable development feedback rather than arbitrary score badges.',
      },
    ],
  },
  3: {
    id: 3,
    tag: 'B2B · EdTech · Product Design',
    title: 'CodeTracker',
    subtitle: 'Turning fragmented coding activity into a university-wide product.',
    image: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=1600&q=80',
    meta: [
      { label: 'Role', value: 'Product Design & Strategy' },
      { label: 'Timeline', value: '2025' },
      { label: 'Users', value: '8,000+ Students' },
      { label: 'Type', value: 'B2B · EdTech Platform' },
    ],
    sections: [
      {
        title: 'Overview',
        content:
          'CodeTracker is a university platform that aggregates competitive programming activity from multiple platforms (LeetCode, CodeChef, HackerRank, and GitHub) into a single unified tracking and learning system for students, faculty, and placement teams.',
      },
      {
        title: 'The challenge',
        content:
          'Student coding practice was scattered across diverse third-party platforms with zero unified tracking. University mentors and placement coordinators had no visibility into student problem-solving consistency, leading to inaccurate assessment of placement readiness and missed intervention opportunities.',
      },
      {
        title: 'Product architecture & validation',
        content:
          'Collaborated closely with faculty, department heads, and students to define requirements for automated scraper integrations, department leaderboards, and personalized skill tracking dashboards. Designed an intuitive verification workflow that eliminated fraudulent profile submissions.',
      },
      {
        title: 'Scale & adoption',
        content:
          'Scaled to 8,000+ active student profiles across the university, establishing a measurable benchmark for student coding progress and institutional placement preparation.',
      },
    ],
  },
  4: {
    id: 4,
    tag: '0→1 · Productivity · AI',
    title: 'CareerOS',
    subtitle: 'Turning a fragmented career journey into one connected product.',
    image: 'https://framerusercontent.com/images/DED09lWyYXoUEEUQjpK6dgT1Pl0.png?width=2312&height=1532',
    meta: [
      { label: 'Role', value: '0→1 Product Manager' },
      { label: 'Timeline', value: '2026' },
      { label: 'Category', value: 'Productivity · AI Tools' },
      { label: 'Scope', value: 'Discovery, UX, Execution' },
    ],
    sections: [
      {
        title: 'Overview',
        content:
          'CareerOS is a career operating system connecting planning, learning, projects, skills, and job applications in one place. It replaces disconnected spreadsheets, bookmarks, and notes with a coherent, guided workspace for ambitious professionals.',
      },
      {
        title: 'The challenge',
        content:
          'The modern career journey is deeply fragmented. Aspiring professionals use one tool for roadmap planning, another for skill tutorials, a third for project management, and messy folders for resume tracking. This disconnect causes cognitive overload and prevents individuals from seeing the direct line between daily skill practice and career outcomes.',
      },
      {
        title: 'Product strategy & systems design',
        content:
          'Structured the system around an integrated career graph: connecting targeted career roles to required competencies, proof-of-work project milestones, and live application pipeline stages. Layered AI assistance to provide contextual feedback on resume tailoring and milestone achievements.',
      },
      {
        title: 'Outcome & future roadmap',
        content:
          'Engineered an end-to-end prototype and user journey validated with early-career product managers, engineers, and designers, establishing a unified workflow from 0 to career milestone.',
      },
    ],
  },
};

export default function CaseStudyModal({ projectId = 1, onClose }) {
  const study = CASE_STUDIES[projectId] || CASE_STUDIES[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="relative w-full min-h-screen bg-[#FFFCF4] text-[#111111] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 z-30"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <button
            onClick={onClose}
            type="button"
            className="group inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-[2px] border border-neutral-300 hover:border-black bg-white text-[13px] sm:text-[14px] font-medium text-neutral-800 transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to projects</span>
          </button>

          <span className="px-3 py-1 rounded-[2px] border border-[#8427DE] bg-[#8427DE]/5 text-[#8427DE] text-[12px] font-mono font-medium">
            {study.tag}
          </span>
        </div>

        {/* Header Title & Subtitle */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-[32px] sm:text-[46px] md:text-[54px] font-bold tracking-[-0.03em] text-[#111111] leading-[1.08]">
            {study.title}
          </h1>
          <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[20px] text-neutral-600 leading-[1.5] max-w-3xl">
            {study.subtitle}
          </p>
        </header>

        {/* Hero Visual Mockup */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-[2px] border border-[#8427DE] overflow-hidden bg-neutral-900 shadow-[0_24px_60px_-15px_rgba(132,39,222,0.12)] mb-12 sm:mb-16">
          <div className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-white border border-[#8427DE] z-10 pointer-events-none" />
          <div className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-white border border-[#8427DE] z-10 pointer-events-none" />
          <div className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-white border border-[#8427DE] z-10 pointer-events-none" />
          <div className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-white border border-[#8427DE] z-10 pointer-events-none" />

          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Meta Information Grid (Role, Timeline, Team, Platform) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8 border-y border-neutral-200/90 mb-12 sm:mb-16">
          {study.meta.map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[11px] sm:text-[12px] font-mono uppercase tracking-wider text-neutral-600 font-semibold">
                {item.label}
              </span>
              <span className="mt-1 text-[13px] sm:text-[15px] font-medium text-[#111111] leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Case Study Content Sections */}
        <div className="space-y-10 sm:space-y-14">
          {study.sections.map((section, idx) => (
            <section key={idx} className="flex flex-col">
              <h2 className="text-[22px] sm:text-[28px] font-bold text-[#111111] tracking-tight">
                {section.title}
              </h2>
              <p className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] md:text-[17px] text-neutral-700 leading-[1.7] whitespace-pre-line font-normal">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Footer Back Action */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-200 flex justify-between items-center">
          <button
            onClick={onClose}
            type="button"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] border border-neutral-800 bg-neutral-900 text-white hover:bg-black text-[13px] sm:text-[14px] font-medium transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to Portfolio</span>
          </button>
        </div>

      </div>
    </motion.article>
  );
}
