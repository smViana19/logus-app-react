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
      <div className="p-5 h-screen bg-gray-50">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <ProjectStatics />
          <Plataform />
          <ProjectStatics />
          <Plataform />
        </div>

        <div>
          <div className="flex justify-between items-center py-4 mt-5">
            <h1 className="text-lg font-semibold dark:text-white ml-2">Projetos recentes</h1>
            <p className="text-sm underline text-indigo-600">Veja todos</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects && projects.map((project, index) => <ProjectCard key={index} project={project} />)}
          </div>
        </div>
      </div>
  );
}
