import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const AdminBlog = () => {
  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:text-white">
      <div className='flex justify-between'>
          <h1 className='font-semibold text-lg'>Admin Blog</h1>
          <Link to='/admin/blog/add' className='bg-purplePrimary px-16 py-2 rounded text-white flex items-center gap-4'>Criar Página <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path className='fill-white' d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></Link>
      </div>

      <div className='grid grid-cols-4'>    

        <div className='rounded border border-gray-200 p-4'>
            <h1 className=''>Dia D</h1>
            <p className='py-4'>Dia 28/10 terá Dia D para o terceiro ano do ensino médio com o tema de brasilidades...</p>
        </div>

      </div>
    </div>
  )
}

export default AdminBlog
