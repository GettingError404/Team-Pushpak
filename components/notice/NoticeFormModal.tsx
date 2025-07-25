import React, { useState, useEffect } from 'react';
import type { Notice } from '../../types';

interface NoticeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: Omit<Notice, '_id' | 'date' | 'createdBy'>) => void;
  initialData: Notice | null;
}

const NoticeFormModal: React.FC<NoticeFormModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setFileUrl(initialData.fileUrl || '');
    } else {
      setTitle('');
      setDescription('');
      setFileUrl('');
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, fileUrl });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-xl w-full max-w-lg p-8 m-4"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white font-orbitron mb-6">
          {initialData ? 'Edit Notice' : 'Add New Notice'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-300">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-600 bg-slate-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-300">Description</label>
              <textarea
                id="description"
                rows={4}
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-600 bg-slate-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="fileUrl" className="block text-sm font-medium text-slate-300">Attachment URL (Optional)</label>
              <input
                type="text"
                id="fileUrl"
                value={fileUrl}
                onChange={e => setFileUrl(e.target.value)}
                placeholder="https://example.com/image.png or /document.pdf"
                className="mt-1 block w-full px-3 py-2 border border-slate-600 bg-slate-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-600 rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-slate-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-slate-900 bg-cyan-500 rounded-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900"
            >
              {initialData ? 'Save Changes' : 'Create Notice'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoticeFormModal;