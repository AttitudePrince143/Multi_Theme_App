// Header.tsx

import { useTheme } from '../theme/ThemeContext';
import { themes } from '../theme/themes';
import { Link } from 'react-router-dom';


// Fixed top header with theme dropdown and navigation links
export const Header = () => {
  const { theme, setTheme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <header
      className={`fixed top-0 w-full px-4 py-3 shadow-md z-50
      bg-white md:flex md:items-center md:justify-between
      ${currentTheme.header} ${currentTheme.headerStyle} ${currentTheme.text} ${currentTheme.font} transition-all duration-500`}
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        {/* Brand Title */}
        <div className={`text-xl ${currentTheme.headerTextStyle}`}>
          Multi-Theme App
        </div>

        {/* Responsive collapse (only on mobile) */}
        <div className="md:hidden">
          {/* Optional: You can add a hamburger menu here */}
        </div>
      </div>

      {/* Navigation and Theme Select */}
      <div className="mt-3 md:mt-0 flex flex-col md:flex-row md:items-center md:gap-6 gap-3">
        <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm md:text-base text-center md:text-left">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>


       {/* Theme Dropdown */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="p-2 rounded border bg-white text-black w-full md:w-auto"
        >
          {Object.keys(themes).map((key) => (
            <option key={key} value={key}>
              {key.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};
