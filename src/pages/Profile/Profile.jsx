import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../../components/Navs/NavLink.jsx';
import Navbar from '@/components/Navs/NavBar.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Buttons/LogoutButton.jsx';
import MenuMobile from '../../components/Navs/MenuMobile.jsx';
import CardProfile from '../../components/CardsContainers/Profile/CardProfile.jsx';
import RowNota from '../../components/CardsContainers/Profile/RowNota.jsx';

export default function Dashboard() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const role = useSelector(state => state.auth.user?.role);
  const user = useSelector(state => state.auth.user?.nome);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const [openCardId, setOpenCardId] = useState(null);

  // Função para alternar o estado do card
  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };


  return (
      <>
        <div className="h-screen bg-gray-50 dark:bg-gray-800 ">

          <div className="mx-32 my-5">
            <CardProfile user={user} />

            {/* Card 1 */}
            <div onClick={() => toggleCard(1)} className="mt-16 mx-32">
              <div className="bg-purplePrimary px-8 py-3 rounded-xl text-white flex justify-between items-center">
                <span>1º Trimestre</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                  <path className="fill-white"
                        d={openCardId === 1 ? 'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' : 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'} />
                </svg>
              </div>
              {openCardId === 1 && (
                  <div className="border border-gray-200 rounded-x mt-6 px-4 rounded-xl py-4">
                    <RowNota subject={'Matemática'} firstScore={'7.0'} secondScore={'12.0'} />
                    <RowNota subject={'Matemática'} firstScore={'7.0'} secondScore={'12.0'} />
                  </div>
              )}
            </div>

            {/* Card 2 */}
            <div onClick={() => toggleCard(2)} className="mt-8 mx-32">
              <div className="bg-purplePrimary px-8 py-3 rounded-xl text-white flex justify-between items-center">
                <span>2º Trimestre</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                  <path className="fill-white" d={openCardId === 2 ? 'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' : 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'} />
                </svg>
              </div>
              {openCardId === 2 && (
                  <div className="border border-gray-200 rounded-x mt-6 px-4 rounded-xl py-4">
                    <RowNota subject={'Física'} firstScore={'8.0'} secondScore={'10.0'} />
                  </div>
              )}
            </div>

            <div onClick={() => toggleCard(3)} className="mt-8 mx-32">
              <div className="bg-purplePrimary px-8 py-3 rounded-xl text-white flex justify-between items-center">
                <span>2º Trimestre</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                  <path className="fill-white"
                        d={openCardId === 3 ? 'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' : 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'} />
                </svg>
              </div>
              {openCardId === 3 && (
                  <div className="border border-gray-200 rounded-x mt-6 px-4 rounded-xl py-4">
                    <RowNota subject={'História'} firstScore={'8.0'} secondScore={'10.0'} />
                  </div>
              )}
            </div>
          </div>
        </div>
      </>
  );
}
