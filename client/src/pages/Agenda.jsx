import React from 'react'

export default function Agenda() {
  return (
    <div className="min-h-screen bg-gray-50">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link to="/">
                                    <Logo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="#" to='/dashboard'>Dashboard</NavLink>
                                <NavLink href="#">Área de Postagens</NavLink>
                                <NavLink href="#" to='/agenda' >Agenda</NavLink>
                                <NavLink href="#" to='/pomodoro'>Método Pomodoro</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  )
}
