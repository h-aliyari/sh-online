// frontend/src/context/ThemeContext.tsx
'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isDarkMode: boolean;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
  isDarkMode: false,
  primaryColor: '#e22d5b',
  backgroundColor: '#fcfcfc',
  textColor: '#000000',
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [primaryColor, setPrimaryColor] = useState('#e22d5b');
  const [backgroundColor, setBackgroundColor] = useState('#fcfcfc');
  const [textColor, setTextColor] = useState('#000000');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme ? (storedTheme as 'light' | 'dark') : 'light';
    setTheme(initialTheme);
    setIsDarkMode(initialTheme === 'dark');

    // مقداردهی اولیه رنگ‌ها بر اساس تم
    if (initialTheme === 'dark') {
      setPrimaryColor('#e22d5b');
      setBackgroundColor('#121212');
      setTextColor('#ffffff');
    } else {
      setPrimaryColor('#e22d5b');
      setBackgroundColor('#fcfcfc');
      setTextColor('#000000');
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]); 

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsDarkMode(newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      setPrimaryColor('#e22d5b');
      setBackgroundColor('#121212');
      setTextColor('#ffffff');
    } else {
      setPrimaryColor('#e22d5b');
      setBackgroundColor('#fcfcfc');
      setTextColor('#000000');
    }
  };

  const contextValue: ThemeContextProps = {
    theme,
    toggleTheme,
    isDarkMode,
    primaryColor,
    backgroundColor,
    textColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;