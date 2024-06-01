import React, { useState } from 'react';

export default function ModalPomodoroSound({ isOpen, setOpenModal }) {
    const handleClose = (e) => {
        if (e.target.id === 'modalOverlay') {
            setOpenModal(false);
        }
    };

    const [bloqueado, setBloqueado] = useState(false);
    const alternarBloqueio = () => {
        setBloqueado((prevBloqueado) => !prevBloqueado);
    };

    if (!isOpen) return null;

    return (
        <div
            id="modalOverlay"
            className="bg-black flex justify-center items-center bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0"
            onClick={handleClose}
        >
            <div className="w-2/12 h-2/4 bg-white rounded-xl m-auto">
                <h3 className='text-center font-medium py-4'>Modo Foco</h3>
                <ul className='bg-gray-100 px-6'>
                    <li className='py-2 flex items-center gap-4' onClick={alternarBloqueio}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512">
                            <path fill="#820ad1" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                        <span>{bloqueado ? 'Desbloquear tela' : 'Bloquear tela'}</span>
                      
                    </li>
                </ul>
                <h3 className='text-center font-medium py-3'>Sons</h3>
                <ul className='bg-gray-100 px-6'>
                    <li className='py-2 flex items-center gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512">
                            <path fill="#820ad1" d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>
                        </svg>
                        Ruido Branco
                    </li>
                    <li className='py-2 flex items-center gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                            <path fill="#820ad1" d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z"/>
                        </svg>
                        Chuva
                    </li>
                </ul>
            </div>
        </div>
    );
}
