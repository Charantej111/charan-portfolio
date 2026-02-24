import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Code2, Layers, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-foreground">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/#projects" className="text-[#FF6B6B] hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
            {/* Back Link */}
            <Link to="/#projects" className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8 transition-colors group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Portfolio
            </Link>

            {/* Header */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="mb-16"
            >
                <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                        {project.category}
                    </span>
                    <span className="text-foreground/40">|</span>
                    <span className="text-foreground/60 font-mono text-sm">2024</span>
                </motion.div>

                <motion.h1 variants={fadeIn} className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
                    {project.title}
                </motion.h1>

                <motion.p variants={fadeIn} className="font-body text-xl text-foreground/70 max-w-3xl leading-relaxed">
                    {project.overview}
                </motion.p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden mb-16 aspect-video relative group"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-24 mb-24">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Problem & Solution */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <motion.div variants={fadeIn}>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-red-500/10 text-red-500"><ExternalLink size={20} /></span>
                                The Challenge
                            </h2>
                            <p className="text-foreground/70 leading-relaxed font-body text-lg">
                                {project.problem}
                            </p>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-green-500/10 text-green-500"><CheckCircle size={20} /></span>
                                The Solution
                            </h2>
                            <p className="text-foreground/70 leading-relaxed font-body text-lg">
                                {project.solution}
                            </p>
                        </motion.div>
                    </motion.section>

                    {/* Key Features */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <h2 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><Layers size={20} /></span>
                            Key Features
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {project.features?.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeIn}
                                    className="glass p-4 rounded-xl border border-foreground/5 hover:border-foreground/10 transition-colors"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                                        <span className="text-foreground/80 font-body">{feature}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Results */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="glass p-8 rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent"
                    >
                        <h2 className="font-display text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
                        <p className="text-foreground/80 leading-relaxed font-body text-lg">
                            {project.results}
                        </p>
                    </motion.section>

                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Tools Used */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass p-6 rounded-2xl"
                    >
                        <h3 className="font-display text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                            <Code2 size={18} className="text-foreground/60" />
                            Tools & Tech
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tools?.map((tool) => (
                                <span key={tool} className="px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground/70 text-sm font-body">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Project Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass p-6 rounded-2xl space-y-4"
                    >
                        <div>
                            <label className="text-sm text-foreground/40 font-mono block mb-1">Role</label>
                            <div className="text-foreground font-body">Lead Designer</div>
                        </div>
                        <div>
                            <label className="text-sm text-foreground/40 font-mono block mb-1">Timeline</label>
                            <div className="text-foreground font-body flex items-center gap-2">
                                <Calendar size={14} />
                                4 Weeks
                            </div>
                        </div>
                        <div className="pt-4 border-t border-foreground/10">
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    View Live Site <ExternalLink size={16} />
                                </a>
                            ) : (
                                <button className="w-full py-3 rounded-xl bg-foreground/5 text-foreground/20 font-bold cursor-not-allowed flex items-center justify-center gap-2">
                                    Live Site Coming Soon
                                </button>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Design Screens Gallery */}
            {project.screens && project.screens.length > 0 && (
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="font-display text-3xl font-bold text-foreground">Design Screens</h2>
                        <div className="flex-1 h-px bg-foreground/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.screens.map((screen, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden glass border border-foreground/5 aspect-[4/5] lg:aspect-[3/4]"
                            >
                                <img
                                    src={screen}
                                    alt={`${project.title} Screen ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white text-sm font-body">Screen {index + 1}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProjectDetail;
