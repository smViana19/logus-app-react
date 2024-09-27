import { GoBell } from 'react-icons/go';
import React from 'react';

const Header = ({ user, handleThemeChange, isDarkMode }) => {

  return (
      <div className="flex justify-between items-center bg-white p-4">
        <div className="p-4 w-full md:w-auto">
          <div className="hidden md:flex">
            <input type="text" placeholder="Pesquisar..."
                   className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-600 w-full md:w-64" />
          </div>

        </div>
        <div className="flex items-center space-x-5">

          <div className="flex items-center space-x-5">
            <button className="relative text-2xl text-gray-600 dark:text-gray-200">
              <GoBell size={24} />
              <span
                  className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white">9</span>
            </button>
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

            <div className="md:flex flex-col text-right hidden mx-4">
              <p className="text-gray-700 font-semibold dark:text-gray-200 ">{user}</p>
              <p className="text-gray-500 text-sm dark:text-gray-300 ">ESCOLA TESTE</p>

            </div>

            <img className="w-8 h-8 rounded-full border-2 border-indigo-200"
                 src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
          </div>
        </div>
      </div>
  );

};


export default Header;