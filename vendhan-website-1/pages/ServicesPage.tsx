import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { INITIAL_SERVICES, PlaceholderIcon } from '../constants';
import { Service } from '../types';
import { useTheme } from '../contexts/ThemeContext';

const DetailedServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 md:p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-start gap-6 md:gap-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 hover:shadow-2xl`}>
      {/* Image/Icon Container */}
      <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 h-52 md:h-auto md:aspect-[4/3] rounded-lg overflow-hidden">
        {service.imageUrl ? (
          <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
        ) : service.icon ? (
          <div className={`w-full h-full flex items-center justify-center p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            {React.cloneElement(service.icon, { className: `w-20 h-20 text-primary` })}
          </div>
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <PlaceholderIcon className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>
      
      {/* Text Content */}
      <div className="w-full md:w-2/3 lg:w-3/4 mt-4 md:mt-0">
        <h3 className={`text-xl md:text-2xl font-semibold mb-2 md:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base leading-relaxed`}>{service.description}</p>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const { content } = useContent();
  const { isDarkMode, theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={`py-16 md:py-24 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-6">
        <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>{content.servicesPageTitle}</h1>

        {/* Featured Section START */}
        <section className={`text-center mb-16 md:mb-20`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>
            {content.servicesPageFeaturedTitle}
          </h2>
          <p className={`text-md md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {content.servicesPageFeaturedSubtitle}
          </p>
          <div className={`max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <img 
              src={content.servicesPageFeaturedImageUrl || 'https://picsum.photos/seed/service_banner_fallback/1200/400'} 
              alt="Our approach to business challenges" 
              className="w-full h-auto md:max-h-[450px] object-cover"
            />
          </div>
        </section>
        {/* Featured Section END */}

        {/* Service List Section */}
        <section className="mb-16 md:mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>
            Our Core Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {INITIAL_SERVICES.map((service) => (
              <DetailedServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Client Approach Section START */}
        <section 
          className="py-16 md:py-20 rounded-xl shadow-2xl text-center"
          style={{ background: `linear-gradient(135deg, ${theme.primary} 0%, ${isDarkMode ? theme.secondary : theme.accent} 100%)`}}
          >
          <div className="container mx-auto px-6">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-text-on-primary`} style={{fontFamily: "'Poppins', sans-serif"}}>
              {content.servicesPageApproachTitle}
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-text-on-primary`}>
              {content.servicesPageApproachSubtitle}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className={`bg-white text-primary font-semibold py-3 px-10 rounded-lg hover:bg-opacity-90 transition duration-300 text-lg transform hover:scale-105 shadow-lg`}
            >
              {content.servicesPageApproachButtonText}
            </button>
          </div>
        </section>
        {/* Client Approach Section END */}

      </div>
    </div>
  );
};

export default ServicesPage;