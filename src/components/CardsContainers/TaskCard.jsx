import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import ModalEditarAtv from '../../components/Modal/ModalEditarAtv';
import { useDispatch } from 'react-redux';
import { selectMaterial } from '@/store/modules/submit/action'; // Importar a action correta para selecionar a atividade

const TaskCard = ({ nome, categoria, dataEntrega, pontos, file, detail, onDelete,  material, idAtv, fetchAtividades }) => {
    const { nomeMateria } = useParams();
    const [showModalOption, setShowModalOptions] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedMaterialId, setSelectedMaterialId] = useState(null);

    const dispatch = useDispatch();

    const handleSelectMaterial = () => {
        dispatch(selectMaterial(material));
    };

    const modalRef = useRef(null);

    const handleRightClick = (event) => {
        event.preventDefault();
        setShowModalOptions(true);
        setSelectedMaterialId(idAtv);
        console.log(`ID da atividade selecionada: ${idAtv}`);
    };

    const handleCloseModal = () => {
        setShowModalOptions(false);
    };

    const handleEditComplete = () => {
        fetchAtividades()
    }

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        if (showModalOption) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModalOption]);

    const handleEdit = () => {
        dispatch(selectMaterial(material));
        setShowEditModal(true);
        handleCloseModal();
    };

    const handleDelete = () => {
        if (window.confirm('Tem certeza que deseja excluir esta atividade?')) {
            onDelete();
            handleCloseModal();
        }
    };

    const dataPostagem = new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    const dataEntregaFormatada = dataEntrega
        ? (() => {
            const data = new Date(dataEntrega);
            return isNaN(data.getTime())
                ? 'Data de entrega inválida'
                : data.toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
        })()
        : '';

    return (
        <div onContextMenu={handleRightClick} className="relative">
            {showModalOption && (
                <ul
                    ref={modalRef}
                    className="absolute top-2 right-2 bg-white px-2 rounded-md py-2 shadow-lg"
                    onClick={handleCloseModal}
                >
                    <li className="py-1 px-6 border-b border-zinc-100 cursor-pointer" onClick={handleEdit}>
                        Editar
                    </li>
                    <li className="py-1 px-6 cursor-pointer" onClick={handleDelete}>
                        Excluir
                    </li>
                </ul>
            )}
            <Link
                to={`/dashboard/postagens/${nomeMateria}/${nome}`}
                state={{
                    categoria,
                    dataEntrega,
                    pontos,
                    detail,
                    file,
                    subject_material_id: idAtv
                }}
                className="bg-white border border-zinc-100 py-4 px-8 rounded-md mb-4 block dark:bg-zinc-700 dark:text-zinc-100"
                onClick={handleSelectMaterial}
            >
                <div className="md:flex md:justify-between">
                    <div className="flex gap-6">
                        <span className="font-medium first-letter:uppercase">{nome}</span>
                        <span className="rounded px-4 py-1 font-medium text-xs text-purple-700 bg-purple-200 dark:bg-purple-700 dark:text-purple-200">
                            {categoria}
                        </span>
                    </div>
                    <span>{dataEntregaFormatada}</span>
                </div>

                <div className="flex flex-col gap-1">
                    <span className='text-sm text-zinc-500 '>
                        <span className="pr-2 text-sm text-zinc-500 tracking-wide">{pontos}</span>pontos
                    </span>

                </div>

                {file && (
                    <div className="mt-2 p-2 border border-zinc-300 rounded-md">
                        <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            Ver ou baixar arquivo: {file.name}
                        </a>
                    </div>
                )}
            </Link>

            {showEditModal && (
                <ModalEditarAtv
                    showModal={showEditModal}
                    setShowModal={setShowEditModal}
                    atividade={{ nome, categoria, dataEntrega, pontos, detail, file }}
                    idAtv = {idAtv}
                    onEditComplete={handleEditComplete}
                />
            )}
        </div>
    );
};

export default TaskCard;