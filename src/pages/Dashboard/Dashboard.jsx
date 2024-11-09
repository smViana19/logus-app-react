import React, { useEffect, useState } from 'react';
// import ProjectStatics from '../../components/Graphics/ProjectStatics';
// import Plataform from '@/components/Plataform/Plataform.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ColumnChart from '../../components/Graphics/ColumnChart';
import axiosInstance from '../../../services/axios';


export default function Dashboard() {
  const [latestMaterials, setLatestMaterials] = useState([]);
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
    if (user && user.role === "diretor") {
      navigate("/admin/dashboard")
    }

    const fetchLatestMaterials = async () => {
      try {
        const latestMaterials = await axiosInstance.get('/materias/material/');
        setLatestMaterials(latestMaterials.data);
        console.log("ultimas atividades: ", latestMaterials.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchLatestMaterials()
  }, [user, navigate])
  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 dark:bg-zinc-800">
        {/* <ProjectStatics /> */}
        {/*  <Plataform />*/}
        <ColumnChart />
      </div>

      <div>
        <div className="flex flex-col items-center py-4 mt-5">
          <h1 className="text-lg font-semibold dark:text-white ml-2">Últimas atividades</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 px-4">
            {latestMaterials.map((lastMaterial) => (
              <div
                key={lastMaterial.id}
                className="p-6 bg-white dark:bg-zinc-700 rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-zinc-600 dark:text-zinc-100 font-semibold text-lg">
                      {lastMaterial.nome}
                    </h1>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">
                  {lastMaterial.detalhes}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">
                  <span className="font-semibold">{lastMaterial.pontos}</span> pts
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
