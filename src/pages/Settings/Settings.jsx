import React from 'react';
import ProjectStatics from '@/components/ProjectsStatistics/ProjectStatics.jsx';
import Plataform from '@/components/Plataform/Plataform.jsx';
import ProjectCard from '@/components/CardsContainers/ProjectCard.jsx';

export default function Dashboard() {
  const projects = [
    {
      name: 'Teste 1',
      type: 'Teste 1',
      date: '27-09-2024',
      members: ['Alice', 'Bob', 'Doug'],
      files: 4,
      progress: 20,
    },
    {
      name: 'Teste 2',
      type: 'Teste 2',
      date: '24-09-2024',
      members: ['Alice', 'Bob', 'Doug'],
      files: 4,
      progress: 20,
    },
    {
      name: 'Teste 3',
      type: 'Teste 3',
      date: '27-10-2024',
      members: ['Joao', 'Maria', 'Jose'],
      files: 4,
      progress: 20,
    },
    {
      name: 'Teste 4',
      type: 'Teste 4',
      date: '27-10-2024',
      members: ['Joao', 'Maria', 'Jose'],
      files: 4,
      progress: 20,
    },
  ];
  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <div className="mx-32 border border-gray-200 bg-white shadow-sm p-8 my-4 rounded-md">
        <h2 className="font-semibold text-gray-700 mb-4">Notificações</h2>

        <div className="flex justify-between">
          <p>Permintir notificações por e-mail</p>
          <label class="relative inline-block h-7 w-[48px] cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#1976D2]">
            <input type="checkbox" id="AcceptConditions" class="peer sr-only" />
            <span class="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-gray-300 ring-[5px] ring-inset ring-white transition-all peer-checked:start-7 bg-gray-600 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
          </label>
        </div>
      </div>
      <div className="mx-32 border border-gray-200 bg-white shadow-sm p-8 my-4 rounded-md">
        <h2 className="font-semibold text-gray-700">Conta</h2>
      </div>
    </div>
  );
}
