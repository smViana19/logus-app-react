import React, { useState } from 'react';
import { Howl } from 'howler';
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
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = (soundFile, soundName) => {
    if (soundInstance) {
      if (selectedSound === soundName) {
        soundInstance.stop(); 
        setSoundInstance(null);
        setSelectedSound('Nenhum');
        setIsPlaying(false);
        return;
      } else {
        soundInstance.stop(); // Para o som anterior antes de iniciar o novo
      }
    }
  
    const sound = new Howl({
      src: [soundFile],
      html5: true,
      volume: volume,
      onplay: () => {
        setIsPlaying(true);
      },
      onend: () => {
        setSoundInstance(null);
        setSelectedSound('Nenhum');
        setIsPlaying(false);
      },
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
      setIsPlaying(false);
    }
  };

  const sounds = {
    Rain: rainSound, 
    Study: '/path/to/study-sound.mp3',  
  };

  const soundIcons = {
    Rain: (
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
        <path className="fill-purplePrimary" d="M0 224c0 53 43 96 96 96..."/>
      </svg>
    ),
    Sea: (
      <svg xmlns="http://www.w3.org/2000/svg" height="19" width="20.75" viewBox="0 0 576 512">
        <path className="fill-purplePrimary" d="M269.5 69.9c11.1-7.9..."/>
      </svg>
    ),
    Library: (
      <svg className="fill-purplePrimary" xmlns="http://www.w3.org/2000/svg" height="19" width="20.75" viewBox="0 0 576 512">
        <path d="M249.6 471.5c10.8 3.8 22.4..."/>
      </svg>
    ),
  };

  if (!isOpen) return null;

  return (
    <div
      id="modalOverlay"
      className="bg-black flex justify-center items-center bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0"
      onClick={handleClose}
    >
      <div className="w-2/12 bg-white rounded-xl m-auto">
        <h3 className="text-center text-lg text-zinc-700 font-medium pb-4 pt-6 dark:text-zinc-100 dark:bg-zinc-700">
          Sons
        </h3>

        <ul className="">
          {Object.keys(sounds).map((sound) => (
            <li
              key={sound}
              onClick={() => playSound(sounds[sound], sound)}
              className="flex px-8 justify-between items-center py-3 border-b border-zinc-100 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer dark:text-zinc-100 dark:bg-zinc-700  dark:hover:bg-zinc-500"
            >
              <div className="flex items-center gap-8">
                {soundIcons[sound]}
                <span className="text-zinc-700 font-medium dark:text-white">
                  {sound}
                </span>
              </div>

              {isPlaying && selectedSound === sound && (
               <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
