import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
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
        <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:text-white">

          <div className="mx-48 my-5">
            <CardProfile user={user} role={role} />

            {/* Card 1 */}
            <div onClick={() => toggleCard(1)} className="mt-16">
              <div className="bg-purplePrimary dark:bg-purpleDark dark:text-white px-8 py-3 rounded text-white flex justify-between items-center">
                <span>1º Trimestre</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                  <path className="fill-white"
                        d={openCardId === 1 ? 'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' : 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'} />
                </svg>
              </div>
              {openCardId === 1 && (
                  <div className="border border-gray-200 dark:border-zinc-600 rounded-md mt-6 px-4 py-4">
                    <RowNota subject={'Matemática'} firstScore={'7.0'} secondScore={'12.0'} />
                    <RowNota subject={'Matemática'} firstScore={'7.0'} secondScore={'12.0'} />
                  </div>
              )}
            </div>

            {/* Card 2 */}
            <div onClick={() => toggleCard(2)} className="mt-8 ">
              <div className="bg-purplePrimary dark:bg-purpleDark dark:text-white px-8 py-3 rounded text-white flex justify-between items-center">
                <span>2º Trimestre</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                  <path className="fill-white" d={openCardId === 2 ? 'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' : 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'} />
                </svg>
              </div>
              {openCardId === 2 && (
                  <div className="border border-gray-200 dark:border-zinc-600 rounded-x mt-6 px-4 rounded-md py-4">
                    <RowNota subject={'Física'} firstScore={'8.0'} secondScore={'10.0'} />
                  </div>
              )}
            </div>

            <div onClick={() => toggleCard(3)} className="mt-8 ">
              <div className="bg-purplePrimary dark:bg-purpleDark dark:text-white px-8 py-3 rounded text-white flex justify-between items-center">
                <span>3º Trimestre</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                  <path className="fill-white"
                        d={openCardId === 3 ? 'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' : 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'} />
                </svg>
              </div>
              {openCardId === 3 && (
                  <div className="border border-gray-200 dark:border-zinc-600 rounded-x mt-6 px-4 rounded-md py-4">
                    <RowNota subject={'História'} firstScore={'8.0'} secondScore={'10.0'} />
                  </div>
              )}
            </div>
          </div>
        </div>
      </>
  );
}
