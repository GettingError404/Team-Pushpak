import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';
import PageNavigation from '../components/PageNavigation';

const coreTeam = [
  { name: "Aarav Sharma", role: "Team Captain & Lead Mechanical", imageUrl: "https://picsum.photos/seed/aarav/400" },
  { name: "Priya Singh", role: "Lead, Avionics & Control Systems", imageUrl: "https://picsum.photos/seed/priya/400" },
  { name: "Rohan Mehta", role: "Lead, Software & AI", imageUrl: "https://picsum.photos/seed/rohan/400" },
];

const softwareTeam = [
    { name: "Sneha Gupta", role: "Computer Vision Specialist", imageUrl: "https://picsum.photos/seed/sneha/400" },
    { name: "Karan Verma", role: "Flight Stack Developer", imageUrl: "https://picsum.photos/seed/karan/400" },
    { name: "Anjali Rao", role: "Mission Planner Dev", imageUrl: "https://picsum.photos/seed/anjali/400" },
];

const hardwareTeam = [
    { name: "Vikram Kumar", role: "Propulsion Systems Engineer", imageUrl: "https://picsum.photos/seed/vikram/400" },
    { name: "Diya Patel", role: "PCB & Circuit Design", imageUrl: "https://picsum.photos/seed/diya/400" },
    { name: "Sameer Ali", role: "CAD & Fabrication Specialist", imageUrl: "https://picsum.photos/seed/sameer/400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TeamSection = ({ title, members }: { title: string; members: any[] }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' }}
        }}
        className="mb-20"
    >
        <h2 className="text-3xl font-bold text-white mb-10 text-center">{title}</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
        >
            {members.map(member => <TeamMemberCard key={member.name} {...member} />)}
        </motion.div>
    </motion.div>
);

const TeamPage = () => {
  return (
    <motion.div 
      className="bg-primary min-h-screen"
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
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold text-white sm:text-5xl">Meet the Team</h1>
                <p className="mt-4 text-xl text-secondary max-w-3xl mx-auto">
                    The brilliant minds behind our flying machines.
                </p>
            </motion.div>
            
            <TeamSection title="Core Leadership" members={coreTeam} />
            <TeamSection title="Software & AI Division" members={softwareTeam} />
            <TeamSection title="Hardware & Avionics Division" members={hardwareTeam} />
        </div>
        <PageNavigation
            prevLink={{ path: '/gallery', label: '← View Gallery' }}
            nextLink={{ path: '/contact', label: 'Get In Touch →' }}
        />
    </motion.div>
  );
};

export default TeamPage;
