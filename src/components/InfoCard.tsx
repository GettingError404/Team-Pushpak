import React from 'react';

interface InfoCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-neutral border-2 border-support rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
          <h3 className="text-2xl font-semibold text-primary mt-4 px-4">
            {title}
          </h3>
          <p className="text-support p-4">
            {description}
          </p>
      </div>
    </div>
  );
};

export default InfoCard;