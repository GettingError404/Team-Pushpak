
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import TeamMemberCard from './TeamMemberCard';

const TeamSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-orbitron">
          Meet the Innovators
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
          The brilliant minds behind Team Pushpak's success.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
