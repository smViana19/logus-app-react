import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Atividade = () => {
    const { nomeAtiv } = useParams();
    const location = useLocation();
    const { categoria, dataEntrega, pontos, detail } = location.state || {};

    console.log('Dados recebidos:', { categoria, dataEntrega, pontos, detail });

    const dataEntregaFormatada = dataEntrega ? 
        new Date(dataEntrega).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }) : "Sem data de entrega";

    return (
        <div className='w-3/4 mx-auto mt-32'>
            <div className='flex justify-between mb-2'>
                <h2 className='text-2xl font-semibold'>{nomeAtiv}</h2>
                <span className='rounded-md px-4 py-1 font-medium tracking-wide text-sm text-purplePrimary bg-[#EDDDFF]'>{categoria}</span>
            </div>
            <span className='text-sm uppercase text-gray-400'></span>

            <div className='mt-8 flex justify-between'>
                <span>{pontos} pontos</span>
                <span>Data de Entrega: {dataEntregaFormatada}</span>
            </div>

            <div className='mt-32'>
                {detail}
            </div>
        </div>
    );
};

export default Atividade;
