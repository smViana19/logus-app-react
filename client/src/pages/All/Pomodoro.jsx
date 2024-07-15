import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../../components/Navs/NavLink';
import Logo from '../../components/outros/Logo';
import BtnPrincipal from '../../components/Botoes/BtnPrincipal';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import LogoutButton from '../../components/Botoes/LogoutBtn';
import BtnPomodoroOpenModal from '../../components/Botoes/BtnPomodoroOpenModal';
import ModalPomodoroSound from '../../components/Modal/ModalPomodoroSound';

export default function Pomodoro() {
    const [tempoDecorrido, setTempoDecorrido] = useState(1500);
    const [intervaloId, setIntervaloId] = useState(null);
    const [cronometroExecutando, setCronometroExecutando] = useState(false);
    const [bloqueado, setBloqueado] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const contagemRegressiva = () => {
            setTempoDecorrido((prevTempo) => {
                if (prevTempo <= 0) {
                    clearInterval(intervaloId);
                    setIntervaloId(null);
                    setCronometroExecutando(false);
                    return 0;
                }
                return prevTempo - 1;
            });
        };

        if (cronometroExecutando) {
            const id = setInterval(contagemRegressiva, 1000);
            setIntervaloId(id);
            return () => clearInterval(id);
        } else {
            clearInterval(intervaloId);
            setIntervaloId(null);
        }
    }, [cronometroExecutando]);

    const alternarCronometro = () => {
        setCronometroExecutando((prevExecutando) => !prevExecutando);
    };

    const resetarCronometro = () => {
        clearInterval(intervaloId);
        setIntervaloId(null);
        setCronometroExecutando(false);
        setTempoDecorrido(1500);
    };

    const formatarTempo = (tempo) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        return `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    };

    const alternarBloqueio = () => {
        setBloqueado((prevBloqueado) => !prevBloqueado);
    };

    const abrirModal = () => {
        console.log('Abrindo modal');
        setOpenModal(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 relative">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link to="/">
                                    <Logo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="#" to='/dashboard'>Dashboard</NavLink>
                                <NavLink href="#" to='/dashboard/postagens' >Área de Postagens</NavLink>
                                <NavLink href="#" to='/dashboard/agenda'>Agenda</NavLink>
                                <NavLink href="#" to='/dashboard/pomodoro' className='text-purplePrimary'>Método Pomodoro</NavLink>
                                <NavLink href="#" to='/dashboard/notas' className='text-purplePrimary'>Notas</NavLink>
                                <LogoutButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <ContainerButtons className='flex justify-around mt-8 rounded-lg w-2/4 m-auto'>
                    <BtnPomodoroOpenModal onClick={abrirModal}
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="16" viewBox="0 0 512 512">
                                <path fill="#820ad1" d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
                             </svg>
                             }
                        text={'Modo Foco'}
                    />
                    <BtnPomodoroOpenModal onClick={alternarBloqueio}
                        svg={
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="16" viewBox="0 0 512 512">
                                <path fill="#820ad1" d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                            </svg>}
                        text={bloqueado ? 'Desbloquear tela' : 'Bloquear tela'}
                    />
                </ContainerButtons>
                <ContainerProgressBar className='w-2/6 m-auto'>
                    <StyledCircularProgressbar
                        value={(1500 - tempoDecorrido) / 1500 * 100}
                        text={formatarTempo(tempoDecorrido)}
                    />
                    <div className='grid grid-flow-row-dense grid-cols-5 gap-4'>
                        <BtnPrincipal className='start-btn py-3 rounded-xl text-xl col-span-4' onClick={alternarCronometro}>
                            {cronometroExecutando ? 'Pause' : 'Start'}
                        </BtnPrincipal>
                        <BtnPrincipal className='rounded-xl' onClick={resetarCronometro}>
                            Reset
                        </BtnPrincipal>
                    </div>
                </ContainerProgressBar>

                <ModalPomodoroSound 
                    isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}
                />
            </main>
            {bloqueado && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
                    <span className="text-white text-2xl mb-4">Tela Bloqueada</span>
                    <button
                        className="bg-white text-black px-4 py-2 rounded-lg"
                        onClick={alternarBloqueio}
                    >
                        Desbloquear Tela
                    </button>
                </div>
            )}
            
        </div>
    );
}

const StyledCircularProgressbar = styled(CircularProgressbar)`
    .CircularProgressbar-path {
        stroke-width: 6px;
        stroke: rgb(109 40 217);
    }
    .CircularProgressbar-trail {
        stroke-width: 6px;
        stroke: #d6d6d6;
    }
    width: 60%;
    margin: 64px auto;
    .CircularProgressbar-text {
        fill: #2e2e2e;
    }

    @media screen and (max-width: 768px) {
        width: 58%;
    }
`;

const ContainerButtons = styled.div `
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const ContainerProgressBar = styled.div `
    @media screen and (max-width: 768px) {
        width: 80%
    }
`;
