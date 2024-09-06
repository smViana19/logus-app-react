import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../components/Navs/NavLink';
import Logo from '../components/Logo/Logo.jsx';
import { Link } from 'react-router-dom';
import UserCard from '../components/CardsContainers/UserCard.jsx';
import CategoryCard from '../components/CardsContainers/CategoryCard.jsx';
import LogoutButton from '../components/Buttons/LogoutButton.jsx';
import CardUserName from '../components/CardsContainers/Profile/SubCard';
import CardProfileNumbers from '../components/CardsContainers/Profile/CardProfile';
import SchoolInfosProfile from '../components/CardsContainers/Profile/SchoolInfosProfile';
import MenuMobile from '../components/Navs/MenuMobile';
import CardProfile from '../components/CardsContainers/Profile/CardProfile';
import RowNota from '../components/CardsContainers/Profile/RowNota';


export default function Dashboard() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const role = useSelector(state => state.auth.user?.role);
    const user = useSelector(state => state.auth.user?.nome);

    //  if (!isLoggedIn) {
    //   return <Navigate to="/login" replace />;
    //}


    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-white border-b border-gray-50 shadow-md shadow-gray-50">
                    <MenuMobile />
                    <div className="flex justify-between py-2 px-32">
                        <div className="flex items-center">
                            <Link to="/">
                                <Logo className="block h-12 w-auto fill-current" />
                            </Link>
                        </div>

                        <div className="flex justify-around">
                            <div className="space-x-8  lg:flex">
                                <NavLink to="/dashboard" className="">
                                    Dashboard
                                </NavLink>
                                <NavLink to="/dashboard/postagens" className="">
                                    Área de Postagens
                                </NavLink>
                                <NavLink to="/dashboard/agenda" className="">
                                    Agenda
                                </NavLink>
                                <NavLink to="/dashboard/pomodoro" className="">
                                    Método Pomodoro
                                </NavLink>
                                <NavLink to="/dashboard/notas" className="">
                                    Notas
                                </NavLink>
                            </div>
                            <div className="flex justify-between"></div>
                        </div>
                        <div className="flex justify-center gap-16">
                            <NavLink to="/dashboard/perfil" className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="14"
                                    width="12.25"
                                    viewBox="0 0 448 512"
                                >
                                    <path className='fill-gray-400' d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                            </NavLink>
                            <LogoutButton />
                        </div>
                    </div>
                </nav>


                <div className='mt-16  mx-32'>
                    <CardProfile
                        user={user} />


                    <div className='mt-16 mx-32'>
                        <div className='bg-purplePrimary px-8 py-3 rounded-xl text-white flex justify-between items-center'>
                            <span>1º Trimestre</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                                <path className='fill-white' d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </div>


                        <div className='border border-gray-200 rounded-x mt-6 px-4 rounded-xl py-4'>
                            <RowNota
                                subject={'Matemáta'}
                                firstScore={'7.0'}
                                secondScore={'12.0'}

                            />

                            <RowNota
                                subject={'Matemáta'}
                                firstScore={'7.0'}
                                secondScore={'12.0'}

                            />

                            <RowNota
                                subject={'Matemáta'}
                                firstScore={'7.0'}
                                secondScore={'12.0'}

                            />



                        </div>

                    </div>


                </div>



            </div>

        </>


    );
}