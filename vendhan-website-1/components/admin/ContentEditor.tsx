
import React, { useState } from 'react';
import { useContent } from '../../contexts/ContentContext';
import { SiteContent } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';

const ContentEditor: React.FC = () => {
  const { content, setContent } = useContent();
  const [localContent, setLocalContent] = useState<SiteContent>(content);
  const { isDarkMode } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocalContent(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setContent(localContent);
    alert('Content saved!');
  };

  const inputGroupClass = "mb-6";
  const labelClass = `block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`;
  const inputClass = `w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-primary' : 'bg-white border-gray-300 text-gray-900 focus:border-primary'}`;
  const textareaClass = `${inputClass} min-h-[100px]`;


  return (
    <div className={`p-6 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Edit Site Content</h2>
      <div className="space-y-6">
        {(Object.keys(localContent) as Array<keyof SiteContent>).map((key) => (
          <div key={key} className={inputGroupClass}>
            <label htmlFor={key} className={labelClass}>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
            {key.toLowerCase().includes('paragraph') || key.toLowerCase().includes('subtitle') || key.toLowerCase().includes('details') || key.toLowerCase().includes('text') ? (
              <textarea
                id={key}
                name={key}
                value={localContent[key]}
                onChange={handleChange}
                className={textareaClass}
              />
            ) : (
              <input
                type="text"
                id={key}
                name={key}
                value={localContent[key]}
                onChange={handleChange}
                className={inputClass}
              />
            )}
          </div>
        ))}
      </div>
      <button 
        onClick={handleSave} 
        className="mt-8 w-full bg-primary text-text-on-primary font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition duration-300"
      >
        Save Content
      </button>
    </div>
  );
};

export default ContentEditor;
