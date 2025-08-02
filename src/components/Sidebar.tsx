// Sidebar.tsx

import { useTheme } from '../theme/ThemeContext';
import { motion } from 'framer-motion';
import React from 'react';

interface SidebarProps {
  onClose?: () => void;
}


// Sidebar component used for Theme 2 with navigation and theme switch
export function Sidebar({ onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'theme1' | 'theme2' | 'theme3');
  };

  return (
    <div className="fixed inset-0 z-50 flex md:static md:h-full">
      {/* Overlay */}
      {onClose && (
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black bg-opacity-50 md:hidden"
        />
      )}

      {/* Animated Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="relative z-50 w-64 h-full p-4 text-white bg-gray-800 flex flex-col justify-between shadow-lg"
      >
        {/* Close button on mobile */}
        {onClose && (
          <button
            className="md:hidden mb-4 text-white text-2xl self-end"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        )}

        <nav className="space-y-4">
          <a href="#/" className="block hover:underline">Home</a>
          <a href="#/about" className="block hover:underline">About</a>
          <a href="#/contact" className="block hover:underline">Contact</a>
        </nav>

        <div className="mt-8">
          <label className="block mb-1 text-sm">Theme:</label>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
          >
            <option value="theme1">Light (Theme 1)</option>
            <option value="theme2">Dark Sidebar (Theme 2)</option>
            <option value="theme3">Colorful (Theme 3)</option>
          </select>
        </div>
      </motion.div>
    </div>
  );
}
