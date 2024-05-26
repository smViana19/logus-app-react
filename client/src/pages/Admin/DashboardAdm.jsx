import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../../components/NavLink'
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';



export default function DashboardAdm() {
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
                                        href="#" to='/dashboard' className='text-purplePrimary' >
                                        Dashboard
                                    </NavLink>

                                    <NavLink to='/areapostagens'
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
                                        href="#" to='/pomodoro' >
                                        Método Pomodoro
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


                <main>
                    <div className='w-2/12 bg-white px-8'>
                        <img src={Logo} alt="" />
                        <div className='bg-gray-200 flex py-2 justify-center rounded-md'>
                            <img src="" alt="" />
                            <span>Nome do Administrador</span>
                        </div>
                        <p className='text-gray-400 mt-8 mb-4'>Usuários</p>
                        <ul>
                            <li className='bg-[#B4ADEA] rounded-2xl px-4 py-1'>
                                <img src="" alt="" />
                                <p className='text-purplePrimary'>Professor</p>
                            </li>

                            <li>
                                <img src="" alt="" />
                                <p>Professor</p>
                            </li>
                        </ul>
                    </div>
                </main>

            </div>

        </>


    );
}