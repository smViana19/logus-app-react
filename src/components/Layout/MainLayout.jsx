import Sidebar from '@/components/Sidebar/Sidebar.jsx';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header/Header.jsx';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '@/components/Spinners/Spinner.jsx';
import * as actions from '@/store/modules/auth/actions.js';
import { showDialog } from '../Dialog/Dialog';

const MainLayout = () => {

  const { isLoggedIn, isLoading, user, role } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.auth.isLoading,
    user: state.auth.user?.nome,
    role: state.auth.user?.role,
  }));

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
    showDialog({
      text: "Deseja mesmo sair?",
      confirmButtonText: "Sim, sair",
      cancelButtonText: "Não, cancelar",
      onConfirm: () => {
        dispatch(actions.loginFailure());
        navigate('/');
      }
    })
  };
  const toggleSidebar = () => setIsSidebarOpen((prevState) => !prevState);

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
    <div className="flex h-screen overflow-hidden">
      <Sidebar user={user} role={role} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} handleLogout={handleLogout} />
      <div className="flex flex-col w-full">
        <Header
          user={user.nome}
          handleThemeChange={handleThemeChange}
          isDarkMode={isDarkMode}
          handleLogout={handleLogout}
        />
        <main className="flex-grow bg-zinc-50 dark:bg-zinc-800 p-4">
          <Outlet />
        </main>
      </div>
    </div>

  );
};

export default MainLayout;