import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Linkedin, Download, ArrowUpRight, Github, Twitter, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResumeModal from '@/components/ResumeModal';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/charan-tej-neelam-bb0a9a302', color: '#FF6B6B' },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: '#4ECDC4' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: '#FFE66D' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF6B6B]/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4ECDC4]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#FF6B6B]" />
            <span className="font-mono text-sm text-foreground/60 uppercase tracking-widest">
              Contact
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#4ECDC4]" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Let&apos;s create something{' '}
            <span className="gradient-text">amazing</span>
          </h2>
          <p className="font-body text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how
            we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:career.charantej@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl glass hover:bg-foreground/10 transition-all duration-300"
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={22} className="text-[#FF6B6B]" />
                </div>
                <div>
                  <span className="font-body text-sm text-foreground/50 block mb-0.5">
                    Email
                  </span>
                  <span className="font-body text-base text-foreground group-hover:text-[#FF6B6B] transition-colors">
                    career.charantej@gmail.com
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto text-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl glass">
                <div className="w-12 h-12 rounded-xl bg-[#4ECDC4]/20 flex items-center justify-center">
                  <MapPin size={22} className="text-[#4ECDC4]" />
                </div>
                <div>
                  <span className="font-body text-sm text-foreground/50 block mb-0.5">
                    Location
                  </span>
                  <span className="font-body text-base text-foreground">
                    Kakinada, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-foreground/10 transition-all duration-300"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                    data-cursor-hover
                  >
                    <social.icon
                      size={20}
                      className="text-foreground/60 group-hover:text-foreground transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Download My Resume
              </h3>
              <p className="font-body text-sm text-foreground/50 mb-4">
                Get a detailed overview of my skills and experience.
              </p>
              <Button
                variant="outline"
                className="w-full border-foreground/20 text-foreground hover:bg-foreground/10 rounded-xl"
                onClick={() => setIsResumeModalOpen(true)}
              >
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Right - Creative Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-3 h-full"
          >
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden glass p-1 lg:p-2 group">
              {/* Inner Artistic Content */}
              <div className="relative h-full w-full rounded-[1.4rem] bg-[#0A0A0F]/50 overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-white/5">

                {/* Background Animation (Magnetic/Fluid) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#FF6B6B]/10 to-transparent blur-[80px]"
                  />
                  <motion.div
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 270, 180, 90, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#4ECDC4]/10 to-transparent blur-[80px]"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-md">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10">
                    <Sparkles size={16} className="text-[#FFE66D]" />
                    <span className="font-body text-xs text-foreground/60 uppercase tracking-widest">Open for collaborations</span>
                  </div>

                  <h3 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Got a <span className="gradient-text">vision</span>?<br />
                    Let&apos;s talk.
                  </h3>

                  <p className="font-body text-base lg:text-lg text-foreground/50 mb-10 leading-relaxed">
                    I&apos;m currently taking on new projects and would love to hear how I can help bring your ideas to life through design.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="mailto:career.charantej@gmail.com"
                      className="group relative px-10 py-5 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-2xl font-body text-lg font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B6B]/40 hover:-translate-y-1"
                      data-cursor-hover
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Start a Project
                        <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>

                  <div className="mt-12 flex items-center justify-center gap-8">
                    <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => window.open('https://linkedin.com/in/charan-tej-neelam-bb0a9a302', '_blank')}>
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-[#FF6B6B]/20 transition-colors">
                        <Linkedin size={18} className="text-foreground/40 group-hover:text-[#FF6B6B]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => window.open('career.charantej@gmail.com', '_self')}>
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-[#4ECDC4]/20 transition-colors">
                        <Mail size={18} className="text-foreground/40 group-hover:text-[#4ECDC4]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl-xl" />
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/10 rounded-tr-xl" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/10 rounded-bl-xl" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-foreground/40">
            © {new Date().getFullYear()} Charan Teja Neelam. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="font-body text-sm text-foreground/40 hover:text-foreground/80 transition-colors">
              Privacy Policy
            </button>
            <button className="font-body text-sm text-foreground/40 hover:text-foreground/80 transition-colors">
              Terms of Service
            </button>
          </div>
        </motion.div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};

export default Contact;
