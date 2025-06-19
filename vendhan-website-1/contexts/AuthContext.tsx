import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { AuthContextType } from '../types';
import { ADMIN_USERNAME, ADMIN_PASSWORD } from '../constants';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // To check initial auth status

  useEffect(() => {
    // Check initial auth status from localStorage
    const storedAuth = localStorage.getItem('vendhanAdminAuth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (username_param: string, password_param: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500)); 
    if (username_param === ADMIN_USERNAME && password_param === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('vendhanAdminAuth', 'true');
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem('vendhanAdminAuth');
    // Potentially redirect here or let the component calling logout handle it
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};