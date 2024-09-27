import Sidebar from '@/components/Sidebar/Sidebar.jsx';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '@/components/Spinners/Spinner.jsx';

const Layout = () => {

  const { isLoggedIn, isLoading, user, role } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.auth.isLoading,
    user: state.auth.user?.nome,
    role: state.auth.user?.role,
  }));

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const handleThemeChange = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return (
        <div>
          <Spinner />
        </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
      <div>
        <div className="flex">
          <Sidebar />
          <div className="w-full ml-16 md:ml-56">
            <Header user={user} handleThemeChange={handleThemeChange} isDarkMode={isDarkMode} />
            <Outlet />
          </div>
        </div>
      </div>

  );
};

export default Layout;