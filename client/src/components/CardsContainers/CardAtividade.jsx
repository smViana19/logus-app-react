import React from 'react';

const CardAtividade = ({ nome, categoria, dataEntrega, pontos }) => {
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
        <div className="bg-cinzaPrincipal py-4 px-8 rounded-lg mb-4">
            <div className='flex justify-between mb-2'>
                <div className='flex gap-16'>
                    <span className='text-lg font-medium'>{nome}</span>
                    <span className='rounded-md px-4 py-1 font-medium tracking-wide text-sm text-purplePrimary bg-[#EDDDFF]'>{categoria}</span>
                </div>
                <span>Data de Postagem: {dataPostagem}</span>
            </div>

            <div className='flex flex-col gap-1 py-2'>
                <span className=''><span className='pr-2 tracking-wide'>{pontos}</span> pontos</span>
                {dataEntregaFormatada && <span>Data de Entrega: {dataEntregaFormatada}</span>}
            </div>
        </div>
    );
};

export default CardAtividade;
