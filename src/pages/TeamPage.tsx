import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard.tsx';

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

const TeamSection: React.FC<{ title: string; members: any[] }> = ({ title, members }) => (
    <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map(member => <TeamMemberCard key={member.name} {...member} />)}
        </div>
    </div>
);

const TeamPage: React.FC = () => {
  return (
    <div className="bg-support-light min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary sm:text-5xl">Meet the Team</h1>
                <p className="mt-4 text-xl text-support max-w-3xl mx-auto">
                    The brilliant minds behind our flying machines.
                </p>
            </div>
            
            <TeamSection title="Core Leadership" members={coreTeam} />
            <TeamSection title="Software & AI Division" members={softwareTeam} />
            <TeamSection title="Hardware & Avionics Division" members={hardwareTeam} />
        </div>
    </div>
  );
};

export default TeamPage;
