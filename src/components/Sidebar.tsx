import { useTheme } from '../theme/ThemeContext';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'theme1' | 'theme2' | 'theme3');
  };

  return (
    <div className="h-full p-4 text-white bg-gray-800 flex flex-col justify-between">
      <div>
        {/* Close button on mobile */}
        {onClose && (
          <button className="md:hidden mb-4 text-white text-xl" onClick={onClose}>
            ✕
          </button>
        )}

        <nav className="space-y-4">
          <a href="#/" className="block hover:underline">Home</a>
          <a href="#/about" className="block hover:underline">About</a>
          <a href="#/contact" className="block hover:underline">Contact</a>
        </nav>
      </div>

      {/* Theme switcher */}
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
    </div>
  );
}
