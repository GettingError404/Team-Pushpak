import React from 'react';
import Hero from '../components/Hero';
import DroneShowcase from '../components/DroneShowcase';
import ProjectShowcase from '../components/ProjectShowcase';
import NoticeBoard from '../components/NoticeBoard';
import TechStack from '../components/TechStack';
import TeamSection from '../components/TeamSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="drones" className="py-16 sm:py-24 bg-slate-900/50 backdrop-blur-sm">
        <DroneShowcase />
      </div>
      <div id="projects" className="py-16 sm:py-24 bg-slate-800/60">
        <ProjectShowcase />
      </div>
      <div id="notices" className="py-16 sm:py-24 bg-slate-900/50 backdrop-blur-sm">
        <NoticeBoard />
      </div>
      <div id="tech" className="py-16 sm:py-24 bg-slate-800/60">
        <TechStack />
      </div>
      <div id="team" className="py-16 sm:py-24">
        <TeamSection />
      </div>
    </>
  );
};

export default HomePage;
