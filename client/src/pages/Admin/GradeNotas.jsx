import React from 'react'
import MenuAdmin from '../../components/Navs/MenuAdmin'
import AdminCardTop from '../../components/CardsContainers/AdminCardTop'
import ReactDOM from 'react-dom';



export default function GradeNotas() {




  return (
    <div className="min-h-screen w-screen bg-gray-50 flex">
      <MenuAdmin 
        fillSelectedNotas={'#820ad1'}
        textSelectedNotas={'text-purplePrimary'}
        selectNotas={'bg-[#B4ADEA] border-r-2 border-l-2 border-purplePrimary'}
      />

      <main className="flex-1 p-4">
        
        <AdminCardTop />
        <h1 className='font-semibold text-2xl'>Grade de Notas</h1>
        <div>

        </div>
      </main>

    </div>
  )
}
