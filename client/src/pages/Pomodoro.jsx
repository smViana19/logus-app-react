import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import BtnPrincipal from '../components/Botoes/BtnPrincipal';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Importe os estilos CSS do react-circular-progressbar
import styled from 'styled-components';
import SelectTarefa from '../components/Inputs/SelectTarefa';

export default function Pomodoro() {
    const [tempoDecorrido, setTempoDecorrido] = useState(1500);
    const [intervaloId, setIntervaloId] = useState(null);
    const [cronometroExecutando, setCronometroExecutando] = useState(false);

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

    return (
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
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="#" to='/dashboard'>Dashboard</NavLink>
                                <NavLink href="#" to='/dashboard/postagens' >Área de Postagens</NavLink>
                                <NavLink href="#" to='/dashboard/agenda'>Agenda</NavLink>
                                <NavLink href="#" to='/dashboard/pomodoro' className='text-purplePrimary'>Método Pomodoro</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <div className='flex justify-center mt-8 rounded-lg'>
                    <SelectTarefa />
                </div>
                <div className='w-2/6 m-auto'>
                    <StyledCircularProgressbar
                        value={(1500 - tempoDecorrido) / 1500 * 100} // Normaliza o valor entre 0 e 100 para o progresso
                        text={formatarTempo(tempoDecorrido)} // Define o texto do CircularProgressbar
                    />
                    <div className='grid grid-flow-row-dense grid-cols-5 gap-4'>
                        <BtnPrincipal className='start-btn py-3 rounded-xl text-xl col-span-4' onClick={alternarCronometro}>
                            {cronometroExecutando ? 'Pause' : 'Start'}
                        </BtnPrincipal>
                        <BtnPrincipal className='rounded-xl' onClick={resetarCronometro}>
                            Reset
                        </BtnPrincipal>
                    </div>
                </div>
            </main>
            <aside className='fixed right-8 top-24'>
                <div className=' bg-gray-200 h-32 w-56 rounded-lg px-4 py-4'>
                    <span className='font-base text-lg '>Tempo de foco hoje: </span>
                    <span className='text-2xl font-medium text-violet-900 mt-8'>00:00</span>
                </div>
            </aside>
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
`;
