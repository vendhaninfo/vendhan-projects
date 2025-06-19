
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { INITIAL_PROJECTS } from '../constants';
import { useContent } from '../contexts/ContentContext';
import { useTheme } from '../contexts/ThemeContext';

const PortfolioPage: React.FC = () => {
  const { content } = useContent();
  const { isDarkMode } = useTheme();

  return (
    <div className={`py-16 md:py-24 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-6">
        <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>{content.portfolioPageTitle}</h1>
        {INITIAL_PROJECTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {INITIAL_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className={`text-center text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Our project portfolio is currently being updated. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
