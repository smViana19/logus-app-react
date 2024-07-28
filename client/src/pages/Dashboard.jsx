import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const [isDarkMode, setIsDarkMode] = useState(false);



    const handleThemeChange = () => {
        if (isDarkMode) {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
        } else {
          document.documentElement.classList.add("dark");
          localStorage.theme = "dark";
        }
        setIsDarkMode(!isDarkMode);
      };
 
      

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-800">
            <nav className="bg-white shadow-gray-100 shadow-md dark:bg-zinc-800 ">
                <MenuMobile />
                <div className="flex justify-between py-2 px-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <Logo className="block h-12 w-auto fill-current text-black" />
                        </Link>
                    </div>

                    <div className="flex justify-around">
                        <div className="space-x-8 lg:flex">
                            <NavLink className="text-black" to="/dashboard">Dashboard</NavLink>
                            <NavLink className="text-black" to="/dashboard/postagens">Área de Postagens</NavLink>
                            <NavLink className="text-black" to="/dashboard/agenda">Agenda</NavLink>
                            <NavLink className="text-black" to="/dashboard/pomodoro">Método Pomodoro</NavLink>
                            <NavLink className="text-black" to="/dashboard/notas">Notas</NavLink>
                        </div>
                    </div>
                    
                    <div className="flex justify-center gap-16">
                        <NavLink to="/dashboard/perfil">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="12.25"
                                viewBox="0 0 448 512"
                                className="fill-gray-400"
                            >
                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                        </NavLink>
                        <LogoutButton />
                        <label
				htmlFor="myCheckbox"
				className="flex cursor-pointer items-center relative"
			  >
				<input
				  type="checkbox"
				  id="myCheckbox"
				  className="sr-only peer"
				  onChange={handleThemeChange}
				  checked={isDarkMode}
				/>
				<div
				  className="w-16 h-8 rounded-full flex items-center px-1 bg-zinc-200 transition-all duration-500
					  after:content-[''] after:flex after:relative after:w-6 after:h-6 after:bg-white after:rounded-full after:left-0 after:transition-all after:duration-300 after:rotate-0 shadow-inner
					  peer-checked:after:left-8 peer-checked:after:bg-[url('/icons/moon-solid.svg')] peer-checked:after:-rotate-360 
					  after:bg-[url('/icons/sun-solid.svg')] after:bg-no-repeat after:bg-center
					  dark:bg-zinc-700 dark:after:bg-zinc-800"
				>
				</div>


			  </label>
                    </div>
                </div>
            </nav>

            <UsuarioCard role={role} user={user} />

            <div className="flex gap-8 mx-16">
                <CardCategoria
                    categoria={'Resumos'}
                    customClass={'bg-white text-black'}
                />
                <CardCategoria
                    categoria={'Apresentações'}
                    customClass={'bg-white text-black'}
                />
                <CardCategoria
                    categoria={'Atividades'}
                    customClass={'bg-white text-black'}
                />
            </div>

            <section className="mx-16 mt-16">
                <h1 className="font-semibold text-2xl mb-8 text-black">
                    Tarefas Urgentes
                </h1>

                <div className="border-b flex justify-between border-gray-400">
                    <div className="flex gap-8 items-center">
                        <input type="checkbox" />
                        <p className="text-lg text-black">
                            Atividade de matemática sobre funções de segundo grau
                        </p>
                    </div>

                    <span className="text-lg text-black">
                        Escola
                        <img src="" alt="" />
                    </span>
                </div>
            </section>
        </div>
    );
}

