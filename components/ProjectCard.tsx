
import React from 'react';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const statusColor = {
    Active: 'text-green-400 bg-green-900/50',
    Completed: 'text-blue-400 bg-blue-900/50',
    Archived: 'text-slate-500 bg-slate-700/50',
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform transition duration-500 hover:scale-105 hover:shadow-cyan-500/20">
      {project.media && project.media[0] && (
        <img className="h-56 w-full object-cover" src={project.media[0]} alt={project.title} />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-white font-orbitron">{project.title}</h3>
            <span className={`px-2 py-1 text-xs font-bold rounded-full ${statusColor[project.status]}`}>{project.status}</span>
        </div>
        <p className="mt-1 text-sm text-cyan-400">{project.timeline}</p>
        <p className="mt-4 text-base text-slate-300 flex-grow">{project.description}</p>
        
        <div className="mt-4 pt-4 border-t border-slate-700">
          <h4 className="font-semibold text-white mb-2">Contributors:</h4>
          <div className="flex flex-wrap gap-2">
            {project.contributors.map(c => (
              <span key={c._id} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">{c.name}</span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-700 flex gap-4">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">GitHub</a>
          )}
          {project.pdfLink && (
            <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium">PDF Report</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
