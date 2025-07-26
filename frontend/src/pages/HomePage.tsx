import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, animate, Variants } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import PrimaryButton from '../components/PrimaryButton';
import ProjectCard, { ProjectCardProps } from '../components/ProjectCard';
import PageNavigation from '../components/PageNavigation';

const Counter = ({ end, label }: { end: number; label: string }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current;
            const controls = animate(0, end, {
                duration: 2,
                onUpdate(value) {
                    node.textContent = `${Math.floor(value)}+`;
                }
            });
            return () => controls.stop();
        }
    }, [isInView, end]);

    return (
        <div className="text-center">
            <p ref={ref} className="text-5xl md:text-6xl font-bold text-accent [text-shadow:0_0_10px_var(--tw-shadow-color)] shadow-accent">0+</p>
            <p className="text-lg text-secondary font-semibold mt-2">{label}</p>
        </div>
    );
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
};

const HomePage = () => {
    const navigate = useNavigate();
    
    const featuredProjects: ProjectCardProps[] = [
        {
            title: "Autonomous Survey Drone",
            description: "A UAV equipped with LiDAR and photogrammetry for high-precision 3D mapping.",
            imageUrl: "https://picsum.photos/seed/drone1/600/400",
            status: 'Completed',
            techStack: ['ROS', 'Python', 'PX4']
        },
        {
            title: "Search & Rescue UAV",
            description: "AI-powered drone with thermal imaging to locate missing persons in challenging terrains.",
            imageUrl: "https://picsum.photos/seed/drone2/600/400",
            status: 'In-Progress',
            techStack: ['TensorFlow', 'OpenCV', 'Mavlink']
        },
    ];

    return (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary"
        >
            <HeroSection
                title="Engineering the Future of Flight"
                subtitle="Team Pushpak is a collegiate robotics team dedicated to pushing the boundaries of autonomous aerial technology. We build, we innovate, we fly."
            />
            
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="py-24 bg-primary"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <Counter end={12} label="Projects Completed" />
                        <Counter end={5} label="Awards Won" />
                        <Counter end={25} label="Active Members" />
                    </div>
                </div>
            </motion.section>

            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="py-24 bg-slate-900/70"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-4xl font-bold text-center mb-4 text-white">
                        Our Latest Innovations
                    </h2>
                    <p className="text-center text-secondary max-w-2xl mx-auto mb-16">
                        We are constantly working on challenging projects that solve real-world problems. Here's a glimpse of our work.
                    </p>
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-10"
                      variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
                    >
                        {featuredProjects.map(project => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                            />
                        ))}
                    </motion.div>
                     <div className="text-center mt-16">
                         <PrimaryButton onClick={() => navigate('/projects')}>
                            View All Projects
                         </PrimaryButton>
                     </div>
                </div>
            </motion.section>
            
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="py-24 text-center"
            >
                 <h3 className="text-3xl font-bold text-white mb-4">Join Our Mission</h3>
                 <p className="text-secondary max-w-2xl mx-auto mb-8">
                    We are looking for passionate students, ambitious sponsors, and collaborative partners. Let's shape the future of robotics together.
                 </p>
                <PrimaryButton onClick={() => navigate('/contact')}>
                    Get In Touch
                </PrimaryButton>
            </motion.section>

            <PageNavigation nextLink={{ path: '/about', label: 'Learn About Us →' }} />
        </motion.div>
    );
};

export default HomePage;
