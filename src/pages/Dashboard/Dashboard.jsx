import React, { useEffect } from 'react';
import ProjectStatics from '@/components/ProjectsStatistics/ProjectStatics.jsx';
import Plataform from '@/components/Plataform/Plataform.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Dashboard() {

  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);



  const projects = [
    { name: 'Teste 1', type: 'Teste 1', date: '27-09-2024', members: ['Alice', 'Bob', 'Doug'], files: 4, progress: 20, },
    { name: 'Teste 2', type: 'Teste 2', date: '24-09-2024', members: ['Alice', 'Bob', 'Doug'], files: 4, progress: 20, },
    { name: 'Teste 3', type: 'Teste 3', date: '27-10-2024', members: ['Joao', 'Maria', 'Jose'], files: 4, progress: 20, },
    { name: 'Teste 4', type: 'Teste 4', date: '27-10-2024', members: ['Joao', 'Maria', 'Jose'], files: 4, progress: 20, },
  ];

  useEffect(() => {
    if (user && user.role === "diretor") {
      navigate("/admin/dashboard")
    }
  }, [user, navigate])
  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-1 gap-4">
        <ProjectStatics />
        <Plataform />
        <ProjectStatics />
      </div>

      <div>
        <div className="flex justify-between items-center py-4 mt-5">
          <h1 className="text-lg font-semibold dark:text-white ml-2">Útlimas atividades</h1>
        </div>
      </div>

    </div>
  );
}
