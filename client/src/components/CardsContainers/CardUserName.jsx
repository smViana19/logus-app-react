import React from 'react'
import BtnProfile from '../Botoes/BtnProfile'

const CardUserName = () => {
  return (
    <div className='flex gap-28'>
      <span>user_name</span>
      <div className='gap-8 flex'>
        <BtnProfile textbtn={'Editar'}/>
        <BtnProfile textbtn={'Compartilhar'}/>
        <BtnProfile textbtn={'a'}/>
      </div>
      <div className='font-bold text-2xl tracking-widest'>
        ...
      </div>
    </div>
  )
}

export default CardUserName
