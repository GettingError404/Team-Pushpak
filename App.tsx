import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './src/components/Header.tsx';
import Footer from './src/components/Footer.tsx';
import HomePage from './src/pages/HomePage.tsx';
import ProjectsPage from './src/pages/ProjectsPage.tsx';
import AboutPage from './src/pages/AboutPage.tsx';
import ContactPage from './src/pages/ContactPage.tsx';
import AchievementsPage from './src/pages/AchievementsPage.tsx';
import GalleryPage from './src/pages/GalleryPage.tsx';
import TeamPage from './src/pages/TeamPage.tsx';
import LoginPage from './src/pages/LoginPage.tsx';
import AdminPage from './src/pages/AdminPage.tsx';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* A conceptual protected route for the admin dashboard */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;