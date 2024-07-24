import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import NavLink from '../components/Navs/NavLink';
import Logo from '../components/outros/Logo';
import UsuarioCard from '../components/Botoes/UsuarioCard';
import CardCategoria from '../components/CardsContainers/CardCategoria';
import LogoutButton from '../components/Botoes/LogoutBtn';
import MenuMobile from '../components/Navs/MenuMobile';

export default function Dashboard() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const role = useSelector((state) => state.auth.user?.role);
    const user = useSelector((state) => state.auth.user?.nome);

 
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        const mode = darkMode ? 'dark' : '';
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);


   // if (!isLoggedIn) {
   //     return <Navigate to="/login" replace />;
   // }

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <nav className={`bg-white ${darkMode ? 'dark:bg-gray-800 border-gray-700 shadow-gray-800' : 'border-gray-800 shadow-gray-50'} border-b`}>
                <MenuMobile />
                <div className="flex justify-between py-2 px-32">
                    <div className="flex items-center">
                        <Link to="/">
                            <Logo className={`block h-12 w-auto fill-current ${darkMode ? 'text-white' : 'text-black'}`} />
                        </Link>
                    </div>

                    <div className="flex justify-around">
                        <div className="space-x-8 lg:flex">
                            <NavLink className={`text-lg ${darkMode ? 'text-black' : 'text-black'}`} to="/dashboard">Dashboard</NavLink>
                            <NavLink className={`text-lg ${darkMode ? 'text-black' : 'text-black'}`} to="/dashboard/postagens">Área de Postagens</NavLink>
                            <NavLink className={`text-lg ${darkMode ? 'text-black' : 'text-black'}`} to="/dashboard/agenda">Agenda</NavLink>
                            <NavLink className={`text-lg ${darkMode ? 'text-black' : 'text-black'}`} to="/dashboard/pomodoro">Método Pomodoro</NavLink>
                            <NavLink className={`text-lg ${darkMode ? 'text-black' : 'text-black'}`} to="/dashboard/notas">Notas</NavLink>
                        </div>
                    </div>
                    <label className="inline-flex items-center relative">
                        <input
                            className="peer hidden"
                            id="toggle"
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <div className={`relative w-[110px] h-[50px] ${darkMode ? 'bg-zinc-500' : 'bg-white'} rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:from-zinc-900 peer-checked:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md`}>
                        </div>
                        <svg
                            height="0"
                            width="100"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px] ${darkMode ? 'fill-white' : 'fill-black'}`}
                        >
                            <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
                        </svg>
                        <svg
                            height="512"
                            width="512"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px] ${darkMode ? 'fill-white' : 'fill-black'}`}
                        >
                            <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
                        </svg>
                    </label>

                    <div className="flex justify-center gap-16">
                        <NavLink to="/dashboard/perfil">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="12.25"
                                viewBox="0 0 448 512"
                                className={`fill-gray-400 ${darkMode ? 'text-gray-200' : ''}`}
                            >
                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                        </NavLink>
                        <LogoutButton />
                    </div>
                </div>
            </nav>


            <UsuarioCard role={role} user={user} />

            <div className="flex gap-8 mx-16">
                <CardCategoria
                    categoria={'Resumos'}
                    customClass={'bg-white dark:bg-gray-800 text-black dark:text-white'}
                />
                <CardCategoria
                    categoria={'Apresentações'}
                    customClass={'bg-white dark:bg-gray-800 text-black dark:text-white'}
                />
                <CardCategoria
                    categoria={'Atividades'}
                    customClass={'bg-white dark:bg-gray-800 text-black dark:text-white'}
                />
            </div>

            <section className="mx-16 mt-16">
    <h1 className={`font-semibold text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-black'}`}>
        Tarefas Urgentes
    </h1>

    <div className={`border-b flex justify-between ${darkMode ? 'border-gray-700' : 'border-gray-400'}`}>
        <div className="flex gap-8 items-center">
            <input type="checkbox" />
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-black'}`}>
                Atividade de matemática sobre funções de segundo grau
            </p>
        </div>

        <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-black'}`}>
            Escola
            <img src="" alt="" />
        </span>
    </div>
</section>

        </div>
    );
}
