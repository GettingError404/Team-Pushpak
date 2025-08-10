import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';
import PageNavigation from '../components/PageNavigation';
import AakashImg from "../assets/teamImages/Aakash.jpg";
import AaditoyaImg from "../assets/teamImages/aaditiya.jpg";
import anujaImg from "../assets/teamImages/anuja.jpg";
import aryanImg from "../assets/teamImages/aryan.jpg";
import atharvImg from "../assets/teamImages/atharv.jpg";
import BashidImg from "../assets/teamImages/Bashid.jpg";
import chandImg from "../assets/teamImages/chandrakant.jpg";
import imranImg from "../assets/teamImages/imran.jpg";
import onkarImg from "../assets/teamImages/onkar.jpg";
import prajwalImg from "../assets/teamImages/Prajwal.jpg";
import pruthvirajImg from "../assets/teamImages/pruthviraj.jpg";
import sakshiImg from "../assets/teamImages/sakshi.jpg";
import snehalImg from "../assets/teamImages/snehal.jpg";
import shivaImg from "../assets/teamImages/shiva.jpg";
import udayImg from "../assets/teamImages/uday.jpg";
import varshaImg from "../assets/teamImages/Varsha.jpg";

const coreTeam = [
  { name: "Varsha Manthalkar", role: "Team Captain & Lead Mechanical", imageUrl: varshaImg },
  { name: "Snehal Shinde", role: "Lead, Avionics & Control Systems", imageUrl: snehalImg },
  // { name: "Rohan Mehta", role: "Lead, Software & AI", imageUrl: "https://picsum.photos/seed/rohan/400" },
];

const softwareTeam = [
    { name: "A Bashid Tagala", role: "Computer Vision Specialist", imageUrl: BashidImg },
    { name: "Aakash Madgale", role: "Flight Stack Developer", imageUrl: AakashImg },
    { name: "Chandrakant Yalgi", role: "Mission Planner Dev", imageUrl: chandImg },
    { name: "Anuja Birajdar", role: "Mission Planner Dev", imageUrl: anujaImg },
    { name: "Sakshi Revaje", role: "Mission Planner Dev", imageUrl: sakshiImg },
]

const hardwareTeam = [
    { name: "Aaditiya Kalshetti", role: "Propulsion Systems Engineer", imageUrl: AaditoyaImg },
    { name: "Shivachalappa Hippargi", role: "PCB & Circuit Design", imageUrl: shivaImg },
    { name: "Atharva More", role: "CAD & Fabrication Specialist", imageUrl: atharvImg },
    { name: "Pruthviraj Shinge", role: "CAD & Fabrication Specialist", imageUrl: pruthvirajImg },
    { name: "Udayanraje Gholap", role: "CAD & Fabrication Specialist", imageUrl: udayImg },
];


const MechTeam = [
    { name: "Aaditiya Kalshetti", role: "Propulsion Systems Engineer", imageUrl: AaditoyaImg },
    { name: "Shivachalappa Hippargi", role: "PCB & Circuit Design", imageUrl: shivaImg },
    { name: "Atharva More", role: "CAD & Fabrication Specialist", imageUrl: atharvImg },
    { name: "Pruthviraj Shinge", role: "CAD & Fabrication Specialist", imageUrl: pruthvirajImg },
    { name: "Udayanraje Gholap", role: "CAD & Fabrication Specialist", imageUrl: udayImg },
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
