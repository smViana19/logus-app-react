import React from 'react';

export default function ModalCreateTask({ isOpen }) {
  if (isOpen) {
    return (
      <div className="bg-black bg-opacity-30 z-10 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="w-1/2 bg-white text-center px-8 rounded-lg h-2/5 flex flex-col justify-center gap-4">

          <input className='bg-gray-200 w-full px-4 rounded-md py-2 text-lg font-medium' placeholder='Tarefa' type="text" />

          <div className='flex gap-8'>
            <input className='bg-gray-200 w-full px-4 rounded-md py-2 text-lg' placeholder='Categoria' type="text" />
            <input className='bg-gray-200 w-full px-4 rounded-md py-2 text-lg' placeholder='Urgência' type="text" />
          </div>

          <div className='flex gap-8'>
            <input className='bg-gray-200 w-full px-4 rounded-md py-2 text-lg' placeholder='Dia' type="text" />
            <input className='bg-gray-200 w-full px-4 rounded-md py-2 text-lg' placeholder='Hora' type="text" />
          </div>

          <input className='bg-gray-200 w-full px-4 rounded-md py-2 text-lg' placeholder='Data' type="text" />

        </div>
      </div>
    );
  }
  return null;
}
