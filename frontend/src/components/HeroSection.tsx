import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import { motion, Variants } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <motion.section 
      className="w-full text-secondary py-32 sm:py-40 px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-highlight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg text-secondary/80 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
        <motion.div className="mt-10" variants={itemVariants}>
          <PrimaryButton onClick={() => navigate('/projects')}>
            Explore Our Projects
          </PrimaryButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
