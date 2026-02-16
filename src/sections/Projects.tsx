import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className="group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw]"
      style={{ perspective: '1000px' }}
      data-cursor-hover
    >
      <Link to={`/project/${project.id}`} className="block h-full">
        <div
          className="relative rounded-3xl overflow-hidden transition-all duration-300 h-full"
          style={{
            transform: isHovered
              ? `rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg) scale(1.02)`
              : 'rotateY(0) rotateX(0) scale(1)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />

            {/* Category Badge */}
            <div
              className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: `${project.color}30`, color: project.color }}
            >
              {project.category}
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="font-body text-white/60 mb-3">{project.subtitle}</p>
            <p className="font-body text-sm text-white/50 mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-body"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div
              className="inline-flex items-center gap-2 font-body text-sm font-medium transition-colors"
              style={{ color: project.color }}
            >
              View Case Study
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>

          {/* Glow Border */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: `inset 0 0 0 2px ${project.color}50, 0 0 30px ${project.color}20`,
            }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FF6B6B]/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]" />
              <span className="font-mono text-sm text-foreground/60 uppercase tracking-widest">
                Selected Work
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground">
              Projects that <span className="gradient-text">deliver</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 lg:mt-0">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-all"
              data-cursor-hover
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-all"
              data-cursor-hover
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 px-6 lg:px-12 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Spacer for alignment */}
        <div className="flex-shrink-0 w-[calc((100vw-1280px)/2)] hidden xl:block" />

        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}

        {/* View All Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: projects.length * 0.1 }}
          className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] flex items-center justify-center"
        >
          <div className="glass rounded-3xl p-12 text-center group hover:bg-white/10 transition-all cursor-pointer" data-cursor-hover>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ExternalLink size={24} className="text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              View All Projects
            </h3>
            <p className="font-body text-foreground/60">
              Explore my complete portfolio on Dribbble
            </p>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="flex-shrink-0 w-6" />
      </div>

      {/* Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-body text-sm text-foreground/40">
            Scroll to explore
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
