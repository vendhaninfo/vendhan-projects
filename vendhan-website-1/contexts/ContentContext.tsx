
import React, { createContext, useState, useEffect, useContext } from 'react';
import { SiteContent } from '../types';
import { INITIAL_SITE_CONTENT } from '../constants';

interface ContentContextType {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  updateContentField: <K extends keyof SiteContent>(field: K, value: SiteContent[K]) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContentState] = useState<SiteContent>(() => {
    const storedContent = localStorage.getItem('vendhanSiteContent');
    return storedContent ? JSON.parse(storedContent) : INITIAL_SITE_CONTENT;
  });

  useEffect(() => {
    localStorage.setItem('vendhanSiteContent', JSON.stringify(content));
  }, [content]);

  const setContent = (newContent: SiteContent) => {
    setContentState(newContent);
  };

  const updateContentField = <K extends keyof SiteContent,>(field: K, value: SiteContent[K]) => {
    setContentState(prevContent => ({
      ...prevContent,
      [field]: value,
    }));
  };

  return (
    <ContentContext.Provider value={{ content, setContent, updateContentField }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
