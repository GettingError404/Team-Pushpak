import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import AchievementsPage from './pages/AchievementsPage.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import TeamPage from './pages/TeamPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import AdminPage from './pages/AdminPage.tsx';

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
