import React from 'react'
import { Link } from 'react-router-dom'

const BtnGestaoEscolar = ({title, number, description, svg, path}) => {
  return (
    <Link to={path} className="p-6 bg-white rounded-md shadow-md space-y-4 dark:bg-zinc-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-600 transition-all duration-500 hover:scale-102">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-gray-600 dark:text-gray-200">
          {title}
        </h1>
        <span className="font-semibold text-2xl dark:text-white">
          {number}
        </span>
      </div>

      <span className="bg-[#EDDDFF] dark:bg-[#36284d]  p-3 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18"
          width="21.5"
          viewBox="0 0 640 512"
        >
          <path className="fill-purplePrimary dark:fill-dark" d={svg} />
        </svg>
      </span>
    </div>

    <p className="text-sm text-gray-500 dark:text-gray-300">
      {description}
    </p>
  </Link>
  )
}

export default BtnGestaoEscolar
