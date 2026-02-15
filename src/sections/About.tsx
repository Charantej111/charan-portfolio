import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const stats = [
    { value: '10+', label: 'Projects Delivered', color: '#FF6B6B' },
    { value: '1+', label: 'Year Experience', color: '#4ECDC4' },
    { value: '10+', label: 'Happy Clients', color: '#FFE66D' },
    { value: '100%', label: 'Dedication', color: '#FF6B6B' },
  ];

  const highlights = [
    {
      icon: Sparkles,
      title: 'AI + Design Fusion',
      description:
        'Combining my AI/ML background with design thinking to create intelligent, data-driven user experiences.',
      color: '#FF6B6B',
    },
    {
      icon: Users,
      title: 'User-Centered Approach',
      description:
        'Every design decision starts with understanding the user—their needs, pain points, and goals.',
      color: '#4ECDC4',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description:
        'I thrive on turning complex challenges into simple, elegant solutions that just work.',
      color: '#FFE66D',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#FF6B6B]/5 blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-[#4ECDC4]/5 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 lg:mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]" />
              <span className="font-mono text-sm text-white/60 uppercase tracking-widest">
                About Me
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
              Designing experiences that{' '}
              <span className="gradient-text">matter</span>
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Left - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="font-body text-lg lg:text-xl text-white/80 leading-relaxed">
                I&apos;m <span className="text-[#FF6B6B] font-medium">Charan Teja Neelam</span>,
                a UI/UX designer from Kakinada, India, with a unique edge—my background in{' '}
                <span className="text-[#4ECDC4] font-medium">
                  Artificial Intelligence & Machine Learning
                </span>
                .
              </p>
              <p className="font-body text-base lg:text-lg text-white/60 leading-relaxed">
                This combination allows me to approach design problems with both creative
                intuition and analytical rigor. I don&apos;t just make things look good; I make
                them work beautifully for the people who use them.
              </p>
              <p className="font-body text-base lg:text-lg text-white/60 leading-relaxed">
                From conducting user research to shipping high-fidelity prototypes, I love the
                entire design process. My goal is simple: create digital experiences that feel
                so intuitive, users never have to think twice.
              </p>

              {/* Quick Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['Figma', 'User Research', 'Prototyping', 'Design Systems', 'HTML/CSS'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body text-sm text-white/70 hover:border-[#FF6B6B]/50 hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Right - Philosophy Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                  className="group p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  data-cursor-hover
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon size={24} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-[#FF6B6B] transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="relative p-6 rounded-2xl glass overflow-hidden group"
                data-cursor-hover
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}, transparent)`,
                  }}
                />
                <div
                  className="font-display text-4xl lg:text-5xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
