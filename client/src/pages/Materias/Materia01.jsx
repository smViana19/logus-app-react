import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavLink from '../../components/Navs/NavLink';
import Logo from '../../components/outros/Logo';
import { Link } from 'react-router-dom';
import LogoutButton from '../../components/Botoes/LogoutBtn';

export default function Materia01() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const role = useSelector(state => state.auth.user?.role);
    const user = useSelector(state => state.auth.user?.nome);

    // State to manage active tab
    const [activeTab, setActiveTab] = useState('Professor');

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
                                    <NavLink  href="#">
                                        Dashboard
                                    </NavLink>
                                    <NavLink href="#" to='/dashboard/postagens'>
                                        Área de Postagens
                                    </NavLink>
                                    <NavLink href="#" to='/dashboard/agenda' >
                                        Agenda
                                    </NavLink>
                                    <NavLink href="#" to='/dashboard/pomodoro' >
                                        Método Pomodoro
                                    </NavLink>
                                    <LogoutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                    <div className="grid grid-rows-2 items-center grid-flow-col gap-x-4 gap-y-2 w-3/4 mt-8 mx-auto">
                        <div className="row-span-4 h-full bg-purplePrimary rounded-lg flex items-end p-4">
                            <span className='text-white text-2xl font-semibold'>Matéria 01</span>
                        </div>
                        <div className="col-span-1 px-4 py-3 border-2 border-gray-200 rounded-lg bg-white">
                            Atividades
                        </div>
                        <div className="row-span-2 py-3 border-2 border-gray-200 rounded-lg px-4 col-span-1">
                            Resumos
                        </div>
                        <div className="px-4 py-3 border-2 border-gray-200 rounded-lg">
                            apresentações
                        </div>
                    </div>
                    <ul className='flex justify-around mt-8'>
                        <li
                            className={`text-lg pb-1 cursor-pointer flex items-center px-4 ${activeTab === 'Professor' ? 'border-b border-purplePrimary' : ''}`}
                            onClick={() => setActiveTab('Professor')}
                        >
                            Professor
                            <svg
                                className={`ml-4 transform transition-transform duration-300 ${activeTab === 'Professor' ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="14"
                                viewBox="0 0 512 512"
                            >
                                <path fill="#820ad1" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </li>
                        <li
                            className={`text-lg pb-1 cursor-pointer items-center flex px-4 ${activeTab === 'Aluno' ? 'border-b border-purplePrimary' : ''}`}
                            onClick={() => setActiveTab('Aluno')}
                        >
                            Aluno
                            <svg
                                className={`ml-4 transform transition-transform duration-300 ${activeTab === 'Professor' ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="14"
                                viewBox="0 0 512 512"
                            >
                                <path fill="#820ad1" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                        </li>
                    </ul>
                </main>
            </div>
        </>
    );
}
