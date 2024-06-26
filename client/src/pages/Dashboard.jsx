import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../components/Navs/NavLink';
import Logo from '../components/outros/Logo';
import { Link } from 'react-router-dom';
import UsuarioCard from '../components/Botoes/UsuarioCard';
import CardCategoria from '../components/CardsContainers/CardCategoria';
import LogoutButton from '../components/Botoes/LogoutBtn';



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
                                    <NavLink className='text-purplePrimary'
                                        // borderPage={currentRoute === '/' ? '1px solid black' : 'none'}
                                        href="#" >
                                        Dashboard
                                    </NavLink>

                                    <NavLink
                                        // borderPage={currentRoute === '/posts' ? '1px solid black' : 'none'}
                                        href="#" to='/dashboard/postagens'>
                                        Área de Postagens {/* fazer dropdown - resumo slide etc */}

                                    </NavLink>
                                    <NavLink
                                        // borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                        href="#" to='/dashboard/agenda' >
                                        Agenda
                                    </NavLink>
                                    <NavLink
                                        // borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                        href="#" to='/dashboard/pomodoro' >
                                        Método Pomodoro
                                    </NavLink>
                                    <NavLink
                                        // borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                        href="#" to='/dashboard/perfil' >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                        </svg>
                                    </NavLink>
                                    <LogoutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <UsuarioCard role={role} user={user} />

                <div className='flex gap-8 mx-16'>
                    <CardCategoria categoria={'Resumos'} />
                    <CardCategoria categoria={'Apresentações'} customClass={'bg-white text-black'} />
                    <CardCategoria categoria={'Atividades'} customClass={'bg-white text-black'} />

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