import React from 'react';
import Switch from '../Switch';

export default function ModalCreateTask({ isOpen, setOpenModal }) {
    if (isOpen) {
        return (
            <div className="bg-black bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <div className="w-1/2 bg-white text-center px-8 rounded-lg h-2/5 flex flex-col justify-center gap-4">
                    <button onClick={setOpenModal}>Fechar</button>

                    <input className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-medium" placeholder="Tarefa" type="text" />

                    <div className="flex gap-8">
                        <select className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-medium" name="" id="">
                            <option className='text-gray-400' value="" selected disabled>Categoria</option>
                            <option value="">Escola</option>
                            <option value="">Trabalho</option>
                        </select>
                        <select className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-medium" name="" id="">
                            <option selected disabled value="">Urgência</option>
                            <option value="">Urgente</option>
                            <option value="">Moderado</option>
                            <option value="">Tranquilo</option>
                        </select>
                    </div>

                    <div className="flex gap-8">
                        <div className="bg-gray-200 w-full px-4 rounded-md text-lg flex items-center justify-between">
                            <span className='text-gray-400'>Dia</span>
                            <Switch />
                        </div>

                        <div className="bg-gray-200 w-full px-4 py-2 rounded-md text-lg flex items-center justify-between">
                            <span className='text-gray-400'>Dia</span>
                            <Switch />                            
                        </div>
                    </div>

                    <input className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg" placeholder="Data" type="text" />
                </div>
            </div>
        );
    }
    return null;
}
