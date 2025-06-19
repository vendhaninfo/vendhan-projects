
import React, { useState }  from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ThemeColors } from '../../types';

const ThemeSettings: React.FC = () => {
  const { theme, setTheme, isDarkMode } = useTheme();
  const [localTheme, setLocalTheme] = useState<ThemeColors>(theme);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalTheme(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setTheme(localTheme);
    alert('Theme settings saved!');
  };
  
  const inputGroupClass = "mb-6";
  const labelClass = `block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`;
  const inputClass = `w-full p-2 border rounded-md shadow-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`;
  const colorInputClass = `w-16 h-10 p-0 border-none rounded-md cursor-pointer ${inputClass}`;


  return (
    <div className={`p-6 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Theme Color Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(Object.keys(localTheme) as Array<keyof ThemeColors>).map((key) => (
          <div key={key} className={inputGroupClass}>
            <label htmlFor={key} className={labelClass}>
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                id={`${key}-color`}
                name={key}
                value={localTheme[key]}
                onChange={handleChange}
                className={colorInputClass}
              />
              <input
                type="text"
                id={key}
                name={key}
                value={localTheme[key]}
                onChange={handleChange}
                className={`${inputClass} flex-grow`}
                placeholder="#RRGGBB"
              />
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={handleSave} 
        className="mt-8 w-full bg-primary text-text-on-primary font-semibold py-3 px-6 rounded-lg hover:bg-opacity-80 transition duration-300"
      >
        Save Theme
      </button>
    </div>
  );
};

export default ThemeSettings;
