import React from 'react'

const RowNota = ({subject, firstScore, secondScore}) => {
    return (
        <div className='bg-gray-100 dark:bg-zinc-700 dark:text-white py-2 px-8 rounded-md flex justify-between mb-4'>
            <span>{subject}</span>
            <span>{firstScore}</span>
            <span>{secondScore}</span>
        </div>
    )
}

export default RowNota
