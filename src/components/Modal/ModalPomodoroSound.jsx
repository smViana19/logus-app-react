import React, { useState } from 'react';
import { Howl, Howler } from 'howler';
import rainSound from '../../assets/audios/rainSound.mp3';

export default function ModalPomodoroSound({ isOpen, setOpenModal }) {
  const handleClose = (e) => {
    if (e.target.id === 'modalOverlay') {
      setOpenModal(false);
    }
  };

  const [selectedSound, setSelectedSound] = useState('Nenhum');
  const [soundInstance, setSoundInstance] = useState(null);
  const [volume, setVolume] = useState(1); 

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
      volume: volume, 
      onplay: () => setSoundInstance(sound), 
      onend: () => {
        setSoundInstance(null);
        setSelectedSound('Nenhum');
      },
    });

    sound.play();
    setSelectedSound(soundName);
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
      <div className="w-2/12 bg-white dark:bg-zinc-800 rounded-xl m-auto ">
        <h3 className="text-center text-lg text-gray-700 font-medium pb-4 pt-6 dark:text-white">
          Sons
        </h3>

        <ul>
          {Object.keys(sounds).map((sound) => (
            <li
              key={sound}
              onClick={() => {
                setSelectedSound(sound);
                playSound(sounds[sound], sound);
              }}
              className="flex px-8 gap-8 items-center py-3 border-b border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  className="fill-purplePrimary"
                  d="M0 224c0 53 43 96 96 96l47.2 0L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320l18.3 0 64 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7l70.1 0L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z"
                />
              </svg>
              <span className="text-gray-700 font-medium dark:text-white">
                {sound}
              </span>
            </li>
          ))}
        </ul>

        <div className="px-4 pt-4">
          <label className="text-gray-700  dark:text-white">
            Volume: {Math.round(volume * 100)}
          </label>
          <span className="flex gap-3 items-center mt-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="19"
              width="22.5"
              viewBox="0 0 640 512"
            >
              <path
                className="fill-purplePrimary"
                d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
              />
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolume(newVolume);
                if (soundInstance) {
                  soundInstance.volume(newVolume);
                }
              }}
              className="w-full rounded-lg overflow-hidden appearance-none bg-gray-300 dark:bg-gray-800 h-4 "
            />
          </span>

          <div className="relative w-full">
            <style jsx>{`
              input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 14px; /* Tamanho da bolinha */
                height: 14px; /* Tamanho da bolinha */
                border-radius: 100%; /* Bordas arredondadas */
                background: #820ad1; /* Cor da bolinha */
                cursor: pointer; /* Cursor de ponteiro ao passar por cima */
                transition: background 0.3s; /* Efeito de transição ao passar por cima */
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
