// App.tsx

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { useTheme } from './theme/ThemeContext';
import { themes } from './theme/themes';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';


// Wrapper for page transitions
// Animate page transitions
function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}


// Main application content that handles routing, layout, and theming
function AppContent() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const isSidebar = theme === 'theme2';
  const location = useLocation();

  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div
      className={`${currentTheme.background} ${currentTheme.text} ${currentTheme.font} min-h-screen flex flex-col transition-all duration-500`}
    >
      {isSidebar ? (
        <>
          {/* Mobile toggle button */}
          <button
            className="md:hidden p-4 text-2xl"
            onClick={() => setShowMobileSidebar(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>

          {/* Sidebar for desktop */}
          <div className="hidden md:block fixed left-0 top-0 h-full w-64 z-40">
            <Sidebar />
          </div>

          {/* Sidebar for mobile with overlay */}
          <AnimatePresence>
            {showMobileSidebar && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/50 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowMobileSidebar(false)}
                />
                <motion.div
                  className="fixed top-0 left-0 w-64 h-full bg-gray-800 z-50"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                >
                  <Sidebar onClose={() => setShowMobileSidebar(false)} />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Header />
      )}

      {/* Main content area */}
      <main className={`${isSidebar ? 'md:ml-64 p-4 pt-6' : 'pt-24 px-4'} flex-grow`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransitionWrapper><Home /></PageTransitionWrapper>} />
            <Route path="/about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
            <Route path="/contact" element={<PageTransitionWrapper><Contact /></PageTransitionWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer only visible when header is shown (non-sidebar theme) */}
      {!isSidebar && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
