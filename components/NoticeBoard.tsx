import React from 'react';
import type { Notice } from '../types';
import { useApi } from '../hooks/useApi';
import NoticeCard from './NoticeCard';
import LoadingSpinner from './ui/LoadingSpinner';
import ErrorMessage from './ui/ErrorMessage';

const NoticeBoard: React.FC = () => {
  const { data: notices, loading, error } = useApi<Notice[]>('/api/notices');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-orbitron">
          Notice Board
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
          Latest updates and announcements from the team.
        </p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage title="Failed to load notices" error={error} />}
        {notices && (
            notices.length > 0 ? (
                <div className="space-y-8">
                    {notices.map((notice) => (
                        <NoticeCard key={notice._id} notice={notice} />
                    ))}
                </div>
            ) : (
                !loading && <p className="text-center text-slate-500">No recent notices.</p>
            )
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;