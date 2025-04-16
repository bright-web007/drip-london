'use client';
import React, { createContext, useState, ReactNode } from 'react';

interface AppContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return <AppContext.Provider value={{ theme, toggleTheme }}>{children}</AppContext.Provider>;
};
