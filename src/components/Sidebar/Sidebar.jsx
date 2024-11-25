import { useState } from "react";
import { IoMdLock } from 'react-icons/io';
import {
  LuBox,
  LuCalendar,
  LuClock,
  LuFilePlus,
  LuUserCircle,
} from 'react-icons/lu';
import { Link } from "react-router-dom";

import { IoBookOutline, IoLogOutOutline, IoMenuOutline } from 'react-icons/io5';


const Sidebar = ({ role, user, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const COMMON_LINKS = [
    { id: "common-1", path: "/dashboard", name: "Dashboard", icon: LuBox },
    { id: "common-2", path: "/dashboard/postagens", name: "Postagens", icon: LuFilePlus },
  ];

  const DIRETOR_SIDEBAR_LINKS = [
    { id: "diretor-1", path: "/admin/dashboard", name: "Gestão Escolar", icon: IoMdLock },
  ];

  const PROFESSOR_SIDEBAR_LINKS = [
    { id: "professor-1", path: "/admin/notas", name: "Notas", icon: LuFilePlus },
    { id: "professor-2", path: "/admin/notas/grade", name: "Grade", icon: LuCalendar },
  ];

  const STUDENT_SIDEBAR_LINKS = [
    { id: "student-1", path: "/dashboard/perfil", name: "Perfil", icon: LuUserCircle },
    { id: "student-2", path: "/dashboard/pomodoro", name: "Pomodoro", icon: LuClock },
    { id: "student-3", path: "/dashboard/agenda", name: "Agenda", icon: IoBookOutline },
  ];

  const LINKS_BY_ROLE = {
    diretor: DIRETOR_SIDEBAR_LINKS,
    professor: PROFESSOR_SIDEBAR_LINKS.concat(STUDENT_SIDEBAR_LINKS),
    estudante: STUDENT_SIDEBAR_LINKS,
  };

  const roleLinks = LINKS_BY_ROLE[role] || [];

  return (
    <>
      {/* Botão para abrir a Sidebar no Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-purplePrimary text-white p-2 rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenuOutline size={24} />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-lg z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b dark:border-zinc-700">
          <div className="text-center sm:text-left">
            <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 capitalize">
              {user}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">{role}</span>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {COMMON_LINKS.concat(roleLinks).map(({ id, path, name, icon: Icon }) => (
            <Link
              key={id}
              to={path}
              className="flex items-center space-x-2 p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-purple-100 dark:hover:bg-zinc-800 hover:text-purplePrimary dark:hover:text-purple-400 transition"
            >
              <Icon size={20} />
              <span>{name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t dark:border-zinc-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-2 p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:bg-red-100 dark:hover:bg-zinc-800 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            <IoLogOutOutline size={20} />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
