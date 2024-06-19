import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function EventModal() {
    const [title, setTitle] = useState('')
    const { setShowEventModal } = useContext(GlobalContext)

    const handleTitleChange = (e) => {
        setTitle(e.target.value); 
    };

    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
            <form action="" className='bg-white rounded-lg shadow-2xl w-1/4'>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <span className='text-gray-400'>
                        icon
                    </span>

                    <button onClick={() => setShowEventModal(false)}>
                        <span className='text-gray-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512">
                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                            </svg>
                        </span>
                    </button>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div></div>
                        <input 
                            type="text"
                            name='title' 
                            placeholder='Titulo' 
                            required
                            className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                            value={title} onChange={handleTitleChange} /> 
                    </div>
                </div>
            </form>
        </div>
    )
}
