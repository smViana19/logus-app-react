import React from 'react';
import Switch from '../Switch';
import { select } from 'redux-saga/effects';

export default function ModalCreateTask({ isOpen, setOpenModal }) {

    function criarTarefa() {
        var nomeTarefa = document.getElementById('nome-tarefa').value;
        var selectCategoria = document.getElementById('categoria-select').value; // Alterado para o ID correto
        var selectUrgencia = document.getElementById('urgencia-select').value; 
        console.log(nomeTarefa); 
        console.log(selectCategoria);
        console.log(selectUrgencia);
    
        var newTask = document.getElementById('new-task')
        newTask.innerHTML += `
            <div>
               <input type='checkbox' />
               <div>
                    <div className='flex'>
                        <span>${selectCategoria}</span>
                        <div></div>
                    </div>

                    <div> 
                        <span>${nomeTarefa}</span>
                    </div>
               </div>
                
            </div>
        `
    }
    

    if (!isOpen) {
        return null;
    }

    return (
        <div className="bg-black bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="w-1/2 bg-white text-center px-8 rounded-lg pt-4 pb-8 flex flex-col justify-center gap-4">
                <button className="justify-end flex" onClick={() => setOpenModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="24.5" viewBox="0 0 384 512">
                        <path fill="#820ad1" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>

                <input className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-medium" placeholder="Tarefa" type="text" id='nome-tarefa' />

                <div className="flex gap-8">
                    <select className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-base text-gray-400">
                        <option className='text-gray-400' value="" selected disabled>Categoria</option>
                        <option value="Escola">Escola</option>
                        <option value="Trabalho">Trabalho</option>
                    </select>

                    <select id="urgencia-select" className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-base text-gray-400">
                        <option selected disabled value="">Urgência</option>
                        <option value="Urgente">Urgente</option>
                        <option value="Moderado">Moderado</option>
                        <option value="Tranquilo">Tranquilo</option>
                    </select>

                </div>

                <div className="flex gap-8">
                    <div className="bg-gray-200 w-full px-4 rounded-md text-lg flex items-center justify-between">
                        <span className='text-gray-400'>Dia</span>
                        <Switch />
                    </div>

                    <div className='flex gap-10'>
                        <div className="bg-gray-200 w-full px-4 py-2 rounded-md text-lg text-center flex items-center justify-center">
                            <input className='bg-gray-200 m-auto' type="time" />
                        </div>
                        <div className="bg-gray-200 w-full px-4 py-2 rounded-md text-lg text-center flex items-center justify-center">
                            <input className='bg-gray-200 m-auto' type="date" />
                        </div>
                    </div>
                </div>

                <button onClick={criarTarefa} className="bg-blue-500 text-white px-4 py-2 rounded-md">Criar Tarefa</button>

                <div id='new-task'>

                </div>
            </div>
        </div>
    );
}
