import Sidebar from '@/components/Sidebar/Sidebar.jsx';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header.jsx';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '@/components/Spinners/Spinner.jsx';
import * as actions from '@/store/modules/auth/actions.js';

const MainLayout = () => {

  const { isLoggedIn, isLoading, user, role } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.auth.isLoading,
    user: state.auth.user?.nome,
    role: state.auth.user?.role,
  }));

  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    navigate('/');
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
    <div >
      <div className="flex">
        <Sidebar role={role} />
        <div className="flex flex-col w-full">
          <Header user={user} handleThemeChange={handleThemeChange} isDarkMode={isDarkMode} handleLogout={handleLogout} />
          <div className="flex-grow sm:p-4 bg-zinc-50 dark:bg-zinc-800">
            <Outlet />
          </div>
        </div>
      </div>
    </div>

  );
};

export default MainLayout;