import React from 'react';
import { motion, Variants } from 'framer-motion';
import PageNavigation from '../components/PageNavigation';

const ValueCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -8, boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'}}
    className="bg-glass backdrop-blur-lg p-8 rounded-xl shadow-lg text-center border border-cyan-300/10 h-full"
  >
    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-accent/10 text-accent mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-secondary">{description}</p>
  </motion.div>
);

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 } },
};

const AboutPage = () => {
  return (
    <motion.div 
      className="bg-primary"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Story</h1>
                <p className="mt-4 text-xl text-secondary">
                    Forging a path of innovation from classroom theory to real-world application.
                </p>
            </motion.div>
            
            <motion.div 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-20 max-w-5xl mx-auto bg-glass backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-lg space-y-6 border border-cyan-300/10"
            >
                <p className="text-lg text-secondary leading-relaxed">
                    Team Pushpak was founded in 2021 by a group of passionate engineering students. United by a shared fascination for robotics and autonomous systems, we set out to create a platform for hands-on learning, collaborative innovation, and competitive excellence.
                </p>
                <p className="text-lg text-secondary leading-relaxed">
                    Our name, "Pushpak," is inspired by the mythical flying chariot, a symbol of advanced ancient technology and boundless potential. It represents our ambition to pioneer intelligent aerial systems that can positively impact society.
                </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="max-w-5xl mx-auto mt-24"
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core Values</h2>
              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <motion.div variants={sectionVariants}>
                  <ValueCard 
                    title="Innovation" 
                    description="We constantly challenge the status quo, exploring new technologies and creative solutions to complex problems."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707m12.728 0l.707.707M12 21v-1m0-16a8 8 0 100 16 8 8 0 000-16z" /></svg>}
                  />
                </motion.div>
                <motion.div variants={sectionVariants}>
                  <ValueCard 
                    title="Collaboration" 
                    description="We believe the best ideas are born from diverse perspectives. We foster a culture of teamwork and open communication."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                  />
                </motion.div>
                 <motion.div variants={sectionVariants}>
                  <ValueCard 
                    title="Excellence" 
                    description="From design and fabrication to coding and testing, we are committed to the highest standards of quality and performance."
                     icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
        </div>
        <PageNavigation
            prevLink={{ path: '/', label: '← Back to Home' }}
            nextLink={{ path: '/projects', label: 'See Our Projects →' }}
        />
    </motion.div>
  );
};

export default AboutPage;
