import React from 'react';
import type { Notice } from '../../types';

interface NoticeItemProps {
  notice: Notice;
  onEdit: (notice: Notice) => void;
  onDelete: (id: string) => void;
}

const NoticeItem: React.FC<NoticeItemProps> = ({ notice, onEdit, onDelete }) => {
  const formattedDate = new Date(notice.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-slate-800 p-5 rounded-lg shadow-lg border border-slate-700/50 flex flex-col sm:flex-row justify-between items-start gap-4">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white font-orbitron">{notice.title}</h3>
        <p className="mt-2 text-slate-300">{notice.description}</p>
        {notice.fileUrl && (
          <div className="mt-3">
            <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300">
              View Attachment
            </a>
          </div>
        )}
        <p className="mt-3 text-xs text-slate-500">
          Posted by {notice.createdBy.name} on {formattedDate}
        </p>
      </div>
      <div className="flex-shrink-0 flex items-center gap-2 mt-4 sm:mt-0">
        <button
          onClick={() => onEdit(notice)}
          className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(notice._id)}
          className="bg-red-800 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoticeItem;