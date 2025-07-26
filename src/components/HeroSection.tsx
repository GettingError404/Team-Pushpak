import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton.tsx';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-r from-primary to-accent text-neutral py-24 sm:py-32 px-6 text-center shadow-inner">
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <h1 className="text-5xl font-bold text-white tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl text-neutral opacity-90 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-10">
          <PrimaryButton onClick={() => navigate('/projects')}>
            Explore Our Projects
          </PrimaryButton>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
