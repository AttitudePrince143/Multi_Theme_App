// Footer.tsx

import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';


// Footer shown at bottom of the page
export const Footer = () => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <footer
      className={`p-4 text-center transition-all duration-500 
      ${currentTheme.footer} ${currentTheme.text} ${currentTheme.font}`}
    >
      <p>&copy; 2025 Multi-Theme App. All rights reserved.</p>
    </footer>
  );
};
