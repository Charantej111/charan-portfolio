import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Star } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Real education data
  const education = {
    degree: "Bachelor of Technology in Artificial Intelligence & Machine Learning",
    institution: 'Aditya University',
    location: 'Kakinada, India',
    period: '2022 - 2026',
    score: '75%',
    description:
      'Comprehensive study of AI/ML fundamentals, data structures, algorithms, and software engineering principles that inform my design decisions.',
  };

  // Real certifications - placeholder for user to fill in
  const certifications = [
    {
      name: 'Certified User Experience Designer',
      issuer: 'Accenture',
      year: '2025',
      icon: Award,
      color: '#FF6B6B',
    },

    {
      name: 'UIUX Designer',
      issuer: 'TuteDude',
      year: '2026',
      icon: Award,
      color: '#4ECDC4',
    },
  ];

  const achievements = [
    'Completed 10+ design projects during coursework',
    'Led design team for university hackathon',
    'Mentored junior students in design fundamentals',
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FFE66D]/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-[#FFE66D] to-[#FF6B6B]" />
            <span className="font-mono text-sm text-foreground/60 uppercase tracking-widest">
              Education
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground">
            Building a <span className="gradient-text">foundation</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="group relative p-8 lg:p-10 rounded-3xl glass overflow-hidden"
            data-cursor-hover
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Education
                  </h3>
                  <span className="font-body text-sm text-foreground/50">
                    Academic Background
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-xl lg:text-2xl font-bold text-foreground leading-tight">
                  {education.degree}
                </h4>

                <div className="flex flex-wrap items-center gap-3 text-foreground/60">
                  <span className="font-body text-sm">{education.institution}</span>
                  <span className="w-1 h-1 rounded-full bg-foreground/40" />
                  <span className="font-body text-sm">{education.location}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-foreground/10 font-mono text-sm text-foreground/80">
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#4ECDC4]/20 font-mono text-sm text-[#4ECDC4]">
                    <Star size={14} />
                    {education.score}
                  </span>
                </div>

                <p className="font-body text-sm text-foreground/50 leading-relaxed pt-2">
                  {education.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFE66D] to-[#FF6B6B] flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Certifications
                </h3>
                <span className="font-body text-sm text-foreground/50">
                  Professional Credentials
                </span>
              </div>
            </div>

            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative p-5 rounded-2xl glass hover:bg-foreground/10 transition-all duration-300 cursor-pointer"
                data-cursor-hover
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${cert.color}20` }}
                  >
                    <cert.icon size={20} style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-base font-semibold text-foreground mb-1 group-hover:text-[#FF6B6B] transition-colors">
                      {cert.name}
                    </h4>
                    <div className="flex items-center gap-2 text-foreground/50">
                      <span className="font-body text-xs">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/40" />
                      <span className="font-body text-xs">{cert.year}</span>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}

            {/* Add Certification Placeholder */}
            <div className="p-4 rounded-2xl border border-dashed border-foreground/20 text-center">
              <span className="font-body text-sm text-foreground/40">
                More certifications coming soon...
              </span>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-2"
          >
            <div className="p-6 lg:p-8 rounded-3xl glass">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4ECDC4] to-[#FFE66D] flex items-center justify-center">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Achievements
                  </h3>
                  <span className="font-body text-sm text-foreground/50">
                    Milestones & Recognition
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-foreground/5"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center flex-shrink-0">
                      <Star size={14} className="text-white" />
                    </div>
                    <span className="font-body text-sm text-foreground/80">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
