
import React from 'react';
import { AdminSection } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

interface AdminDashboardProps {
  setActiveSection: (section: AdminSection) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ setActiveSection }) => {
  const { isDarkMode } = useTheme();
  const cardBaseClass = `p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105`;
  const cardLightClass = "bg-white hover:shadow-xl";
  const cardDarkClass = "bg-gray-700 hover:shadow-2xl";
  const titleClass = `text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`;
  const descriptionClass = `text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`;
  
  const sections = [
    { id: AdminSection.ThemeSettings, title: 'Theme Settings', description: 'Customize website colors and appearance.' },
    { id: AdminSection.ContentManagement, title: 'Content Management', description: 'Edit text content across various pages.' },
    { id: AdminSection.ClientRequests, title: 'Client Requests', description: 'View and manage client inquiries.' },
  ];

  return (
    <div className="p-6">
      <h1 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map(section => (
          <div
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`${cardBaseClass} ${isDarkMode ? cardDarkClass : cardLightClass}`}
          >
            <h2 className={titleClass}>{section.title}</h2>
            <p className={descriptionClass}>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
