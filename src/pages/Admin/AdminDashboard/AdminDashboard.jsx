import React from 'react';
import { useSelector } from 'react-redux';
import InfoCard from '../../../components/CardsContainers/InfoCard';
import WelcomeCard from '../../../components/CardsContainers/WelcomeCard';

export default function AdminDashboard() {
  const user = useSelector(state => state.auth.user?.nome);
  const projects = [
    { title: 'Alunos', description: 'Gerencie alunos e acompanhe desempenho.', total: 250, path: '/admin/alunos' },
    { title: 'Professores', description: 'Monitore atividades e carga horária.', total: 50, path: '/admin/professores' },
    { title: 'Relatórios', description: 'Visualize e analise relatórios gerenciais.', total: 10, path: '/admin/relatorios' },
    { title: 'Institucional', description: 'Informações institucionais e de contato.', total: 1, path: '/admin/institucional' },
  ];

  return (

    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <div className="grid grid-cols-1 gap-4">
        <WelcomeCard user={user} />
      </div>

      <div>
        <div className="flex justify-between items-center py-4 mt-5">
          <h1 className="text-lg font-semibold dark:text-white ml-2">Gerenciamento escolar</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {projects && projects.map((project, index) => <InfoCard key={index} info={project} />)}
        </div>
      </div>

    </div>




  );
}
