import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Figma,
  Palette,
  Layers,
  Smartphone,
  Monitor,
  Search,
  Users,
  Route,
  Network,
  PenTool,
  Code2,
  FileCode,
  Braces,
  Image,
  Paintbrush,
  Layout,
  Cpu,
  Globe,
  Server
} from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const skillRows = [
    // Row 1: Design & Creative (Scrolls Left)
    {
      direction: 'left',
      speed: 20,
      skills: [
        { name: 'Figma', icon: Figma, color: '#F24E1E' },
        { name: 'Photoshop', icon: Image, color: '#31A8FF' },
        { name: 'Illustrator', icon: PenTool, color: '#FF9A00' },
        { name: 'Canva', icon: Paintbrush, color: '#00C4CC' },
        { name: 'UI Design', icon: Layout, color: '#4ECDC4' },
        { name: 'Prototyping', icon: Layers, color: '#FFE66D' },
        { name: 'Wireframing', icon: PenTool, color: '#FF6B6B' },
        { name: 'User Research', icon: Search, color: '#A78BFA' },
      ],
    },
    // Row 2: Development & Tech (Scrolls Right)
    {
      direction: 'right',
      speed: 25,
      skills: [
        { name: 'React', icon: Code2, color: '#61DAFB' },
        { name: 'TypeScript', icon: FileCode, color: '#3178C6' },
        { name: 'HTML5', icon: Globe, color: '#E34F26' },
        { name: 'CSS3', icon: Palette, color: '#1572B6' },
        { name: 'JavaScript', icon: Braces, color: '#F7DF1E' },
        { name: 'Tailwind', icon: Layout, color: '#38B2AC' },
        { name: 'Git', icon: Network, color: '#F05032' },
        { name: 'Node.js', icon: Server, color: '#339933' },
      ],
    },
    // Row 3: Strategy & Soft Skills (Scrolls Left)
    {
      direction: 'left',
      speed: 30,
      skills: [
        { name: 'Design Systems', icon: Palette, color: '#FF6B6B' },
        { name: 'User Flow', icon: Route, color: '#4ECDC4' },
        { name: 'Collaboration', icon: Users, color: '#FFE66D' },
        { name: 'Responsive', icon: Smartphone, color: '#3B82F6' },
        { name: 'Accessibility', icon: Users, color: '#10B981' },
        { name: 'Problem Solving', icon: Cpu, color: '#F59E0B' },
        { name: 'Information Arch', icon: Network, color: '#EC4899' },
        { name: 'Web Design', icon: Monitor, color: '#6366F1' },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#0A0A0F]"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-[#FF6B6B]/10 via-[#4ECDC4]/10 to-[#FFE66D]/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse" />
            <span className="text-xs font-mono text-white/60 uppercase tracking-widest">Tech Stack</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
            My Creative <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
            A curated collection of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="relative w-full space-y-12">
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0F] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0F] to-transparent z-20 pointer-events-none" />

        {skillRows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative flex overflow-hidden">
            <motion.div
              className="flex gap-8 px-4"
              animate={{
                x: row.direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
              }}
              transition={{
                ease: "linear",
                duration: row.speed,
                repeat: Infinity
              }}
            >
              {/* Double the list to create seamless loop */}
              {[...row.skills, ...row.skills].map((skill, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="group relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 min-w-[200px] cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10"
                    style={{ color: skill.color }}
                  >
                    <skill.icon size={20} />
                  </div>
                  <span className="font-display font-medium text-white/60 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
