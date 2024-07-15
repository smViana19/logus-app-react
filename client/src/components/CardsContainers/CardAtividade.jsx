// CardAtividade.jsx

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CardAtividade = ({ nome, categoria, dataEntrega, pontos, file, detail }) => {
    const { nomeMateria } = useParams();

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
        <Link to={`/dashboard/postagens/${nomeMateria}/${nome}`} state={{ categoria }} className="bg-cinzaPrincipal py-4 px-8 rounded-lg mb-4 block">
            <div className='flex justify-between mb-2'>
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
    );
};

export default CardAtividade;
