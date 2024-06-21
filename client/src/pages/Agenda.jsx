import React, { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import NavLink from '../components/Navs/NavLink';
import Logo from '../components/outros/Logo';
import styled from 'styled-components';
import ModalCreateTask from '../components/Modal/ModalCreateTask';
import LogoutButton from '../components/Botoes/LogoutBtn';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Sidebar from '../components/GoogleAgenda/Sidebar';
import Month from '../components/GoogleAgenda/Month';
import GlobalContext from '../context/GlobalContext';

import { getMonth } from '../util'
import CalendarHeader from '../components/GoogleAgenda/CalendarHeader';

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
    const { monthIndex } =useContext(GlobalContext)
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
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
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
                    <ContainerAllDate>
                        <div className='flex items-center'>
                            <DayDiv>24</DayDiv>
                            <ContainerDate>
                                <span>Quarta-Feira</span>
                                <span>De Fevereiro</span>
                            </ContainerDate>
                        </div>
                        <button className='bg-purple-700 w-12 h-10 rounded-xl text-white' onClick={() => setOpenModal(true)}>
                            +
                        </button>
                    </ContainerAllDate>

                    {/* Render the tasks */}
                    <div className="mt-4">
                        {tasks.map((task, index) => (
                            <div key={index} className='flex items-center gap-6 bg-[#F0F1F5] px-4 py-2 rounded-lg max-w-7xl m-auto my-4'>
                                <div class="inline-flex items-center">
                                    <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                                        <input type="checkbox"
                                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                            id="check" />
                                        <span
                                            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </label>

                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center justify-between w-full'>
                                        <span className='text-sm text-gray-700'>{task.selectCategoria}</span>
                                        <div className='bg-[#EDDDFF] py-2 px-3 rounded-md'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512">
                                                <path fill="#820ad1" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="">
                                        <div className='justify-start text-start'>
                                            <span>{task.nomeTarefa}</span>
                                        </div>

                                        <div className='text-sm text-gray-500'>
                                            <span>{task.date} at {task.time}</span>

                                        </div>
                                        <div className='flex justify-end items-center mt-2'>
                                            <button className='bg-purple-700 w-10 h-10 rounded-xl text-white flex items-center justify-center mr-2' onClick={() => handleEditTask(index)}>
                                                <FaRegEdit />
                                            </button>
                                            <button className='bg-red-600 w-10 h-10 rounded-xl text-white flex items-center justify-center' onClick={() => handleDeleteTask(index)}>
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <ModalCreateTask isOpen={openModal} setOpenModal={setOpenModal} onCreateTask={handleCreateTask} />
                </main >

            </div >
            <React.Fragment>
                <div className='h-sreen flex-columns'>
           
                <CalendarHeader />

                    <div className='flex flex-1'>
                        <Sidebar />
                        <Month month={currentMonth}/>
                  
                    </div>
                </div>
            </React.Fragment>
        </>
    );
}
