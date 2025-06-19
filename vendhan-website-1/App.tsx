
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage'; 
import NewProjectPage from './pages/NewProjectPage'; // Import NewProjectPage
import ProtectedRoute from './components/auth/ProtectedRoute'; 
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ContentProvider } from './contexts/ContentContext';
import { InquiryProvider } from './contexts/InquiryContext';
import { AuthProvider } from './contexts/AuthContext'; 

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme(); 
  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-background-dark text-text-light' : 'bg-background-light text-text-dark'}`}>
      <Navbar />
      <main className="flex-grow pt-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/new-project" element={<NewProjectPage />} /> {/* Added New Project Route */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ContentProvider>
        <InquiryProvider>
          <AuthProvider> 
            <HashRouter>
              <AppContent />
            </HashRouter>
          </AuthProvider>
        </InquiryProvider>
      </ContentProvider>
    </ThemeProvider>
  );
};

export default App;