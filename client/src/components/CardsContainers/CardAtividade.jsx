// CardAtividade.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CardAtividade = ({ nome, categoria, dataEntrega, pontos, file, detail }) => {
    const { nomeMateria } = useParams();

    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
        });
    };

    const handleCloseContextMenu = () => {
        setContextMenu(null);
    };

    const handleEdit = () => {
        console.log('Edit activity');
        handleCloseContextMenu();
        // Adicione aqui a lógica para editar a atividade
    };

    const handleDelete = () => {
        console.log('Delete activity');
        handleCloseContextMenu();
        // Adicione aqui a lógica para excluir a atividade
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
        <div onContextMenu={handleContextMenu} className="relative">
            <Link to={`/dashboard/postagens/${nomeMateria}/${nome}`} state={{ categoria, dataEntrega }} className="bg-cinzaPrincipal py-4 px-8 rounded-lg mb-4 block">
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
                    <div className='mt-2 p-2 border border-gray-300 rounded-md '>
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
