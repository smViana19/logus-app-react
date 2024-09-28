import React from 'react';
import {CiSearch} from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Header = ({ user, handleThemeChange, isDarkMode, handleLogout }) => {

  return (
      <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 ">
        <div
            className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-purplePrimary dark:bg-gray-800 border-none">
          <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
               src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" alt="" />
          <span className="hidden md:block text-sm font-semibold">{user}</span>
        </div>
        <div className="flex justify-between items-center h-14 bg-purplePrimary  dark:bg-gray-800 header-right">
          <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <span className="w-5 text-gray-600 h-5 cursor-pointer"><CiSearch size={20}/></span>

            </button>
            <input type="search" name="" id="" placeholder="Buscar..."
                   className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
          </div>
          <ul className="flex items-center">
            <li>
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
            </li>
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
            </li>
            <li>
              <button  onClick={handleLogout} className="flex items-center mr-4 hover:text-purple-100" >
                <span className="inline-flex mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </span>
                Sair
              </button>
            </li>
          </ul>
        </div>
      </div>
  )
      ;

};


export default Header;