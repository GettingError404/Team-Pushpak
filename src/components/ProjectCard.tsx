import React from 'react';

export interface ProjectCardProps {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    status: 'Completed' | 'In-Progress' | 'Research' | 'Archived';
    techStack: string[];
}

const statusColors = {
    Completed: 'bg-green-100 text-green-800',
    'In-Progress': 'bg-yellow-100 text-yellow-800',
    Research: 'bg-blue-100 text-blue-800',
    Archived: 'bg-gray-100 text-gray-800'
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, status, techStack }) => {
    return (
        <div className="bg-neutral rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-primary">{title}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColors[status]}`}>
                        {status}
                    </span>
                </div>
                <p className="text-support flex-grow">{description}</p>
                <div className="mt-4">
                    <p className="text-sm font-semibold text-support mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map(tech => (
                            <span key={tech} className="bg-support-light text-support text-xs font-medium px-2 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
