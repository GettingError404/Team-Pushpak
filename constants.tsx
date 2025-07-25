
import React from 'react';
import type { Drone, Technology, TeamMember } from './types';

// SVG Icons
const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-cyan-400">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);
const BrainCircuitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-cyan-400">
        <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"></path>
    </svg>
);
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-cyan-400">
        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);
const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-cyan-400">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);


// Drones Data
export const DRONES: Drone[] = [
  {
    name: "Vajra-H6",
    type: "Hexacopter",
    imageUrl: "https://picsum.photos/seed/hexacopter/800/600",
    description: "A robust hexacopter designed for heavy payloads and stable flight, serving as our primary platform for advanced AI model deployment and testing.",
    specs: {
      flightTime: "25 Mins",
      payload: "5 Kg",
      controller: "Pixhawk 6X"
    }
  },
  {
    name: "Garuda-Q4",
    type: "Quadcopter",
    imageUrl: "https://picsum.photos/seed/quadcopter/800/600",
    description: "A nimble and speedy quadcopter optimized for autonomous navigation and real-time data collection using a Raspberry Pi 4 for on-board processing.",
    specs: {
      flightTime: "22 Mins",
      payload: "1.5 Kg",
      controller: "Pixhawk 4"
    }
  }
];

// Tech Stack Data
export const TECHNOLOGIES: Technology[] = [
  { name: "Pixhawk", icon: <CpuIcon /> },
  { name: "Raspberry Pi", icon: <BrainCircuitIcon /> },
  { name: "React & Node.js", icon: <CodeIcon /> },
  { name: "MongoDB", icon: <DatabaseIcon /> },
];

// Team Members Data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rohan Verma",
    role: "Team Lead & AI Specialist",
    imageUrl: "https://picsum.photos/seed/rohan/400/400"
  },
  {
    name: "Priya Singh",
    role: "Lead Aerospace Engineer",
    imageUrl: "https://picsum.photos/seed/priya/400/400"
  },
  {
    name: "Amit Patel",
    role: "Embedded Systems Lead",
    imageUrl: "https://picsum.photos/seed/amit/400/400"
  },
  {
    name: "Sunita Rao",
    role: "Full-Stack Developer",
    imageUrl: "https://picsum.photos/seed/sunita/400/400"
  }
];
