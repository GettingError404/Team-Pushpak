
import React from 'react';
import type { Notice } from '../types';

const NoticeCard: React.FC<{ notice: Notice }> = ({ notice }) => {
  const formattedDate = new Date(notice.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-slate-800/70 p-6 rounded-lg shadow-lg border border-slate-700/50">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-white font-orbitron">{notice.title}</h3>
        <span className="text-sm text-slate-400 flex-shrink-0 ml-4 text-right">{formattedDate}</span>
      </div>
      <p className="mt-4 text-slate-300">{notice.description}</p>
      {notice.fileUrl && (
        <div className="mt-4">
          <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300">
            View Attachment
          </a>
        </div>
      )}
       <p className="mt-4 text-right text-xs text-slate-500">Posted by: {notice.createdBy.name}</p>
    </div>
  );
};

export default NoticeCard;
