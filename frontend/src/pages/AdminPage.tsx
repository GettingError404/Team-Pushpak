import React from 'react';
import { motion } from 'framer-motion';

const AdminPage = () => {

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
    }
  };

  const actions = [
      { title: 'Manage Projects', description: 'Add, edit, or remove project showcases.' },
      { title: 'Update Achievements', description: 'Post new awards and recognitions.' },
      { title: 'Edit Team Members', description: 'Update roles and add new members.' },
  ];

  return (
    <motion.div 
      className="bg-primary min-h-screen"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <div 
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-glass backdrop-blur-lg p-8 rounded-xl shadow-lg border border-cyan-300/10"
            >
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="mt-4 text-secondary">
                    Welcome, Admin. This is the central hub for managing the Team Pushpak website content.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {actions.map((action, index) => (
                      <motion.div 
                        key={action.title}
                        variants={cardVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 cursor-pointer"
                      >
                          <h2 className="font-bold text-accent">{action.title}</h2>
                          <p className="text-sm text-secondary mt-2">{action.description}</p>
                      </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </motion.div>
  );
};

export default AdminPage;
