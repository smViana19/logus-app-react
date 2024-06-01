import React from 'react';

export default function ModalPomodoroSound({ isOpen, setOpenModal }) {
    const handleClose = (e) => {
        if (e.target.id === 'modalOverlay') {
            setOpenModal(false);
        }
    };

    if (isOpen) {
        return (
            <div
                id="modalOverlay"
                className="bg-black flex justify-center items-center bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0"
                onClick={handleClose}
            >
                <div className="w-2/12 h-2/4 bg-white rounded-xl m-auto">
                    <h3 className='text-center font-medium py-4'>Modo Foco</h3>
                    <ul className='bg-gray-100 px-6'>
                        <li className='py-2'>Bloquear Tela</li>
                        

                    </ul>
                </div>
            </div>
        );
    }
    return null;
}
