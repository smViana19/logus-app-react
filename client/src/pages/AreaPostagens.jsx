import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/Botoes/LogoutBtn';
import UsuarioCard from '../components/Botoes/UsuarioCard';
import CardCategoria from '../components/CardsContainers/CardCategoria';
import CardMateria from '../components/CardsContainers/CardMateria' // Importando o componente CardMateria

import bannerMateria from '../assets/Banners/bannerMaterias.jpg';

export default function AreaPostagens() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    // if (!isLoggedIn) {
    //    return <Navigate to="/login" replace />;
    //}

    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Dados simulados para as matérias
    const materias = [
        {
            nome: 'Matéria 01',
            banner: bannerMateria,
            atividades: [
                { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                { nome: 'Atividade de Geografia Analítica', data: '12/06' }
            ]
        },
        {
            nome: 'Matéria 02',
            banner: bannerMateria,
            atividades: [
                { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                { nome: 'Atividade de Geografia Analítica', data: '12/06' }
            ]
        },
        {
            nome: 'Matéria 03',
            banner: bannerMateria,
            atividades: [
                { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                { nome: 'Atividade de Geografia Analítica', data: '12/06' }
            ]
        },
        {
            nome: 'Matéria 04',
            banner: bannerMateria,
            atividades: [
                { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                { nome: 'Atividade de Geografia Analítica', data: '12/06' }
            ]
        },
        {
            nome: 'Matéria 04',
            banner: bannerMateria,
            atividades: [
                { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                { nome: 'Atividade de Geografia Analítica', data: '12/06' }
            ]
        },
        {
            nome: 'Matéria 04',
            banner: bannerMateria,
            atividades: [
                { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                { nome: 'Atividade de Geografia Analítica', data: '12/06' }
            ]
        },
        {
            nome: 'Matéria 04',
            banner: bannerMateria,
            atividades: [
                { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                { nome: 'Atividade de Geografia Analítica', data: '12/06' }
            ]
        },
        {
            nome: 'Matéria 04',
            banner: bannerMateria,
            atividades: [
                { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                { nome: 'Atividade de Geografia Analítica', data: '12/06' }
            ]
        },
    ];

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
                                    <NavLink to='/dashboard' className='text-gray-800'>Dashboard</NavLink>
                                    <NavLink to='/dashboard/postagens' className='text-purplePrimary'
                                        onMouseEnter={() => setDropdownVisible(true)}
                                        onMouseLeave={() => setDropdownVisible(false)}>
                                        Área de Postagens
                                    </NavLink>
                                    {dropdownVisible && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                                            <Link to="/dashboard/postagens/resumo" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resumo</Link>
                                            <Link to="/dashboard/postagens/slide" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Slide</Link>
                                            <Link to="/dashboard/postagens/atividade" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Atividade</Link>
                                        </div>
                                    )}
                                    <NavLink to='/dashboard/agenda' className='text-gray-800'>Agenda</NavLink>
                                    <NavLink to='/dashboard/pomodoro' className='text-gray-800'>Método Pomodoro</NavLink>
                                    <LogoutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                    <section className='w-4/5 m-auto'>
                        <button className='border border-gray-300 w-1/4 py-2 rounded-lg mt-4'> Atividades pendentes </button>
                    </section>
                    <section className="grid grid-cols-4 gap-x-8 gap-y-16 w-4/5 justify-center mx-auto mt-8">
                        {/* Renderizando os cards das matérias */}
                        {materias.map((materia, index) => (
                            <CardMateria key={index} {...materia} caminho={'dashboard/postagens/materia01'}/>
                        ))}
                    </section>
                </main>
            </div>
        </>
    );
}
