import React from 'react';
import ProjectCard, { ProjectCardProps } from '../src/components/ProjectCard.tsx';

const ProjectsPage: React.FC = () => {
  const projects: ProjectCardProps[] = [
    { 
        title: "Autonomous Survey Drone", 
        description: "A UAV equipped with LiDAR and photogrammetry sensors for high-precision 3D mapping of terrain and infrastructure. Designed for agricultural and construction site monitoring.",
        imageUrl: "https://picsum.photos/seed/alpha/600/400",
        status: 'Completed',
        techStack: ['ROS', 'Python', 'PX4', 'Gazebo', 'LiDAR']
    },
    { 
        title: "Search & Rescue UAV", 
        description: "AI-powered drone with thermal imaging and object detection to locate missing persons in challenging environments. Features real-time video streaming to ground control.",
        imageUrl: "https://picsum.photos/seed/beta/600/400",
        status: 'In-Progress',
        techStack: ['TensorFlow', 'OpenCV', 'Mavlink', 'Jetson Nano']
    },
    { 
        title: "Drone Swarm Simulation", 
        description: "A software project developing algorithms for decentralized, coordinated behavior in a swarm of drones for tasks like surveillance and light shows.",
        imageUrl: "https://picsum.photos/seed/gamma/600/400",
        status: 'Research',
        techStack: ['Python', 'SimPy', 'Multi-Agent Systems']
    },
    { 
        title: "Vertical Take-Off and Landing (VTOL) Prototype", 
        description: "An experimental aircraft combining the flexibility of a quadcopter with the efficiency of a fixed-wing plane for long-range missions.",
        imageUrl: "https://picsum.photos/seed/delta/600/400",
        status: 'Completed',
        techStack: ['ArduPilot', 'SolidWorks', '3D Printing']
    },
    { 
        title: "Indoor GPS-Denied Navigation", 
        description: "Developing a system using SLAM (Simultaneous Localization and Mapping) for drones to navigate accurately inside buildings without GPS signals.",
        imageUrl: "https://picsum.photos/seed/epsilon/600/400",
        status: 'In-Progress',
        techStack: ['C++', 'ROS', 'IMU', 'Depth Camera']
    },
    { 
        title: "Package Delivery Drone", 
        description: "A proof-of-concept drone for last-mile delivery, focusing on payload stability, secure package release mechanisms, and automated flight paths.",
        imageUrl: "https://picsum.photos/seed/zeta/600/400",
        status: 'Archived',
        techStack: ['Mission Planner', 'Raspberry Pi', 'GPS']
    },
  ];

  return (
    <div className="bg-support-light min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">Our Projects</h1>
            <p className="mt-4 text-xl text-support max-w-3xl mx-auto">
                From concept to creation, here are the challenges we've tackled and the solutions we've engineered.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
