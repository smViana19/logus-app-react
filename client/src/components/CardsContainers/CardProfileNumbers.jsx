import React from 'react'

const CardProfileNumbers = () => {
  return (
    <div className='flex gap-32 mt-10'>
      <div className='text-center'>
        <p className='mb-2 '>Postagens</p>
        <span className='font-semibold  text-center'>1,830</span>
      </div>

      <div className='text-center'>
        <p className='mb-2 '>Atividades Entregues</p>
        <span className='font-semibold  text-center'>132</span>
      </div>

      <div className='text-center'>
        <p className='mb-2 '>Pontuação</p>
        <span className='font-semibold  text-center'>840 XP</span>
      </div>
    </div>
  )
}

export default CardProfileNumbers
