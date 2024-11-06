import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import RowNota from '../../components/CardsContainers/Profile/RowNota.jsx';
import SubCard from '../../components/CardsContainers/Profile/SubCard.jsx';

export default function Dashboard() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const role = useSelector(state => state.auth.user?.role);
  const user = useSelector(state => state.auth.user?.nome);

  const location = useLocation()
  const { numEntregas } = location.state || {}

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
        <div className="lg:p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-10 md:ml-14 transition-all duration-300 dark:text-white">

          <div className="mx-0 2xl:mx-48 my-5">
          <div className="rounded-md bg-white py-8 px-8 sm:px-12 shadow-md shadow-zinc-200 dark:bg-zinc-700 dark:shadow-zinc-900">
            <div className="flex gap-2 mb-10">
                <span className="w-1.5 bg-purplePrimary rounded-full"></span>
                <span className=''>{role}</span>
            </div>

            <div className="flex items-center gap-4 sm: md: lg:gap-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="30.25"
                    viewBox="0 0 448 512"
                >
                    <path className='dark:fill-white' d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>

                <div className="">
                    <p className="text-xl first-letter:uppercase">{user}</p>

                    <div className="flex-col md:flex-row flex lg:gap-16 mt-4">
                        <SubCard numEntregas={numEntregas || 0} />
                        <SubCard />
                        <SubCard />
                        
                    </div>
                </div>
            </div>
        </div>

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
                  <div className="border border-zinc-200 dark:border-zinc-600 rounded-md mt-6 px-4 py-4">
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
                  <div className="border border-zinc-200 dark:border-zinc-600 rounded-x mt-6 px-4 rounded-md py-4">
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
                  <div className="border border-zinc-200 dark:border-zinc-600 rounded-x mt-6 px-4 rounded-md py-4">
                    <RowNota subject={'História'} firstScore={'8.0'} secondScore={'10.0'} />
                  </div>
              )}
            </div>
          </div>
        </div>
      </>
  );
}
