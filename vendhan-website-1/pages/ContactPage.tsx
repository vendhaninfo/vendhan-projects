
import React from 'react';
import InquiryForm from '../components/InquiryForm';
import { useContent } from '../contexts/ContentContext';
import { useTheme } from '../contexts/ThemeContext';

const ContactPage: React.FC = () => {
  const { content } = useContent();
  const { isDarkMode } = useTheme();

  return (
    <div className={`py-16 md:py-24 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className="container mx-auto px-6">
        <h1 className={`text-4xl md:text-5xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>{content.contactPageTitle}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`p-8 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
            <div className="space-y-4">
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Address:</strong> {content.contactAddress}
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Phone:</strong> <a href={`tel:${content.contactPhone}`} className="hover:text-primary">{content.contactPhone}</a>
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Email:</strong> <a href={`mailto:${content.contactEmail}`} className="hover:text-primary">{content.contactEmail}</a>
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Business Hours:</strong> {content.contactBusinessHours}
              </p>
            </div>
            <div className="mt-8">
              {content.contactMapEmbedUrl ? (
                <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={content.contactMapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location"
                  ></iframe>
                </div>
              ) : (
                <div className={`w-full h-64 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Map will be displayed here.</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;