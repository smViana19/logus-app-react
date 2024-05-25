import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import styled from 'styled-components';
import ModalCreateTask from '../components/Modal/ModalCreateTask';

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
`;



export default function Agenda() {

    const [openModal, setOpenMOdal] = useState(false)

    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    // if (!isLoggedIn) {
    //     return <Navigate to="/login" replace />;
    // } 

    return (
        <>
            <div className="min-h-screen bg-gray-50">
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
                                        href="#" >
                                        Dashboard
                                    </NavLink>

                                    <NavLink
                                        href="#" >
                                        Área de Postagens {/* fazer dropdown - resumo slide etc */}
                                    </NavLink>
                                    <NavLink
                                        href="#" to='/agenda' >
                                        Agenda
                                    </NavLink>
                                    <NavLink
                                        href="#" to='/pomodoro' >
                                        Método Pomodoro
                                    </NavLink>
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

                        <button className='bg-purple-700 w-12 h-10 rounded-xl color-white' onClick={() => setOpenMOdal(true)}>
                                +
                        </button>


                    </ContainerAllDate>
                    <ModalCreateTask isOpen={openModal} />

                </main>
            </div>
        </>
    );
}
