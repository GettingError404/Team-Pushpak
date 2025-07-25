import React, { useState } from 'react';
import type { Project, ProjectFormData } from '../../types';
import { useApi } from '../../hooks/useApi';
import apiClient from '../../services/apiClient';
import ProjectList from '../../components/project/ProjectList';
import ProjectFormModal from '../../components/project/ProjectFormModal';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ErrorMessage from '../../components/ui/ErrorMessage';

const ProjectManagementPage: React.FC = () => {
  const { data: projects, loading, error, fetchData } = useApi<Project[]>('/api/projects');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const handleOpenAddModal = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      try {
        await apiClient.delete(`/api/projects/${id}`);
        fetchData();
      } catch (err: any) {
        alert(`Failed to delete project: ${err.message}`);
      }
    }
  };

  const handleSubmit = async (formData: ProjectFormData) => {
    try {
      if (editingProject) {
        await apiClient.put(`/api/projects/${editingProject._id}`, formData);
      } else {
        await apiClient.post('/api/projects', formData);
      }
      fetchData();
      handleCloseModal();
    } catch (err: any) {
      alert(`Failed to save project: ${err.message}`);
    }
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-4xl font-bold text-white font-orbitron">Manage Projects</h1>
            <p className="text-lg text-cyan-400 mt-1">Add, edit, and update team projects.</p>
        </div>
         <button
            onClick={handleOpenAddModal}
            className="bg-cyan-500 text-slate-900 font-bold px-5 py-2 rounded-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            + Add Project
          </button>
      </div>
      
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage title="Failed to load projects" error={error} />}
      {projects && (
        <ProjectList
          projects={projects}
          onEdit={handleOpenEditModal}
          onDelete={handleDelete}
        />
      )}
      
      {isModalOpen && (
        <ProjectFormModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          initialData={editingProject}
        />
      )}
    </div>
  );
};

export default ProjectManagementPage;