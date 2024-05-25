import React from 'react'

export default function CardCategoria({categoria, customClass }) {
  return (
    <div className={`border-2 border-purplePrimary bg-[#820AD1] w-full text-center rounded-lg h-24 flex items-center justify-center text-white text-xl font-semibold hover:scale-102 transition-transform duration-700 transform-gpu cursor-pointer ${customClass}`}>
        {categoria}
    </div>
  )
}
