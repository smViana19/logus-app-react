import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Atividade = () => {
    const { nomeAtiv } = useParams();
    const location = useLocation();
    const { categoria, dataEntrega, pontos, detail } = location.state || {};

    const [data, setData] = useState({
        categoria: '',
        dataEntrega: '',
        pontos: '',
        detail: '',
        file: null
    });

    // Formata a data de entrega
    const dataEntregaFormatada = data.dataEntrega ?
        new Date(data.dataEntrega).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }) : "Sem data de entrega";

    // Função para tratar o arquivo anexado
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setData(prevData => ({
            ...prevData,
            file
        }));
    };

    return (
        <div className='w-3/4 mx-auto mt-32'>
            <div className='flex justify-between mb-2'>
                <h2 className='text-2xl font-semibold'>{nomeAtiv}</h2>
                <span className='rounded-md px-4 py-1 font-medium tracking-wide text-sm text-purplePrimary bg-[#EDDDFF]'>{data.categoria}</span>
            </div>
            <span className='text-sm uppercase text-gray-400'></span>

            <div className='mt-8 flex justify-between'>
                <span>{data.pontos} pontos</span>
                <span>Data de Entrega: {dataEntregaFormatada}</span>
            </div>

            <div className='mt-32'>
                {data.detail}
            </div>

            <div className='mt-8'>
                <label className='block mb-2 text-sm font-medium text-gray-700'>Anexar arquivo:</label>
                <input
                    type='file'
                    onChange={handleFileChange}
                    className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purplePrimary file:text-white hover:file:bg-purple-700'
                />
                {data.file && (
                    <p className='mt-2 text-sm text-gray-500'>Arquivo selecionado: {data.file.name}</p>
                )}
            </div>
        </div>
    );
};

export default Atividade;
