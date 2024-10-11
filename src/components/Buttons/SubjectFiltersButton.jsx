import React from 'react'

export default function SubjectFiltersButton({text, onClick}) {
  return (
    <div onClick={onClick} className="cursor-pointer row-span-1 border border-gray-300 py-2 px-4 rounded-md hover:border-gray-400 duration-300 ease-in-out text-gray-800 ">{text}</div>
  )
}
