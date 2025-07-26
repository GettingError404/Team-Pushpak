import React from 'react';

const AchievementCard: React.FC<{ title: string; event: string; year: string; description: string }> = ({ title, event, year, description }) => (
    <div className="bg-neutral rounded-lg shadow-lg p-6 border-l-4 border-accent">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm font-semibold text-accent">{event}</p>
                <h3 className="text-xl font-bold text-primary mt-1">{title}</h3>
            </div>
            <span className="bg-primary text-neutral text-sm font-bold px-3 py-1 rounded-full">{year}</span>
        </div>
        <p className="text-support mt-4">{description}</p>
    </div>
);


const AchievementsPage: React.FC = () => {
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
    <div className="bg-support-light min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary sm:text-5xl">Our Achievements</h1>
                <p className="mt-4 text-xl text-support max-w-3xl mx-auto">
                    A testament to our dedication, hard work, and innovative spirit.
                </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
                {achievements.map(a => <AchievementCard key={a.title} {...a} />)}
            </div>
        </div>
    </div>
  );
};

export default AchievementsPage;
