
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { useContent } from '../contexts/ContentContext';
import { INITIAL_SERVICES } from '../constants';
import { Service } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { UserGroupIcon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline'; // Example icons

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`p-8 rounded-xl shadow-xl text-center transform hover:-translate-y-2 transition-transform duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {service.icon && React.cloneElement(service.icon, { className: `w-16 h-16 text-primary mx-auto mb-6` })}
      <h3 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
    </div>
  );
};

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`p-6 rounded-lg shadow-lg text-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className={`w-12 h-12 mx-auto mb-4 text-primary`}>{icon}</div>
      <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{description}</p>
    </div>
  );
};


const HomePage: React.FC = () => {
  const { content } = useContent();
  const { isDarkMode, theme } = useTheme();
  const navigate = useNavigate();

  const features = [
    { title: content.homeFeature1Title, description: content.homeFeature1Desc, icon: <UserGroupIcon /> },
    { title: content.homeFeature2Title, description: content.homeFeature2Desc, icon: <AcademicCapIcon /> },
    { title: content.homeFeature3Title, description: content.homeFeature3Desc, icon: <SparklesIcon /> },
  ];

  return (
    <div>
      <HeroSection
        title={content.homeHeroTitle}
        subtitle={content.homeHeroSubtitle}
        buttonText={content.homeHeroButtonText}
        buttonLink="/services"
        imageUrl="https://picsum.photos/seed/vendhan-hero-empower/1920/1080"
      />

      {/* Location and Careers Snippet */}
      <section className={`py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{content.homeLocationText}</p>
          <p 
            className={`text-md cursor-pointer ${isDarkMode ? 'text-accent hover:text-primary' : 'text-accent hover:text-primary'} transition-colors`}
            onClick={() => navigate('/contact')} // Or a dedicated careers page if available
          >
            {content.homeCareersText}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={`py-16 md:py-24 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>{content.homeFeatureSectionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </div>
      </section>


      <section className={`py-16 md:py-24 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>{content.homeServicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INITIAL_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* New Project Approach CTA Section START */}
      <section className={`py-16 md:py-20 ${isDarkMode ? 'bg-secondary' : 'bg-secondary'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-text-on-primary`} style={{fontFamily: "'Poppins', sans-serif"}}>
            {content.homeProjectApproachTitle}
          </h2>
          <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-gray-300`}>
            {content.homeProjectApproachSubtitle}
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-primary text-text-on-primary font-semibold py-3 px-10 rounded-lg hover:bg-opacity-80 transition duration-300 text-lg transform hover:scale-105 shadow-md"
          >
            {content.homeProjectApproachButtonText}
          </button>
        </div>
      </section>
      {/* New Project Approach CTA Section END */}
      
      {/* Existing Call to Action section - Updated to use navigate */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ready to Start Your Next Project?</h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Let's discuss how {content.companyName} can help you achieve your business goals.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-accent text-white font-semibold py-3 px-10 rounded-lg hover:bg-opacity-80 transition duration-300 text-lg"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
