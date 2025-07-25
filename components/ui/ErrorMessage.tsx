import React from 'react';

interface ErrorMessageProps {
    title: string;
    error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, error }) => (
    <div className="text-center text-red-400 bg-red-900/30 p-4 rounded-lg">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{error}</p>
        <p className="text-xs mt-2">Please ensure the backend server is running and reachable.</p>
    </div>
);

export default ErrorMessage;
