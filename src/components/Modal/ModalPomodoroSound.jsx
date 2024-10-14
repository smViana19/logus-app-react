import React, { useState } from 'react';
<<<<<<< HEAD
import { Howl, Howler } from 'howler';
import rainSound from '../../assets/audios/rainSound.mp3';

export default function ModalPomodoroSound({ isOpen, setOpenModal }) {
  const handleClose = (e) => {
    if (e.target.id === 'modalOverlay') {
      setOpenModal(false);
      stopSound(); // Para o som ao fechar a modal
    }
  };

  const [selectedSound, setSelectedSound] = useState('Nenhum');
  const [soundInstance, setSoundInstance] = useState(null);

  const playSound = (soundFile, soundName) => {
    if (soundInstance) {
      if (selectedSound === soundName) {
        soundInstance.stop(); 
        setSoundInstance(null);
        setSelectedSound('Nenhum'); 
        return; 
      } else {
        soundInstance.stop(); 
      }
    }
  
    const sound = new Howl({
      src: [soundFile],
      html5: true, 
    });
  
    sound.play();
    setSoundInstance(sound); 
    setSelectedSound(soundName); 
  };

  const stopSound = () => {
    if (soundInstance) {
      soundInstance.stop();
      setSoundInstance(null); 
      setSelectedSound('Nenhum');
    }
  };

  const sounds = {
    Rain: rainSound, 
    Study: '/path/to/study-sound.mp3',  
  };
  
  if (!isOpen) return null;

  return (
    <div
      id="modalOverlay"
      className="bg-black flex justify-center items-center bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0"
      onClick={handleClose}
    >
      <div className="w-2/12 bg-white rounded-xl m-auto">
        <h3 className="text-center text-lg text-gray-700 font-medium pb-4 pt-6">
          Sons
        </h3>

        <ul className="">
          {Object.keys(sounds).map((sound) => (
            <li
              key={sound}
              onClick={() => {
                setSelectedSound(sound);
                playSound(sounds[sound], sound); 
              }}
              className="flex px-8 gap-8 items-center py-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path className="fill-purplePrimary" d="M0 224c0 53 43 96 96 96l47.2 0L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320l18.3 0 64 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7l70.1 0L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z" />
              </svg>
              <span className="text-gray-700 font-medium">{sound}</span>
            </li>
          ))}
        </ul>

        <button 
          className="bg-purplePrimary w-full rounded-b-xl py-3 text-white transition"
          onClick={() => {
            stopSound();
            setOpenModal(false);
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
=======

export default function ModalPomodoroSound({ isOpen, setOpenModal }) {
    const handleClose = (e) => {
        if (e.target.id === 'modalOverlay') {
            setOpenModal(false);
        }
    };

    const [selectedSound, setSelectedSound] = useState('Nenhum');

    if (!isOpen) return null;

    return (
        <div
            id="modalOverlay"
            className="bg-black flex justify-center items-center bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0"
            onClick={handleClose}
        >
            <div className="w-2/12 bg-white rounded-xl m-auto">               
                <h3 className='text-center text-lg text-gray-700 font-medium pb-4 pt-6'>Sons</h3>
                <ul className='bg-gray-100 rounded-xl'>
                    <li 
                        className={`px-6 py-3 flex items-center gap-4 cursor-pointer hover:border-b hover:border-gray-300  ${selectedSound === 'Nenhum' ? 'bg-gray-200' : 'bg-gray-100'}`} 
                        onClick={() => setSelectedSound('Nenhum')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                            <path fill="#820ad1" d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
                        </svg>
                        Nenhum
                    </li>
                    <li 
                        className={`py-3 px-6 flex items-center gap-4 cursor-pointer hover:border-b hover:border-gray-300 ${selectedSound === 'Ruido Branco' ? 'bg-gray-200' : 'bg-gray-100'}`} 
                        onClick={() => setSelectedSound('Ruido Branco')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512">
                            <path fill="#820ad1" d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>
                        </svg>
                        Ruido Branco
                    </li>
                    <li 
                        className={`py-3 px-6 flex items-center gap-4 cursor-pointer hover:border-b hover:border-gray-300  ${selectedSound === 'Chuva' ? 'bg-gray-200' : 'bg-gray-100'}`} 
                        onClick={() => setSelectedSound('Chuva')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                            <path fill="#820ad1" d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z"/>
                        </svg>
                        Chuva
                    </li>
                    <li 
                        className={`py-3 px-6 flex items-center gap-4 cursor-pointer hover:border-b hover:border-gray-300 ${selectedSound === 'Rio' ? 'bg-gray-200' : 'bg-gray-100'}`} 
                        onClick={() => setSelectedSound('Rio')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10.5" viewBox="0 0 384 512">
                            <path fill="#820ad1" d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/>
                        </svg>
                        Rio
                    </li>
                    <li 
                        className={`py-3 px-6 flex items-center gap-4 cursor-pointer hover:border-b hover:border-gray-300  ${selectedSound === 'Biblioteca' ? 'bg-gray-200' : 'bg-gray-100'}`} 
                        onClick={() => setSelectedSound('Biblioteca')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                            <path fill="#820ad1" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                        </svg>
                        Biblioteca
                    </li>
                    <li 
                        className={`py-3 px-6 flex items-center cursor-pointer gap-4 hover:border-b hover:border-gray-300  ${selectedSound === 'Cafeteria' ? 'bg-gray-200' : 'bg-gray-100'}`} 
                        onClick={() => setSelectedSound('Cafeteria')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                            <path fill="#820ad1" d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/>
                        </svg>
                        Cafeteria
                    </li>
                </ul>
                <button className='bg-gray-400 w-full rounded-b-xl py-3 text-white hover:bg-gray-500 transition '>Confirmar</button>
            </div>
        </div>
    );
>>>>>>> 86a1f6a68f2a277bd3abd7dd817c2d7cbd65870e
}
