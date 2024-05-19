import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import UsuarioCard from '../components/Botoes/UsuarioCard';
import CardArea from '../components/CardsContainers/CardArea';



export default function Dashboard() {
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
                                        href="#" >
                                        Dashboard
                                    </NavLink>

                                    <NavLink
                                        // borderPage={currentRoute === '/posts' ? '1px solid black' : 'none'}
                                        href="#" >
                                        Área de Postagens {/* fazer dropdown - resumo slide etc */}
                                        
                                    </NavLink>
                                    <NavLink
                                        // borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                        href="#" to='/agenda' >
                                        Agenda
                                    </NavLink>
                                    <NavLink
                                        // borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                        href="#"  to='/pomodoro' >
                                        Método Pomodoro
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <UsuarioCard />

                <div className='flex gap-8 mx-16'>
                    <CardArea area={'Área do Aluno'} colorProps={'violet-700'} colorText={'white'} />
                    <CardArea area={'Área do Professor'} colorText={'gray-600'} />
                </div>

                <section className='mx-16 mt-16'>
                    <h1 className='font-semibold text-2xl mb-8'>Tarefas Urgentes</h1>

                    <div className='border-b border-gray-400 flex justify-between'>
                        <div className='flex gap-8'>
                            <input type="checkbox" />
                            <p className='text-lg'>Atividade de matemática sobre funções de segundo grau</p>
                        </div>
                        
                        <span>
                            Escola 
                            <img src="" alt="" />
                        </span>
                    </div>
                </section>

            </div>

        </>


    );
}