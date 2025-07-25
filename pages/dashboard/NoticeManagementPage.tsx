import React, { useState, useCallback } from 'react';
import type { Notice } from '../../types';
import { useApi } from '../../hooks/useApi';
import apiClient from '../../services/apiClient';
import NoticeList from '../../components/notice/NoticeList';
import NoticeFormModal from '../../components/notice/NoticeFormModal';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ErrorMessage from '../../components/ui/ErrorMessage';

const NoticeManagementPage: React.FC = () => {
  const { data: notices, loading, error, fetchData } = useApi<Notice[]>('/api/notices');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);

  const handleOpenAddModal = () => {
    setEditingNotice(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (notice: Notice) => {
    setEditingNotice(notice);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingNotice(null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      try {
        await apiClient.delete(`/api/notices/${id}`);
        fetchData(); // Refetch notices after deleting
      } catch (err: any) {
        alert(`Failed to delete notice: ${err.message}`);
      }
    }
  };

  const handleSubmit = async (formData: Omit<Notice, '_id' | 'date' | 'createdBy'>) => {
    try {
      if (editingNotice) {
        await apiClient.put(`/api/notices/${editingNotice._id}`, formData);
      } else {
        await apiClient.post('/api/notices', formData);
      }
      fetchData(); // Refetch notices after creating/updating
      handleCloseModal();
    } catch (err: any) {
      alert(`Failed to save notice: ${err.message}`);
    }
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-4xl font-bold text-white font-orbitron">Manage Notices</h1>
            <p className="text-lg text-cyan-400 mt-1">Create, edit, and delete team announcements.</p>
        </div>
         <button
            onClick={handleOpenAddModal}
            className="bg-cyan-500 text-slate-900 font-bold px-5 py-2 rounded-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            + Add Notice
          </button>
      </div>
      
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage title="Failed to load notices" error={error} />}
      {notices && (
        <NoticeList
          notices={notices}
          onEdit={handleOpenEditModal}
          onDelete={handleDelete}
        />
      )}
      
      {isModalOpen && (
        <NoticeFormModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          initialData={editingNotice}
        />
      )}
    </div>
  );
};

export default NoticeManagementPage;