import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import MenuAdmin from '../../../components/Navs/MenuAdmin.jsx';
import AdminCard from '../../../components/CardsContainers/AdminCard.jsx';

export default function AdminDashboard() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

 // if (!isLoggedIn) {
   // return <Navigate to="/login" replace />;
  //}
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-50 flex">
        <MenuAdmin
          selectDashboard={'bg-[#B4ADEA] border-r-2 border-l-2 border-purplePrimary'}
          textSelectedDashboard={'text-purplePrimary'}
          fillSelectedDashobard={'#820ad1'}
        />
        <main className="flex-1 p-4">
          <AdminCard />
        </main>
      </div>
    </>
  );
}
