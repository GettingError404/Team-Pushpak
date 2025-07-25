

import React from 'react';

export interface Drone {
  name: string;
  type: 'Hexacopter' | 'Quadcopter';
  imageUrl: string;
  description: string;
  specs: {
    flightTime: string;
    payload: string;
    controller: string;
  };
}

export interface Technology {
  name: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Notice {
  _id: string;
  title: string;
  description: string;
  fileUrl?: string;
  date: string;
  createdBy: {
    name: string;
  };
}

export type ProjectCategory = 'Hexacopter' | 'Quadcopter' | 'AI Integration' | 'Software';

export interface Project {
  _id: string;
  title: string;
  description: string;
  timeline: string;
  status: 'Active' | 'Completed' | 'Archived';
  category: ProjectCategory;
  contributors: {
    _id: string;
    name: string;
    role: string;
  }[];
  media: string[];
  githubLink?: string;
  pdfLink?: string;
}

export type ProjectFormData = Omit<Project, '_id' | 'contributors'> & {
  contributors: string[];
};

export interface UserForList {
  _id: string;
  name: string;
}


export interface AuthenticatedUser {
  id: string;
  name: string;
  role: 'Admin' | 'Head' | 'Member' | 'New Bee';
}