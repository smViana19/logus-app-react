import React, { useRef } from 'react';
import Switch from '../Checkbox/Switch.jsx';

export default function ModalCreateTask({ isOpen, setOpenModal, onCreateTask }) {
    const nomeTarefaRef = useRef(null);
    const categoriaSelectRef = useRef(null);
    const urgenciaSelectRef = useRef(null);
    const timeInputRef = useRef(null);
    const dateInputRef = useRef(null);
    const modalContentRef = useRef(null);

    function criarTarefa() {

        const nomeTarefa = nomeTarefaRef.current.value;
        const selectCategoria = categoriaSelectRef.current.value;
        const selectUrgencia = urgenciaSelectRef.current.value;
        const time = timeInputRef.current.value;
        const date = dateInputRef.current.value;


        // Create a task object
        const task = {
            nomeTarefa,
            selectCategoria,
            selectUrgencia,
            time,
            date,
        };


        // Call the onCreateTask function passed as a prop
        onCreateTask(task);

        // Close the modal
        setOpenModal(false);
    }

    function handleOverlayClick(e) {
        if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
            setOpenModal(false);
        }
    }

    if (!isOpen) {
        return null;
    }

    return (

        <div
            className="bg-black bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"
            onClick={handleOverlayClick}
        >

            <div
                className="w-1/2 bg-white text-center px-8 rounded-lg pt-4 pb-8 flex flex-col justify-center gap-4"
                ref={modalContentRef}
            >
                <button className="justify-end flex" onClick={() => setOpenModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="24.5" viewBox="0 0 384 512">
                        <path fill="#820ad1" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>
                <input
                    className="bg-zinc-200 w-full px-4 rounded-md py-2 text-lg font-medium"
                    placeholder="Tarefa"
                    type="text"
                    ref={nomeTarefaRef}
                />
                <div className="flex gap-8">
                    <select
                        className="bg-zinc-200 w-full px-4 rounded-md py-2 text-lg font-base text-zinc-400"
                        ref={categoriaSelectRef}
                    >
                        <option className="text-zinc-400" value="" selected disabled>
                            Categoria
                        </option>
                        <option value="Escola">Escola</option>
                        <option value="Trabalho">Trabalho</option>
                    </select>
                    <select
                        id="urgencia-select"
                        className="bg-zinc-200 w-full px-4 rounded-md py-2 text-lg font-base text-zinc-400"
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
                    <div className="bg-zinc-200 w-full px-4 rounded-md text-lg flex items-center justify-between">
                        <span className="text-zinc-400">Dia</span>
                        <Switch />
                    </div>
                    <div className="flex gap-10">
                        <div className="bg-zinc-200 w-full px-4 py-2 rounded-md text-lg text-center flex items-center justify-center">
                            <input className="bg-zinc-200 m-auto" type="time" ref={timeInputRef} />
                        </div>
                        <div className="bg-zinc-200 w-full px-4 py-2 rounded-md text-lg text-center flex items-center justify-center">
                            <input className="bg-zinc-200 m-auto" type="date" ref={dateInputRef} />
                        </div>
                    </div>
                </div>
                <button onClick={criarTarefa} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Criar Tarefa
                </button>
            </div>
        </div>
    );
}
