import React, { useEffect, useState } from 'react';
import DefaultButton from '../../components/Buttons/DefaultButton.jsx';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import OpenModalPomodoroButton from '../../components/Buttons/OpenModalPomodoroButton.jsx';
import ModalPomodoroSound from '../../components/Modal/ModalPomodoroSound.jsx';
import { useSelector } from 'react-redux';
import { IoIosMusicalNotes } from 'react-icons/io';

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


  const abrirModal = () => {
    console.log('Abrindo modal');
    setOpenModal(true);
  };

  


  return (
      <div
          className="min-h-screen  relative sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
        <main>
          <ContainerButtons
              className="flex justify-center gap-8 ">
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

            

          </ContainerButtons>
          <ContainerProgressBar className="w-11/12 md:w-2/6 mx-auto">
            <StyledCircularProgressbar
                value={(modoDescanso ? TEMPO_DESCANSO : TEMPO_TRABALHO - tempoDecorrido) / (modoDescanso ? TEMPO_DESCANSO : TEMPO_TRABALHO) * 100}
                text={formatarTempo(tempoDecorrido)}
            />
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <DefaultButton
                  className="start-btn rounded-xl text-lg col-span-4 dark:text-zinc-100 lg:text-xl lg:py-3 min-w-[240px] w-full md:w-auto"
                  onClick={alternarCronometro}
              >
                {cronometroExecutando ? 'Pause' : modoDescanso ? 'Começar Descanso' : 'Start'}
              </DefaultButton>
              <DefaultButton
                  className="start-btn py-3 rounded-xl text-lg col-span-4 dark:text-zinc-100 lg:text-xl lg:py-3 min-w-[240px] w-full md:w-auto"
                  onClick={resetarCronometro}
              >
                Reset
              </DefaultButton>
            </div>
          </ContainerProgressBar>

          <ModalPomodoroSound isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} />
        </main>

        
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
