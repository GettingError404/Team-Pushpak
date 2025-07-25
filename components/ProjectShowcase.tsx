import React, { useState, useMemo } from 'react';
import type { Project, ProjectCategory } from '../types';
import { useApi } from '../hooks/useApi';
import ProjectCard from './ProjectCard';
import LoadingSpinner from './ui/LoadingSpinner';
import ErrorMessage from './ui/ErrorMessage';

const CATEGORIES: ('All' | ProjectCategory)[] = ['All', 'Hexacopter', 'Quadcopter', 'AI Integration', 'Software'];

const ProjectShowcase: React.FC = () => {
  const { data: projects, loading, error } = useApi<Project[]>('/api/projects');
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [projects, activeFilter]);

  const FilterButton: React.FC<{ category: 'All' | ProjectCategory }> = ({ category }) => (
    <button
      onClick={() => setActiveFilter(category)}
      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300
        ${activeFilter === category 
          ? 'bg-cyan-500 text-slate-900 shadow-lg' 
          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
        }`}
    >
      {category}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-orbitron">
          Our Projects
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
          Innovations in flight, from concept to completion.
        </p>
      </div>

      <div className="my-10 flex justify-center flex-wrap gap-3">
        {CATEGORIES.map(cat => <FilterButton key={cat} category={cat} />)}
      </div>

      <div className="mt-8">
        {loading && <LoadingSpinner size="lg" />}
        {error && <ErrorMessage title="Failed to load projects" error={error} />}
        {filteredProjects && (
            filteredProjects.length > 0 ? (
                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            ) : (
                !loading && <p className="text-center text-slate-500">No projects found for this category.</p>
            )
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;