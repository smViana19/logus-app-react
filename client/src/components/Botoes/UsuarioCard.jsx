import React from 'react'

export default function UsuarioCard() {
  return (
    <div className='bg-[#F0F1F5] rounded-xl mx-16 my-8 p-8 flex justify-between'>

    <div>
        <div className='flex gap-16 mb-8 items-center '>
            <h1 className='font-bold text-3xl'>Olá, Aluno/Professor</h1>
            <span className='px-4 py-1  bg-[#B4ADEA] text-purple-700 rounded-md cursor-pointer'>Estudante</span>
        </div>
        <div className='mb-2'>
            <img src="" alt="" />
            <span>COTEMIG - Colégio e Faculdade</span>
        </div>
        <div>
            <span>3º Ano do Ensino Médio</span>
        </div>
    </div>

    <div className='flex text-center gap-16'>
        <div>
            <p className='text-lg mb-8'>Entregues</p>
            <h3 className='font-semibold text-2xl'>24</h3>
        </div>
        <div>
            <p className='text-lg mb-8'>Não Entregues</p>
            <h3 className='font-semibold text-2xl'>24</h3>
        </div>
        <div>
            <p className='text-lg mb-8'>Média de Notas</p>
            <h3 className='font-semibold text-2xl'>97.2</h3>
        </div>
    </div>
</div>
  )
}
