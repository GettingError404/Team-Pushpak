import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface ProjectCardProps {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    status: 'Completed' | 'In-Progress' | 'Research' | 'Archived';
    techStack: string[];
}

const statusStyles = {
    Completed: 'bg-green-500/10 text-green-400',
    'In-Progress': 'bg-yellow-500/10 text-yellow-400',
    Research: 'bg-purple-500/10 text-purple-400',
    Archived: 'bg-slate-500/10 text-slate-400'
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectCard = ({ title, description, imageUrl, status, techStack }: ProjectCardProps) => {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
            className="bg-glass backdrop-blur-lg rounded-xl overflow-hidden flex flex-col border border-cyan-300/10 shadow-lg hover:border-accent transition-colors"
        >
            <div className="overflow-hidden">
              <motion.img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[status]}`}>
                        {status}
                    </span>
                </div>
                <p className="text-secondary flex-grow text-sm leading-relaxed">{description}</p>
                <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                        {techStack.map(tech => (
                            <span key={tech} className="bg-slate-700/50 text-light-gray text-xs font-medium px-3 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
