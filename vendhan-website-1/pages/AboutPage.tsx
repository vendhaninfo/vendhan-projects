
import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { useTheme } from '../contexts/ThemeContext';

const AboutPage: React.FC = () => {
  const { content } = useContent();
  const { isDarkMode } = useTheme();

  const imageBaseUrl = "https://picsum.photos/seed";
  const aboutImages = [
    { src: `${imageBaseUrl}/teamwork_vendhan_women/400/300`, alt: "Collaborative Team at Vendhan Info Tech" },
    { src: `${imageBaseUrl}/innovation_vendhan_women/400/300`, alt: "Innovative Solutions by Vendhan Info Tech" },
    { src: `${imageBaseUrl}/tech_vendhan_women/400/300`, alt: "Technology Focus at Vendhan Info Tech" },
  ];

  return (
    <div className={`py-16 md:py-24 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-6">
        <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>{content.aboutPageTitle}</h1>
        <div className={`max-w-4xl mx-auto p-8 md:p-10 rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
          
          <div className={`mb-8 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
            <div className="flex flex-col sm:flex-row justify-around items-center gap-4">
              {aboutImages.map((image, index) => (
                <img 
                  key={index}
                  src={image.src} 
                  alt={image.alt} 
                  className="rounded-lg shadow-lg w-full sm:w-1/3 h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            {content.aboutPageParagraph1}
          </p>
          <p className="text-lg leading-relaxed">
            {content.aboutPageParagraph2}
          </p>
           <div className="mt-10 pt-8 border-t border-gray-300 dark:border-gray-700">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{content.aboutPageMissionTitle}</h2>
            <p className="text-md leading-relaxed">
              {content.aboutPageMissionText}
            </p>
            <h2 className={`text-2xl font-semibold mt-6 mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{content.aboutPageVisionTitle}</h2>
            <p className="text-md leading-relaxed">
              {content.aboutPageVisionText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
