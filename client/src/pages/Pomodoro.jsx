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
                   <SelectTarefa/>
                </div>
                <div className='w-2/6 m-auto'>
                <StyledCircularProgressbar 
                    value={tempoDecorrido / 1500} // Normaliza o valor entre 0 e 1 para o progresso
                    text={formatarTempo(tempoDecorrido)} // Define o texto do CircularProgressbar
                />
                    <div className='grid grid-flow-row-dense grid-cols-5 gap-4'>
                        <BtnPrincipal className='start-btn py-3 rounded-xl text-xl col-span-4' onClick={alternarCronometro}>
                                {cronometroExecutando ? 'Pause' : 'Start'}
                        </BtnPrincipal>
                        <BtnPrincipal className='rounded-xl'>
                            Reset
                        </BtnPrincipal>
                    </div>
                </div>

                
            </main>
        </div>
    );
}






const StyledCircularProgressbar = styled(CircularProgressbar)`
    /* Defina a largura da barra preenchida */
    .CircularProgressbar-path {
        stroke-width: 6px; /* Ajuste a largura da barra preenchida conforme necessário */
    }

    /* Defina a largura da barra não preenchida */
    .CircularProgressbar-trail {
        stroke-width: 6px; /* Mantém a mesma largura da barra não preenchida */
    }

    /* Defina a cor da barra preenchida */
    .CircularProgressbar-path {
        stroke: rgb(109 40 217); /* Cor violeta com 100% de opacidade */
    }

    /* Defina a cor da barra não preenchida */
    .CircularProgressbar-trail {
        stroke: #d6d6d6; /* Cor da barra não preenchida */
    }

    /* Ajuste opcional para o tamanho e a margem do CircularProgressbar */
    width: 60%;
    margin: 64px auto;

    /* Defina a cor do texto */
    .CircularProgressbar-text {
        fill: #2e2e2e; /* Cor cinza escuro */
    }
`;
