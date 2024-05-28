import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MenuAdmin from '../../components/Navs/MenuAdmin';
import InputSearch from '../../components/Inputs/InputSearch';
import AdminCardTop from '../../components/CardsContainers/AdminCardTop';

export default function DashboardAdm() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  /*
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }*/
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-50 flex">
        <MenuAdmin />
        <main className="flex-1 p-4">
          <AdminCardTop />
        </main>
      </div>
    </>
  );
}
