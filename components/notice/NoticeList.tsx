import React from 'react';
import type { Notice } from '../../types';
import NoticeItem from './NoticeItem';

interface NoticeListProps {
  notices: Notice[];
  onEdit: (notice: Notice) => void;
  onDelete: (id: string) => void;
}

const NoticeList: React.FC<NoticeListProps> = ({ notices, onEdit, onDelete }) => {
  if (notices.length === 0) {
    return <p className="text-center text-slate-500 mt-16">No notices have been posted yet. Click "Add Notice" to get started.</p>;
  }

  return (
    <div className="space-y-6">
      {notices.map(notice => (
        <NoticeItem
          key={notice._id}
          notice={notice}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoticeList;