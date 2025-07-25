import React from 'react';
import type { Project } from '../../types';

interface ProjectItemProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, onEdit, onDelete }) => {
    const statusColor = {
        Active: 'bg-green-900/50 text-green-300',
        Completed: 'bg-blue-900/50 text-blue-300',
        Archived: 'bg-slate-700/50 text-slate-400',
    };
  
    return (
    <tr className="bg-slate-800 border-b border-slate-700 hover:bg-slate-700/50">
        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
            {project.title}
        </th>
        <td className="px-6 py-4">
            {project.category}
        </td>
        <td className="px-6 py-4">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColor[project.status]}`}>
                {project.status}
            </span>
        </td>
        <td className="px-6 py-4 text-right">
            <button
            onClick={() => onEdit(project)}
            className="font-medium text-cyan-400 hover:underline mr-4"
            >
            Edit
            </button>
            <button
            onClick={() => onDelete(project._id)}
            className="font-medium text-red-500 hover:underline"
            >
            Delete
            </button>
        </td>
    </tr>
  );
};

export default ProjectItem;
