
import React from 'react';
import type { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="text-center">
      <img className="mx-auto h-40 w-40 rounded-full object-cover border-4 border-slate-700" src={member.imageUrl} alt={member.name} />
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-cyan-400">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
