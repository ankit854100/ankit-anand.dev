import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { useTheme } from 'hooks/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold">React + Tailwind Dark/Light Mode</h1>
        <p className="mt-4 text-lg">Current Theme: {theme}</p>
        <button
          onClick={toggleTheme}
          className="mt-6 px-6 py-3 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
