import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useContent } from '../contexts/ContentContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const { content } = useContent();

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    const success = await auth.login(username, password);
    setIsSubmitting(false);
    if (success) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid username or password.');
    }
  };
  
  const inputBaseClass = `w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2`;
  const inputLightClass = "bg-gray-100 border border-gray-300 text-gray-900 focus:ring-primary focus:border-primary";
  const inputDarkClass = "bg-gray-700 border border-gray-600 text-white focus:ring-primary focus:border-primary";
  const labelBaseClass = `block text-sm font-medium mb-1`;
  const labelLightClass = "text-gray-700";
  const labelDarkClass = "text-gray-300";

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
      <div className={`max-w-md w-full space-y-8 p-10 rounded-xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: "'Poppins', sans-serif"}}>
            Admin Login
          </h2>
          <p className={`mt-2 text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Access the {content.companyName} control panel.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className={`${labelBaseClass} ${isDarkMode ? labelDarkClass : labelLightClass}`}>Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className={`${inputBaseClass} ${isDarkMode ? inputDarkClass : inputLightClass} rounded-t-md`}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className={`${labelBaseClass} ${isDarkMode ? labelDarkClass : labelLightClass} mt-4`}>Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`${inputBaseClass} ${isDarkMode ? inputDarkClass : inputLightClass} rounded-b-md`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-text-on-primary bg-primary hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out disabled:opacity-50"
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;