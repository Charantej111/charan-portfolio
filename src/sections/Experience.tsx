import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

interface ExperienceData {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
  color: string;
}

const ExperienceCard = ({
  data,
  index,
  progress,
  range,
  targetScale,
}: {
  data: ExperienceData;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ['start end', 'start start'],
  // });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className="relative flex flex-col w-full max-w-4xl mx-auto -mt-12"
      >
        <div
          className="relative p-8 md:p-12 rounded-3xl border border-foreground/10 backdrop-blur-md overflow-hidden"
          style={{
            backgroundColor: 'hsl(var(--card))', // Solid background for stacking occlusion
            transformOrigin: 'top center'
          }}
        >
          {/* Glow Effect */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-[80px] pointer-events-none"
            style={{ backgroundColor: data.color }}
          />

          <div className="relative z-10 grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column: Meta */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-2">{data.company}</h3>
                <div className="flex items-center gap-2 text-foreground/50 font-mono text-sm">
                  <MapPin size={14} /> {data.location}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-foreground/40 text-sm uppercase tracking-wider font-semibold">Role</span>
                <span className="text-foreground font-medium text-lg">{data.role}</span>
                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-foreground/5 w-fit mt-1 text-foreground/60 border border-foreground/5">
                  {data.type}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-foreground/40 text-sm uppercase tracking-wider font-semibold">Period</span>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Calendar size={16} /> {data.period}
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="md:col-span-2 space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed font-light">
                {data.description}
              </p>

              <div>
                <h4 className="text-foreground/40 text-sm uppercase tracking-wider font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-3">
                  {data.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/70">
                      <ArrowUpRight size={18} className="mt-0.5 text-foreground/30 flex-shrink-0" />
                      <span className="font-body text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {data.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-xs font-mono border border-foreground/10 bg-foreground/5 text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const experiences = [
    {
      role: 'Product Designer',
      company: 'Ofzen',
      location: 'Remote',
      period: '2025 - Present',
      type: 'Full-time',
      description:
        'Leading design initiatives for product features, creating comprehensive design systems, and collaborating with cross-functional teams to deliver user-centered solutions.',
      highlights: [
        'Redesigned core product interface improving user satisfaction by 35%',
        'Built company-wide design system with 50+ reusable components',
        'Conducted user research sessions with 20+ customers',
      ],
      tech: ['Figma', 'React', 'Design Systems'],
      color: '#FF6B6B',
    },
    {
      role: 'UI/UX Design Intern',
      company: 'Labmentix',
      location: 'Remote',
      period: '2025 - 2026',
      type: 'Internship',
      description:
        'Designed responsive web interfaces, created interactive prototypes, and collaborated with product teams on feature development.',
      highlights: [
        'Designed 3 major product features from concept to launch',
        'Created high-fidelity prototypes for user testing',
        'Contributed to design system documentation',
      ],
      tech: ['Prototyping', 'Wireframing', 'UI Design'],
      color: '#4ECDC4',
    },
    {
      role: 'Product Design Intern',
      company: 'Aditya University',
      location: 'onsite',
      period: '2025',
      type: 'Internship',
      description:
        'Worked on diverse client projects spanning web and mobile, from wireframes to final deliverables.',
      highlights: [
        'Delivered designs for 5+ client projects',
        'Mastered design thinking methodologies',
        'Presented designs directly to stakeholders',
      ],
      tech: ['User Research', 'Adobe XD', 'Collaboration'],
      color: '#FFE66D',
    },
  ];

  return (
    <section ref={containerRef} id="experience" className="relative bg-background">
      {/* Intro Section - Normal Scroll */}
      <div className="h-[50vh] flex items-center justify-center sticky top-0 bg-background z-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#FF6B6B]" />
            <span className="font-mono text-sm text-foreground/50 uppercase tracking-widest">Experience</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#4ECDC4]" />
          </div>
          <h2 className="font-display text-4xl lg:text-7xl font-bold text-foreground mb-6">
            Career <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            Scroll down to explore my professional journey through the years.
          </p>
        </motion.div>
      </div>

      {/* Stacking Cards Container */}
      <div className="relative z-10 w-full px-4 lg:px-8">
        {experiences.map((exp, index) => {
          const targetScale = 1 - (experiences.length - index) * 0.05;
          const step = 1 / experiences.length;
          return (
            <ExperienceCard
              key={index}
              index={index}
              data={exp}
              progress={scrollYProgress}
              range={[index * step, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Buffer to ensure last card is viewable before next section */}
      <div className="h-[20vh]" />
    </section>
  );
};

export default Experience;
