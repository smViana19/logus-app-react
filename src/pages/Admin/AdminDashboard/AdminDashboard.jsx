import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MenuAdmin from '../../../components/Navs/MenuAdmin.jsx';
import AdminCard from '../../../components/CardsContainers/AdminCard.jsx';

export default function AdminDashboard() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className='p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300'>
      aaa
    </div>
  );
}
