import React, { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import NavLink from '../../components/Navs/NavLink';
import Logo from '../../components/Logo/Logo.jsx';
import styled from 'styled-components';
import ModalCreateTask from '../../components/Modal/ModalCreateTask';
import LogoutButton from '../../components/Buttons/LogoutButton.jsx';
import { toast, ToastContainer } from 'react-toastify';
import Sidebar from '../../components/Schedule/Sidebar';
import Month from '../../components/Schedule/Month';
import GlobalContext from '../../context/GlobalContext';
import MenuMobile from '../../components/Navs/MenuMobile';
import { getMonth } from '../../util';
import CalendarHeader from '../../components/Schedule/CalendarHeader';
import EventModal from '../../components/Schedule/EventModal';


export default function Agenda() {
    const [openModal, setOpenModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const { isLoggedIn, isLoading } = useSelector((state) => ({
        isLoggedIn: state.auth.isLoggedIn,
        isLoading: state.auth.isLoading,
    }));

    // Handle task creation
    const handleCreateTask = (task) => {
        if (!task.nomeTarefa || !task.date || !task.time) {
            toast.warn('Preencha todos os campos para criar a tarefa!');
            return;
        }
        if (editingTask !== null) {
            const updatedTasks = tasks.map((t, index) => index === editingTask ? task : t);
            setTasks(updatedTasks);
        } else {
            setTasks(prevTasks => [...prevTasks, task]);
        }
    };
    const handleEditTask = (index) => {
        setEditingTask(index);
        setOpenModal(true);
    };
    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        setOpenModal(false);
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

//-----------------

    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);
    useEffect(() => {

        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);


    return (
        <>
            <div className="min-h-screen bg-gray-50 relative dark:bg-zinc-800 dark:text-white">
                <nav className="bg-white border-b border-gray-50 shadow-md shadow-gray-50 dark:bg-zinc-800">
                    <MenuMobile />
                    <div className="flex justify-between py-2 px-32">
                        <div className="flex items-center">
                            <Link to="/">
                                <Logo className="block h-12 w-auto fill-current" />
                            </Link>
                        </div>

                        <div className="flex justify-around">
                            <div className="space-x-8  lg:flex">
                                <NavLink to="/dashboard" className="">
                                    Dashboard
                                </NavLink>
                                <NavLink to="/dashboard/postagens" className="">
                                    Área de Postagens
                                </NavLink>
                                <NavLink to="/dashboard/agenda" className="">
                                    Agenda
                                </NavLink>
                                <NavLink to="/dashboard/pomodoro" className="">
                                    Método Pomodoro
                                </NavLink>

                            </div>
                            <div className="flex justify-between"></div>
                        </div>
                        <div className="flex justify-center gap-16">
                            <NavLink to="/dashboard/perfil" className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="14"
                                    width="12.25"
                                    viewBox="0 0 448 512"
                                >
                                    <path className="fill-gray-400"
                                          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                            </NavLink>
                            <LogoutButton />
                        </div>
                    </div>
                </nav>

                <main>
                    <React.Fragment>
                        {showEventModal && <EventModal />}

                        <div className="h-sreen flex-columns">
                            <CalendarHeader />
                            <div className="flex flex-1">
                                <Sidebar />
                                <Month month={currentMonth} />

                            </div>
                        </div>
                    </React.Fragment>
                </main>

            </div>

        </>
    );
}
