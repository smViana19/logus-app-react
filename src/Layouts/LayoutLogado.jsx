import React from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import NavLink from '../components/NavLink';

export default function LayoutLogado({}) { //colocar o user.name 
    
    const currentRoute = window.location.pathname;
    return (
        <div className="min-h-screen bg-gray-100">
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
                                    href="#" >
                                    Agenda
                                </NavLink>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}