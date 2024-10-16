import React from 'react'

const BtnOpenTable = ({onClick, user}) => {
  return (
    <div
          onClick={onClick}
          className="bg-purplePrimary px-4 py-2 rounded mt-8 flex justify-between items-center cursor-pointer"
        >
          <span className="text-white">{user}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            width="14"
            viewBox="0 0 512 512"
          >
            <path
              className="fill-white"
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </div>

  )
}

export default BtnOpenTable
