import React from 'react'
import MenuAdmin from '../../components/Navs/MenuAdmin'
import AdminCardTop from '../../components/CardsContainers/AdminCardTop'

export default function Notas() {
  return (
    <div className="min-h-screen w-screen bg-gray-50 flex">
      <MenuAdmin />

      <main className="flex-1 p-4">
        
        <AdminCardTop />
        <h1 className='font-semibold text-2xl'>Grade de Notas</h1>
        <div>
          <button>Notas</button>
        </div>
      </main>

    </div>
  )
}
