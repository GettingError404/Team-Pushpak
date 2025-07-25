import React from 'react';
import type { Project } from '../../types';
import ProjectItem from './ProjectItem';

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onEdit, onDelete }) => {
  if (projects.length === 0) {
    return <p className="text-center text-slate-500 mt-16">No projects have been added yet. Click "Add Project" to get started.</p>;
  }

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-300">
            <thead className="text-xs text-cyan-400 uppercase bg-slate-700/50">
                <tr>
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">Category</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3 text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project => (
                    <ProjectItem
                    key={project._id}
                    project={project}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    />
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default ProjectList;
