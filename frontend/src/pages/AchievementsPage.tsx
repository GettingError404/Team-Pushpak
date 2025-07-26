import React from 'react';
import { motion } from 'framer-motion';
import PageNavigation from '../components/PageNavigation';

const AchievementCard = ({ title, event, year, description }: { title: string; event: string; year: string; description: string }) => (
    <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-glass backdrop-blur-lg rounded-lg shadow-lg p-6 border-l-4 border-accent"
    >
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-semibold text-accent">{event}</p>
                <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
            </div>
            <span className="bg-accent/10 text-accent text-sm font-bold px-3 py-1 rounded-full">{year}</span>
        </div>
        <p className="text-secondary mt-4">{description}</p>
    </motion.div>
);

const AchievementsPage = () => {
  const achievements = [
    { 
        title: "1st Place - Overall Performance", 
        event: "National Drone Competition 2023", 
        year: "2023",
        description: "Secured top honors against 50+ teams, excelling in autonomous flight, payload delivery, and design innovation." 
    },
    { 
        title: "Best Design Award", 
        event: "Inter-Collegiate TechFest 2023", 
        year: "2023",
        description: "Recognized for the innovative modular design and aerodynamic efficiency of our VTOL prototype."
    },
    { 
        title: "Finalist - AI Challenge", 
        event: "Robotics & AI Summit 2022", 
        year: "2022",
        description: "Our computer vision algorithm for the Search & Rescue UAV was selected as a top 5 finalist for its accuracy and speed." 
    },
    { 
        title: "Publication in 'Robotics Today'", 
        event: "Research Publication", 
        year: "2022",
        description: "Our research paper on decentralized swarm algorithms was accepted and published in a peer-reviewed journal." 
    },
    { 
        title: "2nd Place - Obstacle Course", 
        event: "State-Level Drone Prix 2021", 
        year: "2021",
        description: "Demonstrated exceptional maneuverability and control in a complex, GPS-denied environment." 
    },
  ];

  return (
    <motion.div 
      className="bg-primary min-h-screen"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Achievements</h1>
                <p className="mt-4 text-xl text-secondary max-w-3xl mx-auto">
                    A testament to our dedication, hard work, and innovative spirit.
                </p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-8">
                {achievements.map(a => <AchievementCard key={a.title} {...a} />)}
            </div>
        </div>
        <PageNavigation
            prevLink={{ path: '/projects', label: '← Our Projects' }}
            nextLink={{ path: '/gallery', label: 'View Gallery →' }}
        />
    </motion.div>
  );
};

export default AchievementsPage;
