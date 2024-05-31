import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import UsuarioCard from '../components/Botoes/UsuarioCard';
import CardCategoria from '../components/CardsContainers/CardCategoria';
import math from '../assets/math.png'


export default function AreaPostagens() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    /*
        if (!isLoggedIn) {
            return <Navigate to="/login" replace />;
        }*/
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
                                        // borderPage={currentRoute === '/' ? '1px solid black' : 'none'}
                                        href="#" to='/dashboard'>
                                        Dashboard
                                    </NavLink>

                                    <NavLink to='/areapostagens'
                                        // borderPage={currentRoute === '/posts' ? '1px solid black' : 'none'}
                                        href="#" className='text-purplePrimary' >
                                        Área de Postagens {/* fazer dropdown - resumo slide etc */}

                                    </NavLink>
                                    <NavLink
                                        // borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                        href="#" to='/agenda' >
                                        Agenda
                                    </NavLink>
                                    <NavLink
                                        // borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                        href="#" to='/pomodoro' >
                                        Método Pomodoro
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


                <main>
                    <section class="grid grid-cols-4 gap-x-8 gap-y-16 w-4/5 justify-center mx-auto mt-16">


                        <div className='bg-gray-100 shadow-sm rounded-lg h-40'>
                            <div className='bg-gray-600 h-16 rounded-t-lg flex items-end py-2 px-4'>
                                <span className='text-2xl font-semibold text-white '>Matemática</span>
                            </div>
                            <div className='flex flex-col p-2'>
                                <span className='font-medium'>Pendentes: </span>
                                <li className='text-sm pt-2'>Atividade de geometria analítica</li>
                                <li className='text-sm pt-1'>Lista de exercícios de funções</li>

                            </div>
                        </div>

                     

                        <div className='bg-gray-100 shadow-sm rounded-lg h-40'>
                            <div className='bg-[#A35454] h-16 rounded-t-lg flex items-end py-2 px-4'>
                                <span className='text-2xl font-semibold text-white '>Português</span>
                            </div>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg h-40'>
                            <div className='bg-gray-600 h-16 rounded-t-lg flex items-end py-2 px-4'>
                                <span className='text-2xl font-semibold text-white '>História</span>
                            </div>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg h-40'>
                            <div className='bg-gray-600 h-16 rounded-t-lg flex items-end py-2 px-4'>
                                <span className='text-2xl font-semibold text-white'>Geografia</span>
                            </div>
                        </div>
                        <div className='bg-gray-100 shadow-sm rounded-lg h-40'>
                            <div className='bg-gray-600 h-16 rounded-t-lg flex items-end py-2 px-4'>
                                <span className='text-2xl font-semibold text-white '>Matemática</span>
                            </div>
                            <div className='flex flex-col p-2'>
                                <span className='font-medium'>Pendentes: </span>
                                <li className='text-sm pt-2'>Atividade de geometria analítica</li>
                                <li className='text-sm pt-1'>Lista de exercícios de funções</li>

                            </div>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg h-40'>
                            <div className='bg-gray-600 h-16 rounded-t-lg flex items-end py-2 px-4'>
                                <span className='text-2xl font-semibold text-white '>Português</span>
                            </div>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg h-40'>
                            <div className='bg-gray-600 h-16 rounded-t-lg flex items-end py-2 px-4'>
                                <span className='text-2xl font-semibold text-white '>História</span>
                            </div>
                        </div>

                        <div className='bg-gray-100 shadow-sm rounded-lg h-40'>
                            <div className='bg-gray-600 h-16 rounded-t-lg flex items-end py-2 px-4'>
                                <span className='text-2xl font-semibold text-white'>Geografia</span>
                            </div>
                        </div>
                       
                       
                    </section>
                </main>

            </div>

        </>


    );
}