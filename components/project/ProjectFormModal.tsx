import React, { useState, useEffect } from 'react';
import type { Project, UserForList, ProjectCategory, ProjectFormData } from '../../types';
import { useApi } from '../../hooks/useApi';

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ProjectFormData) => void;
  initialData: Project | null;
}

const CATEGORIES: ProjectCategory[] = ['Hexacopter', 'Quadcopter', 'AI Integration', 'Software'];
const STATUSES: Project['status'][] = ['Active', 'Completed', 'Archived'];

const ProjectFormModal: React.FC<ProjectFormModalProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    description: '',
    timeline: '',
    category: 'Hexacopter',
    status: 'Active',
    contributors: [],
    media: [],
    githubLink: '',
    pdfLink: '',
  });

  const { data: users, loading: usersLoading } = useApi<UserForList[]>('/api/users');

  useEffect(() => {
    if (initialData) {
        setFormData({
            title: initialData.title,
            description: initialData.description,
            timeline: initialData.timeline,
            category: initialData.category,
            status: initialData.status,
            contributors: initialData.contributors.map(c => c._id),
            media: initialData.media,
            githubLink: initialData.githubLink || '',
            pdfLink: initialData.pdfLink || '',
        });
    } else {
      setFormData({
        title: '',
        description: '',
        timeline: '',
        category: 'Hexacopter',
        status: 'Active',
        contributors: [],
        media: [],
        githubLink: '',
        pdfLink: '',
      });
    }
  }, [initialData, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleContributorsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, contributors: selectedIds }));
  }

  const handleMediaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const mediaUrls = e.target.value.split('\n').map(url => url.trim()).filter(Boolean);
    setFormData(prev => ({ ...prev, media: mediaUrls }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-slate-800 rounded-lg shadow-xl w-full max-w-2xl p-8 m-4 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-white font-orbitron mb-6">
          {initialData ? 'Edit Project' : 'Add New Project'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <Input label="Title" name="title" value={formData.title} onChange={handleChange} required />
          <Textarea label="Description" name="description" value={formData.description} onChange={handleChange} required rows={3} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Timeline" name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g., Jan 2024 - Present" required />
            <Select label="Category" name="category" value={formData.category} onChange={handleChange} options={CATEGORIES} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select label="Status" name="status" value={formData.status} onChange={handleChange} options={STATUSES} />
            <SelectMultiple label="Contributors" name="contributors" value={formData.contributors} onChange={handleContributorsChange} options={users || []} loading={usersLoading} />
          </div>

          <Textarea label="Media URLs" name="media" value={formData.media.join('\n')} onChange={handleMediaChange} placeholder="Enter one image/video URL per line" rows={3}/>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="GitHub Link (Optional)" name="githubLink" value={formData.githubLink} onChange={handleChange} />
            <Input label="PDF Link (Optional)" name="pdfLink" value={formData.pdfLink} onChange={handleChange} />
          </div>
          
          <div className="mt-8 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-600 rounded-md hover:bg-slate-500">Cancel</button>
            <button type="submit" className="px-4 py-2 text-sm font-medium text-slate-900 bg-cyan-500 rounded-md hover:bg-cyan-400">
              {initialData ? 'Save Changes' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Reusable Form Components ---

const inputStyles = "mt-1 block w-full px-3 py-2 border border-slate-600 bg-slate-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm";

const Input: React.FC<any> = ({ label, ...props }) => (
    <div>
        <label htmlFor={props.id || props.name} className="block text-sm font-medium text-slate-300">{label}</label>
        <input {...props} className={inputStyles} />
    </div>
);

const Textarea: React.FC<any> = ({ label, ...props }) => (
    <div>
        <label htmlFor={props.id || props.name} className="block text-sm font-medium text-slate-300">{label}</label>
        <textarea {...props} className={inputStyles} />
    </div>
);

const Select: React.FC<any> = ({ label, options, ...props }) => (
    <div>
        <label htmlFor={props.id || props.name} className="block text-sm font-medium text-slate-300">{label}</label>
        <select {...props} className={inputStyles}>
            {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>
);

const SelectMultiple: React.FC<any> = ({ label, options, loading, ...props }) => (
    <div>
        <label htmlFor={props.id || props.name} className="block text-sm font-medium text-slate-300">{label}</label>
        <select multiple {...props} className={`${inputStyles} h-24`}>
            {loading && <option>Loading users...</option>}
            {options.map((opt: UserForList) => <option key={opt._id} value={opt._id}>{opt.name}</option>)}
        </select>
    </div>
);


export default ProjectFormModal;