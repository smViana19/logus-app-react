import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavLink from '../../components/Navs/NavLink';
import Logo from '../../components/outros/Logo';
import { useParams } from 'react-router-dom';
import LogoutButton from '../../components/Botoes/LogoutBtn';
import BtnMateriasFilter from '../../components/Botoes/BtnMateriasFilter';


export default function AreaPostagens() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [dropdownVisible, setDropdownVisible] = useState(false);



    const { nomeMateria } = useParams();

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
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex relative">
                                    <NavLink
                                        to="/dashboard"
                                        className="text-gray-800"
                                    >
                                        Dashboard
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/postagens"
                                        className="text-purplePrimary"
                                        onMouseEnter={() =>
                                            setDropdownVisible(true)
                                        }
                                        onMouseLeave={() =>
                                            setDropdownVisible(false)
                                        }
                                    >
                                        Área de Postagens
                                    </NavLink>
                                    {dropdownVisible && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                            <Link
                                                to="/dashboard/postagens/resumo"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Resumo
                                            </Link>
                                            <Link
                                                to="/dashboard/postagens/slide"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Slide
                                            </Link>
                                            <Link
                                                to="/dashboard/postagens/atividade"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Atividade
                                            </Link>
                                        </div>
                                    )}
                                    <NavLink
                                        to="/dashboard/agenda"
                                        className="text-gray-800"
                                    >
                                        Agenda
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/pomodoro"
                                        className="text-gray-800"
                                    >
                                        Método Pomodoro
                                    </NavLink>
                                    <LogoutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className='px-64 py-16'>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 bg-purple-600 h-full flex items-end rounded-xl">
                            <h1 className="text-white text-3xl p-6 first-letter:uppercase">{nomeMateria}</h1>
                        </div>
                        <div className="col-span-1 grid grid-rows-3 gap-4">
                            <BtnMateriasFilter text={'Exercícios'}/>
                            <BtnMateriasFilter text={'Exercícios'}/>
                            <BtnMateriasFilter text={'Exercícios'}/>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
