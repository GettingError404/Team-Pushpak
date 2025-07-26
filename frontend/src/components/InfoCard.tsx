import React from 'react';
import { motion, Variants } from 'framer-motion';

interface InfoCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const InfoCard = ({ imageUrl, title, description }: InfoCardProps) => {
  return (
    <motion.div
        variants={cardVariants}
        whileHover={{ y: -8, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
        className="bg-glass backdrop-blur-lg rounded-xl overflow-hidden flex flex-col border border-cyan-300/10 shadow-lg hover:border-accent transition-colors"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-secondary mt-2">
            {description}
          </p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
