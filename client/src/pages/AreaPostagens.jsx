import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/Botoes/LogoutBtn';
import UsuarioCard from '../components/Botoes/UsuarioCard';
import CardCategoria from '../components/CardsContainers/CardCategoria';

import bannerMateria from '../assets/Banners/bannerMaterias.jpg';

export default function AreaPostagens() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    // if (!isLoggedIn) {
    //    return <Navigate to="/login" replace />;
    //}

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link to="/">
                                        <Logo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href="#" to='/dashboard'>
                                        Dashboard
                                    </NavLink>

                                    <NavLink to='/dashboard/postagens'
                                        href="#" className='text-purplePrimary' >
                                        Área de Postagens
                                    </NavLink>
                                    <NavLink
                                        href="#" to='/dashboard/agenda'>
                                        Agenda
                                    </NavLink>
                                    <NavLink
                                        href="#" to='/dashboard/pomodoro'>
                                        Método Pomodoro
                                    </NavLink>
                                    <LogoutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                    <section className="grid grid-cols-4 gap-x-8 gap-y-16 w-4/5 justify-center mx-auto mt-16">

                        <Link to='/dashboard/postagens/materia01'>
                            <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer'>
                                <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                                    backgroundImage: `url(${bannerMateria})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}>
                                    <span className='text-2xl font-semibold text-white px-4'>Matéria 01</span>
                                </div>
                                <ul className='px-2 mt-2 pb-2'>
                                    <li className='font-semibold mb-2'>Pendentes:</li>
                                    <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>04/06</span></li>
                                    <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>12/06</span></li>
                                    <li className='flex justify-between text-sm pb-1 mt-2'><a href="" className='border-b border-gray-300'>Ver mais ...</a></li>
                                </ul>
                            </div>
                        </Link>


                        <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer'>
                            <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                                backgroundImage: `url(${bannerMateria})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}>
                                <span className='text-2xl font-semibold text-white px-4'>Matéria 02</span>
                            </div>
                            <ul className='px-2 mt-2 pb-2'>
                                <li className='font-semibold mb-2'>Pendentes:</li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>04/06</span></li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>12/06</span></li>
                                <li className='flex justify-between text-sm pb-1 mt-2'><a href="" className='border-b border-gray-300'>Ver mais ...</a></li>
                            </ul>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer'>
                            <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                                backgroundImage: `url(${bannerMateria})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}>
                                <span className='text-2xl font-semibold text-white px-4'>Matéria 03</span>
                            </div>
                            <ul className='px-2 mt-2 pb-2'>
                                <li className='font-semibold mb-2'>Pendentes:</li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>04/06</span></li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>12/06</span></li>
                                <li className='flex justify-between text-sm pb-1 mt-2'><a href="" className='border-b border-gray-300'>Ver mais ...</a></li>
                            </ul>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer'>
                            <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                                backgroundImage: `url(${bannerMateria})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}>
                                <span className='text-2xl font-semibold text-white px-4'>Matéria 04</span>
                            </div>
                            <ul className='px-2 mt-2 pb-2'>
                                <li className='font-semibold mb-2'>Pendentes:</li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geometria Analítica <span className='text-gray-600'>04/06</span></li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geometria Analítica <span className='text-gray-600'>12/06</span></li>
                                <li className='flex justify-between text-sm pb-1 mt-2'><a href="" className='border-b border-gray-300'>Ver mais ...</a></li>
                            </ul>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer'>
                            <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                                backgroundImage: `url(${bannerMateria})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}>
                                <span className='text-2xl font-semibold text-white px-4'>Matéria 05</span>
                            </div>
                            <ul className='px-2 mt-2 pb-2'>
                                <li className='font-semibold mb-2'>Pendentes:</li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geometria Analítica <span className='text-gray-600'>04/06</span></li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geometria Analítica <span className='text-gray-600'>12/06</span></li>
                                <li className='flex justify-between text-sm pb-1 mt-2'><a href="" className='border-b border-gray-300'>Ver mais ...</a></li>
                            </ul>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer'>
                            <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                                backgroundImage: `url(${bannerMateria})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}>
                                <span className='text-2xl font-semibold text-white px-4'>Matéria 06</span>
                            </div>
                            <ul className='px-2 mt-2 pb-2'>
                                <li className='font-semibold mb-2'>Pendentes:</li>

                            </ul>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer'>
                            <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                                backgroundImage: `url(${bannerMateria})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}>
                                <span className='text-2xl font-semibold text-white px-4'>Matéria 07</span>
                            </div>
                            <ul className='px-2 mt-2 pb-2'>
                                <li className='font-semibold mb-2'>Pendentes:</li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>04/06</span></li>
                                
                            </ul>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer'>
                            <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                                backgroundImage: `url(${bannerMateria})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}>
                                <span className='text-2xl font-semibold text-white px-4'>Matéria 08</span>
                            </div>
                            <ul className='px-2 mt-2 pb-2'>
                                <li className='font-semibold mb-2'>Pendentes:</li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>04/06</span></li>
                                <li className='flex justify-between text-sm pb-2'>Atividade de Geografia Analítica <span className='text-gray-600'>12/06</span></li>
                                <li className='flex justify-between text-sm pb-1 mt-2'><a href="" className='border-b border-gray-300'>Ver mais ...</a></li>
                            </ul>
                        </div>

                    </section>
                </main>
            </div>
        </>
    );
}
