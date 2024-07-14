// Modal.js (sem alterações adicionais necessárias)

// Atividade.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Atividade = () => {
    const { nomeMateria, nomeAtiv, dataEntrega } = useParams();

    console.log('nomeMateria:', nomeMateria);
    console.log('nomeAtiv:', nomeAtiv);
    console.log('dataEntrega:', dataEntrega);

    return (
        <div className='w-3/4 mx-auto mt-32'>
            <div className='flex justify-between mb-2'>
                <h2 className='text-2xl font-semibold'>Nome da Atividade: {nomeAtiv}</h2>
                <span>Categoria</span>
            </div>
            <span className='text-sm uppercase text-gray-400'>Nome do autor da ativ</span>

            <div className='mt-8 flex justify-between'>
                <span>pontos</span>
                <span>Data Entrega: {dataEntrega}</span> {/* Exibindo a data de entrega aqui */}
            </div>

            <div className='mt-32'>
                Conteúdo
            </div>
        </div>
    );
};

export default Atividade;
