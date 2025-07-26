import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectCardProps } from '../components/ProjectCard';
import PageNavigation from '../components/PageNavigation';

const projects: ProjectCardProps[] = [
    { 
        title: "Autonomous Survey Drone", 
        description: "A UAV equipped with LiDAR and photogrammetry sensors for high-precision 3D mapping of terrain and infrastructure.",
        imageUrl: "https://picsum.photos/seed/alpha/600/400",
        status: 'Completed',
        techStack: ['ROS', 'Python', 'PX4', 'Gazebo', 'LiDAR']
    },
    { 
        title: "Search & Rescue UAV", 
        description: "AI-powered drone with thermal imaging and object detection to locate missing persons in challenging environments.",
        imageUrl: "https://picsum.photos/seed/beta/600/400",
        status: 'In-Progress',
        techStack: ['TensorFlow', 'OpenCV', 'Mavlink', 'Jetson Nano']
    },
    { 
        title: "Drone Swarm Simulation", 
        description: "A software project developing algorithms for decentralized, coordinated behavior in a swarm of drones for tasks like surveillance.",
        imageUrl: "https://picsum.photos/seed/gamma/600/400",
        status: 'Research',
        techStack: ['Python', 'SimPy', 'Multi-Agent Systems']
    },
    { 
        title: "VTOL Prototype", 
        description: "An experimental aircraft combining the flexibility of a quadcopter with the efficiency of a fixed-wing plane for long-range missions.",
        imageUrl: "https://picsum.photos/seed/delta/600/400",
        status: 'Completed',
        techStack: ['ArduPilot', 'SolidWorks', '3D Printing']
    },
    { 
        title: "Indoor GPS-Denied Navigation", 
        description: "Developing a system using SLAM for drones to navigate accurately inside buildings without GPS signals.",
        imageUrl: "https://picsum.photos/seed/epsilon/600/400",
        status: 'In-Progress',
        techStack: ['C++', 'ROS', 'IMU', 'Depth Camera']
    },
    { 
        title: "Package Delivery Drone", 
        description: "A proof-of-concept drone for last-mile delivery, focusing on payload stability and automated flight paths.",
        imageUrl: "https://picsum.photos/seed/zeta/600/400",
        status: 'Archived',
        techStack: ['Mission Planner', 'Raspberry Pi', 'GPS']
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const ProjectsPage = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary min-h-screen"
    >
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Projects</h1>
            <p className="mt-4 text-xl text-secondary max-w-3xl mx-auto">
                From concept to creation, here are the challenges we've tackled and the solutions we've engineered.
            </p>
        </motion.div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </motion.div>
      </div>
      <PageNavigation
        prevLink={{ path: '/about', label: '← About Us' }}
        nextLink={{ path: '/achievements', label: 'Our Achievements →' }}
      />
    </motion.div>
  );
};

export default ProjectsPage;
