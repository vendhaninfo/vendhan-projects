
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useContent } from '../contexts/ContentContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { content } = useContent();
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-secondary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-primary hover:text-accent transition-colors duration-300" style={{fontFamily: "'Poppins', sans-serif"}}>
              {content.companyName}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'bg-primary text-text-on-primary'
                        : 'text-text-light hover:bg-gray-700 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-text-light hover:bg-gray-700 hover:text-white transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.706-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.464A1 1 0 106.465 13.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm-.707-10.607a1 1 0 001.414 0l.707.707a1 1 0 101.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM4 11a1 1 0 11-2 0 1 1 0 012 0H3a1 1 0 000 2h1a1 1 0 100-2H4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
