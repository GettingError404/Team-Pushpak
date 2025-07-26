import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../src/components/HeroSection.tsx';
import PrimaryButton from '../src/components/PrimaryButton.tsx';
import ProjectCard, { ProjectCardProps } from '../src/components/ProjectCard.tsx';
import { NavLink } from 'react-router-dom';

const Counter: React.FC<{ end: number; label: string }> = ({ end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 1500;
        const stepTime = Math.abs(Math.floor(duration / end));
        if (count < end) {
            const timer = setTimeout(() => {
                setCount(c => c + 1);
            }, stepTime);
            return () => clearTimeout(timer);
        }
    }, [count, end]);

    return (
        <div className="text-center">
            <p className="text-5xl font-bold text-accent">{count}+</p>
            <p className="text-lg text-primary font-semibold">{label}</p>
        </div>
    );
};

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    
    // Sample data for featured projects
    const featuredProjects: ProjectCardProps[] = [
        {
            title: "Autonomous Survey Drone",
            description: "A UAV equipped with LiDAR and photogrammetry for high-precision 3D mapping.",
            imageUrl: "https://picsum.photos/seed/drone1/600/400",
            status: 'Completed',
            techStack: ['ROS', 'Python', 'PX4']
        },
        {
            title: "Search & Rescue UAV",
            description: "AI-powered drone with thermal imaging to locate missing persons in challenging terrains.",
            imageUrl: "https://picsum.photos/seed/drone2/600/400",
            status: 'In-Progress',
            techStack: ['TensorFlow', 'OpenCV', 'Mavlink']
        },
    ];

    return (
        <div className="bg-neutral">
            <HeroSection
                title="Engineering the Future of Flight"
                subtitle="Team Pushpak is a collegiate robotics team dedicated to pushing the boundaries of autonomous aerial technology. We build, we innovate, we fly."
            />
            
            <section className="py-20 bg-neutral">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <Counter end={12} label="Projects Completed" />
                        <Counter end={5} label="Awards Won" />
                        <Counter end={25} label="Active Members" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-support-light">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-4xl font-bold text-center mb-4 text-primary">
                        Our Latest Innovations
                    </h2>
                    <p className="text-center text-support max-w-2xl mx-auto mb-16">
                        We are constantly working on challenging projects that solve real-world problems. Here's a glimpse of our work.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {featuredProjects.map(project => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                            />
                        ))}
                    </div>
                     <div className="text-center mt-12">
                         <PrimaryButton onClick={() => navigate('/projects')}>
                            View All Projects
                         </PrimaryButton>
                     </div>
                </div>
            </section>
            
            <section className="py-20 text-center bg-neutral">
                 <h3 className="text-3xl font-bold text-primary mb-4">Join Our Mission</h3>
                 <p className="text-support max-w-2xl mx-auto mb-8">
                    We are looking for passionate students, ambitious sponsors, and collaborative partners. Let's shape the future of robotics together.
                 </p>
                <PrimaryButton onClick={() => navigate('/contact')}>
                    Get In Touch
                </PrimaryButton>
            </section>
        </div>
    );
};

export default HomePage;
