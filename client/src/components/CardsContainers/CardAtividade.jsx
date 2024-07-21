import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

const CardAtividade = ({ nome, categoria, dataEntrega, pontos, file, detail, onDelete }) => {
    const { nomeMateria } = useParams();
    const [contextMenu, setContextMenu] = useState(null);
    const [showModalOption, setShowModalOptions] = useState(false);
    const modalRef = useRef(null);

    const handleCloseContextMenu = () => {
        setContextMenu(null);
    };

    // Função para quando clicar com o botão direito no cardAtividade
    const handleRightClick = (event) => {
        event.preventDefault();
        setShowModalOptions(true);
        console.log("clicou com btn right");
    };

    const handleCloseModal = () => {
        setShowModalOptions(false);
    };

    // Função para detectar cliques fora do modal
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleCloseModal();
        }
    };

    // Adiciona o ouvinte de eventos quando o modal é exibido
    useEffect(() => {
        if (showModalOption) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Remove o ouvinte de eventos na desmontagem do componente
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModalOption]);

    const handleDelete = () => {
        onDelete();
        handleCloseModal();
    };

    const dataPostagem = new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    const dataEntregaFormatada = dataEntrega ? 
        new Date(dataEntrega).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }) : "";

    return (
        <div onContextMenu={handleRightClick} className="relative">
            {showModalOption && (
                <ul
                    ref={modalRef}
                    className="absolute top-2 right-2 bg-white px-2 rounded-md py-2 shadow-lg"
                    onClick={handleCloseModal}
                >
                    <li className='py-1 px-6 border-b border-gray-100 cursor-pointer'>Editar</li>
                    <li className='py-1 px-6 cursor-pointer' onClick={handleDelete}>Excluir</li>
                </ul>
            )}
            <Link 
                to={`/dashboard/postagens/${nomeMateria}/${nome}`} 
                state={{ categoria, dataEntrega, pontos, detail, file }} 
                className="bg-cinzaPrincipal py-4 px-8 rounded-lg mb-4 block"
            >
                <div className='md:flex md:justify-between mb-2'>
                    <div className='flex gap-4'>
                        <span className='text-lg font-medium'>{nome}</span>
                        <span className='rounded-md px-4 py-1 font-medium tracking-wide text-sm text-purple-700 bg-purple-200'>{categoria}</span>
                    </div>
                    <span>Data de Postagem: {dataPostagem}</span>
                </div>

                <div className='flex flex-col gap-1 py-2'>
                    <span><span className='pr-2 tracking-wide'>{pontos}</span> pontos</span>
                    {dataEntregaFormatada && <span>Data de Entrega: {dataEntregaFormatada}</span>}
                </div>

                {file && (
                    <div className='mt-2 p-2 border border-gray-300 rounded-md'>
                        <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            Ver ou baixar arquivo: {file.name}
                        </a>
                    </div>
                )}
            </Link>

            {contextMenu !== null && (
                <div
                    className="absolute bg-white shadow-lg rounded-md p-2"
                    style={{ top: contextMenu.mouseY, left: contextMenu.mouseX }}
                    onMouseLeave={handleCloseContextMenu}
                >
                    <button onClick={handleEdit} className="block px-4 py-2 text-left text-black hover:bg-gray-200 w-full">
                        Editar
                    </button>
                    <button onClick={handleDelete} className="block px-4 py-2 text-left text-black hover:bg-gray-200 w-full">
                        Excluir
                    </button>
                </div>
            )}
        </div>
    );
};

export default CardAtividade;
