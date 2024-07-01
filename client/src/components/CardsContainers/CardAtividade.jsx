// CardAtividade.js
import React from 'react';

const CardAtividade = ({ nome, categoria, dataPostagem, dataEntrega, pontos }) => {
    return (
        <div className="bg-cinzaPrincipal py-4 px-8 rounded-lg w-100">
            <div className='flex justify-between'>
                <div className='flex gap-16'>
                    <span className='text-lg font-medium'>{nome}</span>
                    <span className='rounded-md px-4 py-1 font-medium tracking-wide text-sm text-purplePrimary bg-[#EDDDFF]'>{categoria}</span>
                </div>

                <span className='font-medium'><span className='font-medium px-2 tracking-wide'> {pontos}</span>pontos</span>
            </div>

            <div className='flex flex-col py-2'>
                <span className=''>Data de Postagem: <span>{dataPostagem}</span></span>
                <span>Data de Entrega: <span>{dataEntrega}</span></span>

            </div>

        </div>
    );
};

export default CardAtividade;
