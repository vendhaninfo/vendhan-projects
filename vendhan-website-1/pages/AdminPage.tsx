import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../components/admin/AdminDashboard';
import ThemeSettings from '../components/admin/ThemeSettings';
import ContentEditor from '../components/admin/ContentEditor';
import InquiryList from '../components/admin/InquiryList';
import { AdminSection } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth

const AdminPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>(AdminSection.Dashboard);
  const { isDarkMode } = useTheme();
  const { logout } = useAuth(); // Get logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  const renderSection = () => {
    switch (activeSection) {
      case AdminSection.ThemeSettings:
        return <ThemeSettings />;
      case AdminSection.ContentManagement:
        return <ContentEditor />;
      case AdminSection.ClientRequests:
        return <InquiryList />;
      case AdminSection.Dashboard:
      default:
        return <AdminDashboard setActiveSection={setActiveSection} />;
    }
  };

  const NavButton: React.FC<{section?: AdminSection, label: string, onClick?: () => void}> = ({section, label, onClick}) => (
     <button
        onClick={onClick || (() => section && setActiveSection(section))}
        className={`px-4 py-3 rounded-md text-sm font-medium transition-colors duration-300 w-full text-left
          ${!onClick && activeSection === section 
            ? 'bg-primary text-text-on-primary' 
            : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-200'}`}`}
      >
        {label}
    </button>
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-background-dark text-text-light' : 'bg-background-light text-text-dark'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className={`w-full md:w-1/4 p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} self-start`}>
            <h2 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Admin Menu</h2>
            <nav className="space-y-3">
              <NavButton section={AdminSection.Dashboard} label="Dashboard" />
              <NavButton section={AdminSection.ThemeSettings} label="Theme Settings" />
              <NavButton section={AdminSection.ContentManagement} label="Content Management" />
              <NavButton section={AdminSection.ClientRequests} label="Client Requests" />
              <div className="pt-4 mt-4 border-t border-gray-300 dark:border-gray-700">
                <NavButton 
                    label="Logout" 
                    onClick={handleLogout}
                />
              </div>
            </nav>
          </aside>
          <main className="w-full md:w-3/4">
            {renderSection()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;