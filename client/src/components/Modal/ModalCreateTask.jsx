import React, { useRef } from 'react';
import Switch from '../Switch';

export default function ModalCreateTask({ isOpen, setOpenModal }) {
    const nomeTarefaRef = useRef(null);
    const categoriaSelectRef = useRef(null);
    const urgenciaSelectRef = useRef(null);
    const timeInputRef = useRef(null);
    const dateInputRef = useRef(null);

    function criarTarefa() {
        const nomeTarefa = nomeTarefaRef.current.value;
        const selectCategoria = categoriaSelectRef.current.value;
        const selectUrgencia = urgenciaSelectRef.current.value;
        const time = timeInputRef.current.value;
        const date = dateInputRef.current.value;

        console.log(nomeTarefa);
        console.log(selectCategoria);
        console.log(selectUrgencia);
        console.log(time);
        console.log(date);

        const newTask = document.getElementById('new-task');
        newTask.innerHTML += `
            <div class='flex items-center gap-6 bg-[#F0F1F5] px-4 py-2 rounded-md'>
                <input type='checkbox' />
                <div class='w-full'>
                    <div class='flex items-center justify-between w-full'>
                        <span class='text-sm text-gray-700'>${selectCategoria}</span>

                        <div class='bg-[#EDDDFF] py-2 px-3 rounded-md'> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512">
                            <path fill="#820ad1" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                        </svg>
                        </div>
                    </div>
                    <div class='justify-start text-left'> 
                        <span>${nomeTarefa}</span>
                    </div>
                    <div class='text-sm text-gray-500'>
                        <span>${date} at ${time}</span>
                    </div>
                </div>
            </div>
        `;
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
                <input
                    className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-medium"
                    placeholder="Tarefa"
                    type="text"
                    ref={nomeTarefaRef}
                />
                <div className="flex gap-8">
                    <select
                        className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-base text-gray-400"
                        ref={categoriaSelectRef}
                    >
                        <option className="text-gray-400" value="" selected disabled>
                            Categoria
                        </option>
                        <option value="Escola">Escola</option>
                        <option value="Trabalho">Trabalho</option>
                    </select>
                    <select
                        id="urgencia-select"
                        className="bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-base text-gray-400"
                        ref={urgenciaSelectRef}
                    >
                        <option selected disabled value="">
                            Urgência
                        </option>
                        <option value="Urgente">Urgente</option>
                        <option value="Moderado">Moderado</option>
                        <option value="Tranquilo">Tranquilo</option>
                    </select>
                </div>
                <div className="flex gap-8">
                    <div className="bg-gray-200 w-full px-4 rounded-md text-lg flex items-center justify-between">
                        <span className="text-gray-400">Dia</span>
                        <Switch />
                    </div>
                    <div className="flex gap-10">
                        <div className="bg-gray-200 w-full px-4 py-2 rounded-md text-lg text-center flex items-center justify-center">
                            <input className="bg-gray-200 m-auto" type="time" ref={timeInputRef} />
                        </div>
                        <div className="bg-gray-200 w-full px-4 py-2 rounded-md text-lg text-center flex items-center justify-center">
                            <input className="bg-gray-200 m-auto" type="date" ref={dateInputRef} />
                        </div>
                    </div>
                </div>
                <button onClick={criarTarefa} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Criar Tarefa
                </button>
                <div id="new-task" className="mt-4"></div>
            </div>
        </div>
    );
}
