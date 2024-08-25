import React from 'react'

export default function profileButton({textbtn}) {
  return (
    <button className='px-8 text-sm font-medium bg-slate-200 hover:bg-slate-300 transition-all duration-300 py-1 rounded-md'>
      {textbtn}
    </button>
  )
}
