import React, { useState } from 'react';
import { Howl, Howler } from 'howler';
import rainSound from '../../assets/audios/rainSound.mp3';
import seaSound from '../../assets/audios/mar.mp3';
import librarySound from '../../assets/audios/biblioteca.mp3';

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
    Sea: seaSound,
    Library: librarySound,
  };

  const soundIcons = {
    Rain: (
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
    ),
    Sea: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="19"
        width="20.75"
        viewBox="0 0 576 512"
      >
        <path
          className="fill-purplePrimary"
          d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
        />
      </svg>
    ),
    Library: (
      <svg
        className="fill-purplePrimary"
        xmlns="http://www.w3.org/2000/svg"
        height="19"
        width="20.75"
        viewBox="0 0 576 512"
      >
        <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z" />
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
              className="flex px-8 gap-8 items-center py-3 border-b border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer"
            >
              {soundIcons[sound]}
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
                width: 14px;
                height: 14px;
                border-radius: 100%;
                background: #820ad1;
                cursor: pointer;
                transition: background 0.3s;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
