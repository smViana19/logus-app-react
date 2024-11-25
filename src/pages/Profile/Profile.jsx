import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axiosInstance from '../../../services/axios.js';
import RowNota from '../../components/CardsContainers/Profile/RowNota.jsx';

export default function Dashboard() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const [openCardId, setOpenCardId] = useState(null);
  const [totalSubmissions, setTotalSubmissions] = useState(0);
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    const fetchTotalSubmissions = async () => {
      try {
        const response = await axiosInstance.get(`/materias/material/submit/user/${user?.id}/total`);
        setTotalSubmissions(response.data.totalSubmissions);
        console.log(response.data.totalSubmissions)
      } catch (error) {
        console.error("Erro ao buscar total de submissões: ", error);
      }
    };
    const fetchStudentData = async () => {
      try {
        const gradesResponse = await axiosInstance.get(`/grade/student/${user?.id}`);
        const subjectsResponse = await axiosInstance.get('/materias');

        setGrades(gradesResponse.data);
        setSubjects(subjectsResponse.data);
        console.log("notas: ", gradesResponse.data)
        console.log(subjectsResponse.data)
      } catch (error) {
        console.error('Erro ao carregar os dados do aluno:', error);
        toast.error('Erro ao carregar os dados do aluno.');
      }
    };
    fetchTotalSubmissions()
    fetchStudentData()
  }, [user?.id]);

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <div className="lg:p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-10 md:ml-14 transition-all duration-300 dark:text-white">
      <div className="mx-0 2xl:mx-48 my-5">
        <div className="rounded-lg bg-white py-8 px-6 sm:px-12 shadow-lg dark:bg-zinc-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center bg-purplePrimary text-white rounded-full text-xl font-bold">
              {user?.nome.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">{user.nome}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">Aluno</p>
              <p className='text-sm text-gray-500 dark:text-gray-300'>{`${totalSubmissions} Entregas`}</p>
            </div>
          </div>
        </div>

        {[...new Set(grades.map((grade) => grade.period))].map((trimestre) => (
          <div
            key={trimestre}
            className="mt-8 cursor-pointer"
            onClick={() => toggleCard(trimestre)}
          >
            <div className="bg-purplePrimary dark:bg-purpleDark text-white px-6 py-4 rounded-md flex justify-between items-center shadow-md">
              <span>{`${trimestre}º Trimestre`}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
                className="transition-transform duration-300"
                style={{
                  transform: openCardId === trimestre ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path
                  className="fill-current"
                  d={
                    openCardId === trimestre
                      ? 'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z'
                      : 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
                  }
                />
              </svg>
            </div>
            {openCardId === trimestre && (
              <div className="border border-zinc-200 dark:border-zinc-600 mt-4 rounded-md p-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2 text-left text-purple-600">Matéria</th>
                        <th className="border px-4 py-2 text-left text-purple-600">Nota</th>
                        <th className="border px-4 py-2 text-left text-purple-600">Período</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades
                        .filter((grade) => grade.period === trimestre)
                        .map((grade) => (
                          <tr key={grade.id}>
                            <td className="border px-4 py-2">{grade.subject.nome}</td>
                            <td className="border px-4 py-2">{grade.grade}</td>
                            <td className="border px-4 py-2">{grade.period}º Trimestre</td>
                          </tr>
                        ))}
                      {grades.filter((grade) => grade.period === trimestre).length === 0 && (
                        <tr>
                          <td colSpan="3" className="border px-4 py-2 text-center text-purple-500">
                            Nenhuma nota cadastrada para este trimestre.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
