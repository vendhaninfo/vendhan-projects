
import React from 'react';
import { Project } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
        <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
        {project.client && <p className={`text-xs mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}><strong>Client:</strong> {project.client}</p>}
        {project.year && <p className={`text-xs mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}><strong>Year:</strong> {project.year}</p>}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-accent text-white px-3 py-1 text-xs rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
