import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton.tsx';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for Firebase auth logic
        console.log("Attempting to log in...");
        // On successful login, navigate to admin dashboard
        navigate('/admin');
    };

    return (
        <div className="bg-support-light flex items-center justify-center py-20">
            <div className="max-w-md w-full bg-neutral p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-primary">Admin Login</h2>
                    <p className="mt-2 text-sm text-support">
                        Enter your credentials to access the dashboard.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-support">Email Address</label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            autoComplete="email" 
                            required 
                            className="mt-1 block w-full bg-support-light border-transparent rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm text-support p-3" 
                            placeholder="admin@teampushpak.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"className="block text-sm font-medium text-support">Password</label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            autoComplete="current-password" 
                            required 
                            className="mt-1 block w-full bg-support-light border-transparent rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm text-support p-3"
                            placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <PrimaryButton className="w-full" type="submit">
                            Sign In
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
