
import React from 'react';
import InquiryForm from '../components/InquiryForm';
import { useContent } from '../contexts/ContentContext';
import { useTheme } from '../contexts/ThemeContext';

const NewProjectPage: React.FC = () => {
  const { content } = useContent();
  const { isDarkMode } = useTheme();

  return (
    <div className={`py-16 md:py-24 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>
                {content.newProjectPageTitle}
            </h1>
            <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                {content.newProjectPageSubtitle}
            </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};

export default NewProjectPage;
