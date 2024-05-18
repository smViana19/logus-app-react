import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import BtnPrincipal from '../components/Botoes/BtnPrincipal';


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
                                <NavLink href="#">Área de Postagens</NavLink>
                                <NavLink href="#">Agenda</NavLink>
                                <NavLink href="#" to='/pomodoro'>Método Pomodoro</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>

                <div className='flex justify-center mt-8 rounded-lg'>
                    <select className='w-1/2 m-auto rounded-xl px-4 py-2 border border-gray-100' name="" id="">
                        <option className=' text-gray-300 ' value="" select disabled>Selecione sua tarefa</option>
                        <option value=""></option>
                    </select>
                </div>
                <div className='w-1/2 m-auto'>
                    <div className='cronometro-card border-4 border-violet-700 flex mx-auto w-96 h-96 flex-1 m-32 flex-col justify-center items-center px-8 py-16 rounded-full'>
                        <span className='text-6xl font-semibold text-center mb-16'>{formatarTempo(tempoDecorrido)}</span>
                    
                    </div>
                    <BtnPrincipal className='start-btn py-4 rounded-xl text-xl' onClick={alternarCronometro}>
                            {cronometroExecutando ? 'Pause' : 'Start'}
                        </BtnPrincipal>
                </div>
            </main>
        </div>
    );
}
