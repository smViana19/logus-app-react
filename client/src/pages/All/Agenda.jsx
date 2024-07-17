import React, { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import NavLink from '../../components/Navs/NavLink';
import Logo from '../../components/outros/Logo';
import styled from 'styled-components';
import ModalCreateTask from '../../components/Modal/ModalCreateTask';
import LogoutButton from '../../components/Botoes/LogoutBtn';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Sidebar from '../../components/GoogleAgenda/Sidebar';
import Month from '../../components/GoogleAgenda/Month';
import GlobalContext from '../../context/GlobalContext';

import { getMonth } from '../../util'
import CalendarHeader from '../../components/GoogleAgenda/CalendarHeader';
import EventModal from '../../components/GoogleAgenda/EventModal';

const DayDiv = styled.div`
    font-size: 64px;
    font-weight: 500;
`;

const ContainerDate = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24px;
`;

const ContainerAllDate = styled.section`
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 88px; 
`;


export default function Agenda() {
    const [openModal, setOpenModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    // Handle task creation
    const handleCreateTask = (task) => {
        if (!task.nomeTarefa || !task.date || !task.time) {
            toast.warn('Preencha todos os campos para criar a tarefa!');
            return;
        }
        if (editingTask !== null) {
            const updatedTasks = tasks.map((t, index) => index === editingTask ? task : t)
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

    // desativar qd tiver sem api
    // if (!isLoggedIn) {
    //     return <Navigate to="/login" replace />;
    // }

//-----------------

    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex, showEventModal } =useContext(GlobalContext)
    useEffect(() => {
        
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex])

     

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <ToastContainer />
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link to="/">
                                        <Logo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>
                                <div className="hidden space-x-8 lg:-my-px lg:ms-10 lg:flex">
                                    <NavLink to='/dashboard'>
                                        Dashboard
                                    </NavLink>
                                    <NavLink to='/dashboard/postagens'>
                                        Área de Postagens
                                    </NavLink>
                                    <NavLink to='/dashboard/agenda' className='text-purplePrimary'>
                                        Agenda
                                    </NavLink>
                                    <NavLink to='/dashboard/pomodoro'>
                                        Método Pomodoro
                                    </NavLink>
                                    <LogoutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                <React.Fragment>
                {showEventModal && <EventModal /> }
                
                <div className='h-sreen flex-columns'>
                <CalendarHeader />
                    <div className='flex flex-1'>
                        <Sidebar />
                        <Month month={currentMonth}/>
                  
                    </div>
                </div>
            </React.Fragment>
                </main>

            </div >
           
        </>
    );
}
