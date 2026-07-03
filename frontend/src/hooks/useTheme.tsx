// frontend\src\hooks\useTheme.tsx
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

interface UseThemeResult {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  isDarkMode: boolean;
}

const useTheme = (): UseThemeResult => {
  const { primaryColor, backgroundColor, textColor, isDarkMode } = useContext(ThemeContext);

  return {
    primaryColor,
    backgroundColor,
    textColor,
    isDarkMode
  };
};

export default useTheme;