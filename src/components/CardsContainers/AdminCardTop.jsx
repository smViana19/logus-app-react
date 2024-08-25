import React from 'react'
import InputSearch from '../Inputs/InputSearch'

export default function AdminCardTop() {
    return (
        <div className="flex items-center mb-16 mt-4">
            <h1 className="font-bold text-3xl">Administrador</h1>
            <InputSearch className="flex-grow ml-8" placeholder="Search..." />
        </div>
    )
}
