
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { ThemeColors } from '../types';
import { INITIAL_THEME } from '../constants';

interface ThemeContextType {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeColors>(() => {
    const storedTheme = localStorage.getItem('vendhanTheme');
    return storedTheme ? JSON.parse(storedTheme) : INITIAL_THEME;
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedDarkMode = localStorage.getItem('vendhanDarkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  const applyThemeToDOM = useCallback((currentTheme: ThemeColors) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', currentTheme.primary);
    root.style.setProperty('--secondary-color', currentTheme.secondary);
    root.style.setProperty('--accent-color', currentTheme.accent);
    root.style.setProperty('--background-light-color', currentTheme.backgroundLight);
    root.style.setProperty('--background-dark-color', currentTheme.backgroundDark);
    root.style.setProperty('--text-light-color', currentTheme.textLight);
    root.style.setProperty('--text-dark-color', currentTheme.textDark);
    root.style.setProperty('--text-on-primary-color', currentTheme.textOnPrimary);
  }, []);

  useEffect(() => {
    applyThemeToDOM(theme);
    localStorage.setItem('vendhanTheme', JSON.stringify(theme));
  }, [theme, applyThemeToDOM]);

  useEffect(() => {
    document.body.classList.toggle('theme-dark', isDarkMode);
    document.body.classList.toggle('theme-light', !isDarkMode);
    localStorage.setItem('vendhanDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  
  const setTheme = (newTheme: ThemeColors) => {
    setThemeState(newTheme);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
