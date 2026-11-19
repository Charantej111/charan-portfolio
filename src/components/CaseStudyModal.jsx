import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const CASE_STUDIES = {
  2: {
    id: 2,
    tag: 'Project 2',
    title: 'Wayfinder Logistics Command',
    subtitle: 'A real-time operations center that gives logistics teams one calm view of routes, risks, capacity, and exceptions.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80',
    meta: [
      { label: 'Role', value: 'Product manager' },
      { label: 'Timeline', value: '10 weeks' },
      { label: 'Team', value: '3 Engineers, 1 PM, 1 Data Scientist, 1 Product manager' },
      { label: 'Platform', value: 'Web' },
    ],
    sections: [
      {
        title: 'Overview',
        content:
          'Wayfinder is a logistics command center for teams coordinating regional freight across carriers, warehouses, and customer delivery windows. The platform transforms live location data, route plans, capacity, weather, and service commitments into one operational picture. We redesigned the core experience to help dispatchers detect emerging risk earlier, coordinate a response, and communicate accurate updates without rebuilding the story across several tools.',
      },
      {
        title: 'The challenge',
        content:
          'The original dashboard was optimized for tracking individual shipments, but operators were responsible for networks. A delayed vehicle could affect a dock schedule, a connecting route, and multiple customer promises, yet those relationships were difficult to see. Alerts arrived as isolated events with equal visual weight, encouraging reactive work. The product needed to reveal consequences, support rapid reprioritization, and remain usable on large wall displays as well as standard operations laptops.',
      },
      {
        title: 'Research and insight',
        content:
          'We shadowed dispatchers during routine shifts and disruption events, documenting the information they gathered before making a call. Experienced operators constantly built a mental model of dependencies and available recovery options. The design opportunity was not simply to add more alerts. It was to externalize that model by connecting every exception to affected loads, time sensitivity, service impact, and realistic actions, while preserving an audit trail for teams joining later.',
      },
      {
        title: 'Product strategy',
        content:
          'Wayfinder was reframed around network health, active exceptions, and recovery plans. The overview ranks issues by projected operational impact instead of event severity alone. An exception workspace brings evidence, dependencies, communication, and recommended actions together. Scenario comparison lets teams test rerouting, carrier reassignment, or schedule changes before committing. This structure creates a consistent path from awareness to analysis, decision, execution, and follow-up.',
      },
      {
        title: 'Experience architecture',
        content:
          'We organized the system into three complementary layers: a high-density triage board for real-time monitoring, an inspection canvas for deep diagnostic dives, and an automated hand-off log for cross-shift alignment. Key interactions were optimized for rapid keyboard navigation, allowing dispatchers to process high-volume exceptions in seconds.',
      },
    ],
  },
  1: {
    id: 1,
    tag: 'Project 1',
    title: 'SignalFlow AI Workspace',
    subtitle: 'A focused AI operations platform that turns complex automations into workflows teams can understand, supervise, and trust.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1600&q=80',
    meta: [
      { label: 'Role', value: 'Lead Product manager' },
      { label: 'Timeline', value: '14 weeks' },
      { label: 'Team', value: '4 Engineers, 1 AI Researcher, 1 PM' },
      { label: 'Platform', value: 'Desktop & Web' },
    ],
    sections: [
      {
        title: 'Overview',
        content:
          'SignalFlow provides automated workflow observability and human-in-the-loop controls for generative AI pipelines. By visualizing multi-agent executions in real-time, engineering teams can debug hallucinations, latency bottlenecks, and governance constraints seamlessly.',
      },
      {
        title: 'The challenge',
        content:
          'Complex AI agent architectures operate as black boxes. When multi-step chains fail, operators previously had to scour raw terminal logs without visual context of which agent stalled or which tool call errored.',
      },
      {
        title: 'Product strategy & outcome',
        content:
          'We constructed an interactive node-graph visualizer with step-level rollback and fine-tuned confidence thresholds. Adoption grew by 240% across internal enterprise teams within 60 days.',
      },
    ],
  },
  3: {
    id: 3,
    tag: 'Project 3',
    title: 'Pulse Clinical Intelligence',
    subtitle: 'A clinical decision workspace that helps care teams prioritize patient risk, unblock care pathways, and track critical outcomes.',
    image: 'https://images.unsplash.com/photo-1579412690850-bd41cd0af397?auto=format&fit=crop&w=1600&q=80',
    meta: [
      { label: 'Role', value: 'Product manager & UX Lead' },
      { label: 'Timeline', value: '12 weeks' },
      { label: 'Team', value: '3 Clinicians, 2 Engineers, 1 PM' },
      { label: 'Platform', value: 'Clinical Tablet & Web' },
    ],
    sections: [
      {
        title: 'Overview',
        content:
          'Pulse transforms fragmented EHR metrics into actionable care-pathway visualizations. Designed to alleviate clinician cognitive fatigue in high-throughput acute care environments.',
      },
      {
        title: 'Clinical workflow insight',
        content:
          'By shadowing attending physicians during 8-minute consult transitions, we streamlined patient status verification from 14 disparate screens down to a single priority-ranked dashboard.',
      },
    ],
  },
  4: {
    id: 4,
    tag: 'Project 4',
    title: 'Morrow Mobile Finance',
    subtitle: 'A personal finance app that makes spending, saving, and planning feel understandable without flattening the details.',
    image: 'https://framerusercontent.com/images/DED09lWyYXoUEEUQjpK6dgT1Pl0.png?width=2312&height=1532',
    meta: [
      { label: 'Role', value: 'Product manager' },
      { label: 'Timeline', value: '8 weeks' },
      { label: 'Team', value: '2 Engineers, 1 PM, 1 Researcher, 1 Product manager' },
      { label: 'Platform', value: 'iOS & Android' },
    ],
    sections: [
      {
        title: 'Overview',
        content:
          'Morrow is a mobile finance companion designed to help people understand today, prepare for the month ahead, and make steady progress toward personal goals. It connects everyday spending, bills, savings, and shared plans without turning the home screen into a wall of charts. The project included product strategy, customer research, experience design, interaction prototypes, visual design, and a mobile component system for iOS and Android.',
      },
      {
        title: 'The challenge',
        content:
          'Most finance apps showed accurate information but left users to interpret what it meant. Account balances, category charts, upcoming bills, and goals appeared as separate features even though people experienced them as one question: what can I safely do next. The product also needed to support very different financial situations without using judgmental language, false celebration, or simplistic scores that could make an already stressful moment feel worse.',
      },
      {
        title: 'Research and insight',
        content:
          'Diary studies and interviews revealed that financial confidence depended more on predictability than perfect budgeting. Participants wanted early notice of a tight week, a clear explanation of why available money changed, and small actions that would improve the outlook. They also distinguished between committed money, flexible spending, and protected savings. That mental model became more useful than conventional categories and shaped both the information architecture and the language system.',
      },
      {
        title: 'Product strategy',
        content:
          'We defined the core promise as a clear view of what is safe now and what changes next. Morrow calculates a flexible amount after upcoming commitments and chosen savings protections, then explains every adjustment in plain language. Monthly planning is presented as a living forecast rather than a rigid budget. Goals connect to real cash flow, and recommendations are framed as optional scenarios so users retain control over tradeoffs.',
      },
      {
        title: 'Design execution',
        content:
          'The mobile interface uses generous spacing, strong typographic hierarchy, and bright color fields to make financial information feel approachable while remaining precise. Motion explains transitions between current balance, forecast, and goals instead of serving as decoration. Charts always include direct values and readable summaries.',
      },
    ],
  },
};

export default function CaseStudyModal({ projectId = 2, onClose }) {
  const study = CASE_STUDIES[projectId] || CASE_STUDIES[2];

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
