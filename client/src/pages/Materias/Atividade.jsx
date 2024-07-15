// Atividade.jsx

import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AtividadeContext } from '../../context/AtividadeContext';

const Atividade = () => {
    const { nomeAtiv } = useParams();
    const { state } = useLocation();
    const { categoria } = state || {}; 

    const {
        dataEntrega,
        pontos,
    } = useContext(AtividadeContext);

    return (
        <div className='w-3/4 mx-auto mt-32'>
            <div className='flex justify-between mb-2'>
                <h2 className='text-2xl font-semibold'>{nomeAtiv}</h2>
                <span className='rounded-md px-4 py-1 font-medium tracking-wide text-sm text-purplePrimary bg-[#EDDDFF]'>{categoria}</span>
            </div>
            <span className='text-sm uppercase text-gray-400'></span>

            <div className='mt-8 flex justify-between'>
                <span>{pontos} pontos</span>
                <span>Data Entrega: {dataEntrega}</span>
            </div>

            <div className='mt-32'>
                Conteúdo da atividade
            </div>
        </div>
    );
};

export default Atividade;
