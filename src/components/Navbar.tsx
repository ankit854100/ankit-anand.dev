import React, { useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.offsetTop - 100; // Adjust for navbar height
      const startPosition = window.scrollY;

      animate(startPosition, targetPosition, {
        type: 'tween',
        duration: 1.2, // Smooth scrolling duration
        ease: 'easeInOut',
        onUpdate: (value) => window.scrollTo(0, value),
      });
    }
  };

  const menuItems = ['HOME', 'SKILLS', 'EXPERIENCE', 'ABOUT', 'CONTACT'];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-md border-b-4 border-black dark:border-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center bg-yellow-300 dark:bg-yellow-500 px-3 py-1 border-2 border-b-4 border-r-4 border-black dark:border-white rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-extrabold text-black dark:text-white text-2xl tracking-wide">
            Ankit.dev
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => handleScrollToSection(item.toLowerCase())} // Call function
              className="relative font-bold text-black dark:text-white text-lg tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative z-10">{item}</span>
              {/* Hover Background Animation */}
              <motion.div
                className="absolute inset-0 bg-pink-300 dark:bg-pink-400 z-0 rounded-md"
                style={{ height: '120%', width: '120%', transform: 'scale(0)' }}
                whileHover={{
                  transform: 'scale(1)',
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
              ></motion.div>
            </motion.a>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-black dark:bg-white w-8 h-0.5"></div>
            <div className="bg-black dark:bg-white w-8 h-0.5"></div>
            <div className="bg-black dark:bg-white w-8 h-0.5"></div>
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-black border-t-2 border-black dark:border-white"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <ul className="flex flex-col items-center space-y-6 py-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                className="font-bold text-black dark:text-white hover:text-pink-400 dark:hover:text-pink-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration: 0.15, delay: index * 0 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
