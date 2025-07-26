import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Attempting to log in...");
        navigate('/admin');
    };

    return (
        <motion.div 
          className="flex items-center justify-center py-20 min-h-screen bg-primary"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="max-w-md w-full bg-glass backdrop-blur-lg p-8 rounded-xl shadow-lg border border-cyan-300/10"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">Admin Login</h2>
                    <p className="mt-2 text-sm text-secondary">
                        Enter credentials to access the dashboard.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email Address</label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            autoComplete="email" 
                            required 
                            className="mt-1 block w-full bg-slate-800/50 border border-slate-600 rounded-md shadow-sm focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm text-white p-3 transition" 
                            placeholder="admin@teampushpak.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-secondary mb-1">Password</label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            autoComplete="current-password" 
                            required 
                            className="mt-1 block w-full bg-slate-800/50 border border-slate-600 rounded-md shadow-sm focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm text-white p-3 transition"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="pt-4">
                        <PrimaryButton className="w-full" type="submit">
                            Sign In
                        </PrimaryButton>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default LoginPage;
