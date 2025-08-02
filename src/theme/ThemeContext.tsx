import { createContext, useContext, useEffect, useState } from 'react';
import { themes, ThemeType } from './themes';



// Context type definition
type ThemeContextType = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};


// Default context value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1', // default theme
  setTheme: () => {}, // placeholder function
});


// ThemeProvider wraps the app and provides the current theme state
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  // Initialize theme from localStorage or default to 'theme1'
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem('app-theme') as ThemeType) || 'theme1';
  });



  // Persist theme change to localStorage
  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming theme context
export const useTheme = () => useContext(ThemeContext);
