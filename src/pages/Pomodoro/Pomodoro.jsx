import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import NavBar from '../../components/Navs/NavBar.jsx'; // Alterado para importar NavBar
import Logo from '../../components/Logo/Logo.jsx';
import DefaultButton from '../../components/Buttons/DefaultButton.jsx';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import LogoutButton from '../../components/Buttons/LogoutButton.jsx';
import OpenModalPomodoroButton from '../../components/Buttons/OpenModalPomodoroButton.jsx';
import ModalPomodoroSound from '../../components/Modal/ModalPomodoroSound.jsx';
import MenuMobile from '../../components/Navs/MenuMobile.jsx';
import { useSelector } from 'react-redux';

const TEMPO_TRABALHO = 1500; // 25 minutos
const TEMPO_DESCANSO = 300; // 5 minutos

export default function Pomodoro() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [tempoDecorrido, setTempoDecorrido] = useState(TEMPO_TRABALHO);
    const [intervaloId, setIntervaloId] = useState(null);
    const [cronometroExecutando, setCronometroExecutando] = useState(false);
    const [bloqueado, setBloqueado] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modoDescanso, setModoDescanso] = useState(false);

    useEffect(() => {
        const contagemRegressiva = () => {
            setTempoDecorrido((prevTempo) => {
                if (prevTempo <= 0) {
                    clearInterval(intervaloId);
                    setIntervaloId(null);
                    setCronometroExecutando(false);
                    setModoDescanso((prevModoDescanso) => !prevModoDescanso);
                    return modoDescanso ? TEMPO_TRABALHO : TEMPO_DESCANSO;
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
    }, [cronometroExecutando, modoDescanso]);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    const alternarCronometro = () => {
        setCronometroExecutando((prevExecutando) => !prevExecutando);
    };

    const resetarCronometro = () => {
        clearInterval(intervaloId);
        setIntervaloId(null);
        setCronometroExecutando(false);
        setTempoDecorrido(TEMPO_TRABALHO);
        setModoDescanso(false);
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

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verificar o tema armazenado no localStorage ao carregar a página
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const handleThemeChange = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="min-h-screen bg-gray-50 relative">
            <nav className="bg-white border-b border-gray-50 shadow-md shadow-gray-50">
                <MenuMobile />

                    <NavBar  handleThemeChange={handleThemeChange} isDarkMode={isDarkMode}/>

            </nav>
            <main>
                <ContainerButtons className="flex justify-around mt-8 rounded-lg w-2/4 m-auto">
                    <OpenModalPomodoroButton
                        onClick={abrirModal}
                        svg={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                width="16"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#820ad1"
                                    d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"
                                />
                            </svg>
                        }
                        text={'Modo Foco'}
                    />
                    <OpenModalPomodoroButton
                        onClick={alternarBloqueio}
                        svg={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                width="16"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#820ad1"
                                    d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                                />
                            </svg>
                        }
                        text={bloqueado ? 'Desbloquear tela' : 'Bloquear tela'}
                    />
                </ContainerButtons>
                <ContainerProgressBar className="w-2/6 m-auto">
                    <StyledCircularProgressbar
                        className="dark:text-zinc-100"
                        value={(modoDescanso ? TEMPO_DESCANSO : TEMPO_TRABALHO - tempoDecorrido) / (modoDescanso ? TEMPO_DESCANSO : TEMPO_TRABALHO) * 100}
                        text={formatarTempo(tempoDecorrido)}
                    />
                    <div className="grid grid-flow-row-dense grid-cols-5 gap-4">
                        <DefaultButton
                            className="start-btn py-3 rounded-xl text-xl col-span-4 dark:text-zinc-100"
                            onClick={alternarCronometro}
                        >
                            {cronometroExecutando ? 'Pause' : modoDescanso ? 'Começar Descanso' : 'Start'}
                        </DefaultButton>
                        <DefaultButton
                            className="rounded-xl dark:text-zinc-100"
                            onClick={resetarCronometro}
                        >
                            Reset
                        </DefaultButton>
                    </div>
                </ContainerProgressBar>

                <ModalPomodoroSound isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} />
            </main>
            {bloqueado && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50 dark:text-zinc-100">
                    <span className="text-white text-2xl mb-4">Tela Bloqueada</span>
                    <button
                        className="bg-white text-black px-4 py-2 rounded-lg dark:text-zinc-100 dark:bg-zinc-800"
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
        stroke: #820AD1;
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

const ContainerButtons = styled.div`
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const ContainerProgressBar = styled.div`
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;