import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Linkedin, Send, Download, ArrowUpRight, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ResumeModal from '@/components/ResumeModal';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', budget: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <span className="font-mono text-sm text-white/60 uppercase tracking-widest">
              Contact
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#4ECDC4]" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s create something{' '}
            <span className="gradient-text">amazing</span>
          </h2>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">
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
                className="group flex items-center gap-4 p-5 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={22} className="text-[#FF6B6B]" />
                </div>
                <div>
                  <span className="font-body text-sm text-white/50 block mb-0.5">
                    Email
                  </span>
                  <span className="font-body text-base text-white group-hover:text-[#FF6B6B] transition-colors">
                    career.charantej@gmail.com
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="ml-auto text-white/30 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl glass">
                <div className="w-12 h-12 rounded-xl bg-[#4ECDC4]/20 flex items-center justify-center">
                  <MapPin size={22} className="text-[#4ECDC4]" />
                </div>
                <div>
                  <span className="font-body text-sm text-white/50 block mb-0.5">
                    Location
                  </span>
                  <span className="font-body text-base text-white">
                    Kakinada, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                    data-cursor-hover
                  >
                    <social.icon
                      size={20}
                      className="text-white/60 group-hover:text-white transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                Download My Resume
              </h3>
              <p className="font-body text-sm text-white/50 mb-4">
                Get a detailed overview of my skills and experience.
              </p>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 rounded-xl"
                onClick={() => setIsResumeModalOpen(true)}
              >
                <Download size={16} className="mr-2" />
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-10 rounded-3xl glass space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-sm text-white/60 mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#FF6B6B] rounded-xl h-12"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-white/60 mb-2 block">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#FF6B6B] rounded-xl h-12"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-sm text-white/60 mb-2 block">
                  Project Budget
                </label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-[#FF6B6B] rounded-xl h-12">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#12121A] border-white/10">
                    <SelectItem value="5k-10k">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                    <SelectItem value="30k+">$30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="font-body text-sm text-white/60 mb-2 block">
                  Tell Me About Your Project
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm looking for a designer to help me with..."
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#FF6B6B] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full h-12 rounded-xl font-body text-base font-medium transition-all duration-300 ${isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white hover:shadow-lg hover:shadow-[#FF6B6B]/30'
                  }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSubmitted ? (
                  'Message Sent Successfully!'
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-white/40">
            © {new Date().getFullYear()} Charan Teja Neelam. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="font-body text-sm text-white/40 hover:text-white/80 transition-colors">
              Privacy Policy
            </button>
            <button className="font-body text-sm text-white/40 hover:text-white/80 transition-colors">
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
