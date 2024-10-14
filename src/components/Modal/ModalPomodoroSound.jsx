import React, { useState } from 'react';
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
}
