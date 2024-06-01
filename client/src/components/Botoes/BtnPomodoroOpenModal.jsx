import React from 'react'

export default function BtnPomodoroOpenModal({ text, svg, onClick }) {
    return (
        <button onClick={onClick} className='cursor-pointer flex gap-5 items-center bg-white w-1/4 justify-center py-1 rounded-lg border border-gray-100 shadow-sm'>
           {svg}
            <span className=''>{text}</span>
        </button>
    )
}
