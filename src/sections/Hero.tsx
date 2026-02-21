import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';

const Hero = ({ isLoading }: { isLoading: boolean }) => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse move effect for name and portrait
    const container = containerRef.current;
    const name = nameRef.current;
    const portrait = portraitRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      if (name) {
        gsap.to(name, {
          rotateY: x * 8,
          rotateX: -y * 8,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      if (portrait) {
        gsap.to(portrait, {
          rotateY: x * 5,
          rotateX: -y * 5,
          scale: 1.02,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      if (name) {
        gsap.to(name, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
      if (portrait) {
        gsap.to(portrait, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(10px)',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Content Container */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={!isLoading ? "visible" : "hidden"}
        className="relative z-10 w-full px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
        style={{ perspective: '1200px' }}
      >
        {/* Left Content */}
        <div style={{ transformStyle: 'preserve-3d' }}>
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="flex mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <Sparkles size={16} className="text-[#FFE66D]" />
              <span className="font-body text-sm text-foreground/80">
                Available for freelance work
              </span>
            </div>
          </motion.div>

          {/* Main Name */}
          <div className="mb-8" style={{ transformStyle: 'preserve-3d' }}>
            <motion.h1
              ref={nameRef}
              variants={itemVariants}
              className="font-display font-bold text-[12vw] lg:text-[6vw] leading-none tracking-tighter mb-2"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="gradient-text">CHARAN</span>
              <br />
              <span className="text-foreground/90">NEELAM</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-body text-lg lg:text-xl text-foreground/60 max-w-lg leading-relaxed"
            >
              Crafting digital experiences where design meets intelligence.
              Specializing in UI/UX and Front-end Development.
            </motion.p>
          </div>

          {/* Role & Location */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#4ECDC4] animate-pulse" />
              <span className="font-mono text-base lg:text-lg text-foreground/80">
                UI/UX Designer
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-foreground/20" />
            <div className="flex items-center gap-2 text-foreground/60">
              <MapPin size={18} />
              <span className="font-body">Kakinada, India</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group relative px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full font-body text-base font-medium text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B6B]/30"
              data-cursor-hover
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 rounded-full font-body text-base font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              data-cursor-hover
            >
              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          variants={itemVariants}
          className="relative hidden lg:block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            ref={portraitRef}
            variants={{
              hidden: {
                clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                x: -20,
                opacity: 0
              },
              visible: {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                x: 0,
                opacity: 1,
                transition: {
                  clipPath: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
                  x: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
                  opacity: { duration: 0.8, delay: 0.6 }
                }
              }
            }}
            className="relative rounded-[2rem] overflow-hidden aspect-[4/5] max-h-[80vh] w-full group shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B6B]/20 to-[#4ECDC4]/20 mix-blend-overlay z-10" />
            <motion.img
              variants={{
                hidden: { scale: 1.4, filter: 'blur(10px)' },
                visible: {
                  scale: 1,
                  filter: 'blur(0px)',
                  transition: { duration: 2, ease: "easeOut", delay: 0.6 }
                }
              }}
              src="/hero_portrait.jpg"
              alt="Charan Neelam"
              className="w-full h-full object-cover"
            />

            {/* Floating Card 1 */}
            <div className="absolute top-10 right-10 glass p-4 rounded-2xl z-20 animate-float">
              <div className="font-mono text-3xl font-bold text-[#FF6B6B]">10+</div>
              <div className="font-body text-xs text-foreground/60">Projects</div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-10 left-10 glass p-4 rounded-2xl z-20 animate-float-delayed">
              <div className="font-mono text-3xl font-bold text-[#4ECDC4]">1+</div>
              <div className="font-body text-xs text-foreground/60">Year Exp.</div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF6B6B] rounded-full blur-[100px] opacity-20" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4ECDC4] rounded-full blur-[100px] opacity-20" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/80 transition-colors"
          data-cursor-hover
        >
          <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
