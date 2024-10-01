import { LuBox, LuFilePlus, LuClock, LuCalendar, LuUserCircle } from 'react-icons/lu';
import { IoSettingsOutline } from 'react-icons/io5';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const SIDEBAR_LINKS = [
    { id: 1, path: '/dashboard', name: 'Dashboard', icon: LuBox },
    { id: 2, path: '/dashboard/postagens', name: 'Postagens', icon: LuFilePlus },
    { id: 3, path: '/dashboard/agenda', name: 'Agenda', icon: LuCalendar },
    { id: 4, path: '/dashboard/pomodoro', name: 'Pomodoro', icon: LuClock },
    { id: 5, path: '/dashboard/perfil', name: 'Perfil', icon: LuUserCircle },
    { id: 6, path: '/dashboard', name: 'Configuraçoes', icon: IoSettingsOutline },
  ];
  return (
      <div
          className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-white dark:bg-zinc-900 h-full transition-all duration-300 border-none z-10 sidebar overflow-hidden dark:text-gray-300">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 mb-4 h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Páginas</div>
              </div>
            </li>
            {
              SIDEBAR_LINKS.map((link, index) => (
                  <li
                      key={index}
                      className={`font-medium hover:text-white ${
                          activeLink === index ? 'bg-purplePrimary dark:bg-purpleDark dark:text-white text-white' : ''}`}>
                    <Link
                        to={link.path}
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-purple-500  dark:hover:bg-purple-900 dark:hover:bg-opacity-50 border-l-4 border-transparent hover:border-purpleDark  dark:hover:border-gray-800 pr-6 transition duration-300 ease-in-out"
                        onClick={() => handleLinkClick(index)}
                    >
                      <span className="inline-flex justify-center items-center ml-4">{link.icon()}</span>
                      <span className="ml-2 text-sm tracking-wide truncate ">{link.name}</span>
                    </Link>
                  </li>

              ))
            }
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright@ Logus 2024</p>
        </div>
      </div>
  );

};


export default Sidebar;