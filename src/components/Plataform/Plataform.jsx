import React from "react"

import { CiGlobe } from 'react-icons/ci';
import { FaApple, FaTabletAlt } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';

const Plataform = () => {
  return <div className="p-5 bg-white rounded-xl shadow">
    <h1 className="text-2xl font-bold text-gray-700 dark:text-white">Informações</h1>
    <div className="p-2 grid grid-cols-2 gap-8">
      <div className="space-y-3 text-gray-500">
        <h1 className="text-2xl font-bold dark:text-gray-300">58</h1>
        <p className="flex items-center space-x-2 dark:text-gray-200">
          <CiGlobe /> <span>Turmas</span>
        </p>
      </div>
      <div className="space-y-3 text-gray-500">
        <h1 className="text-2xl font-bold dark:text-gray-300">87</h1>
        <p className="flex items-center space-x-2 dark:text-gray-200">
          <FaApple /> <span>Alunos</span>
        </p>
      </div>
      <div className="space-y-3 text-gray-500">
        <h1 className="text-2xl font-bold dark:text-gray-300">58</h1>
        <p className="flex items-center space-x-2 dark:text-gray-200">
          <DiAndroid /> <span>Professores</span>
        </p>
      </div>
      <div className="space-y-3 text-gray-500">
        <h1 className="text-2xl font-bold dark:text-gray-300">58</h1>
        <p className="flex items-center space-x-2 dark:text-gray-200">
          <FaTabletAlt /> <span>Materias</span>
        </p>
      </div>
    </div>
  </div>
}

export default Plataform;