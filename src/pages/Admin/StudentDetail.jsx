import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axiosInstance from '../../../services/axios';
import { FaEdit } from "react-icons/fa";
import ModalEditGrades from '../../components/Modal/ModalEditGrades';
import { showErrorAlert, showSuccesDialog } from '../../components/Dialog/Dialog';
import Spinner from '../../components/Spinners/Spinner';

const StudentDetail = () => {
  const { userId } = useParams(); // Obtém o ID do usuário da URL
  const [notesData, setNotesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar as notas do usuário
    const fetchNotes = async () => {
      try {
        const response = await axiosInstance.get(`/notas/estudante/${userId}`);
        console.log(response.data)
        setNotesData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Erro ao buscar notas. Tente novamente mais tarde.");
        setLoading(false);
      }
    };
    fetchNotes();
  }, [userId]);

  if (loading) return <p>Carregando notas...</p>;
  if (error) return <p>{error}</p>;

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <div className='p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:bg-zinc-800'>
      <h2>Notas do Usuário</h2>
      {notesData.length === 0 ? (
        <p>O usuário não possui notas registradas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Matéria</th>
              <th>Período</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {notesData.map((subjectData, index) =>
              subjectData.grades.map((grade, idx) => (
                <tr key={`${index}-${idx}`}>
                  <td>{subjectData.subject}</td>
                  <td>{grade.period}</td>
                  <td>{grade.grade !== null ? grade.grade : "Sem nota"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
    // <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:bg-zinc-800">
    //   <h3 className="text-xl font-bold dark:text-white">{student.id} - {student.nome}</h3>
    //   <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
    //     <table className="w-full table-auto text-sm">
    //       <thead className="bg-gray-50 text-gray-600 font-medium border-b dark:bg-zinc-800 dark:text-white">
    //         <tr>
    //           <th className="py-3 px-6">Matéria</th>
    //           <th className="py-3 px-6">1º Trimestre</th>
    //           <th className="py-3 px-6">2º Trimestre</th>
    //           <th className="py-3 px-6">3º Trimestre</th>
    //           <th className="text-right py-3 px-6">Ações</th>
    //         </tr>
    //       </thead>
    //       <tbody className="text-gray-600">
    //         {subjects.map(subject => {
    //           const subjectGrades = grades.filter(grade => grade.subject_id === subject.id);
    //           return (
    //             <tr key={subject.id} className='even:bg-gray-100 odd:bg-white dark:even:bg-zinc-700 dark:odd:bg-zinc-600 dark:text-white'>
    //               <td className="px-6 py-4 whitespace-nowrap">{subject.nome}</td>
    //               {['1º Trimestre', '2º Trimestre', '3º Trimestre'].map((trimester, index) => (
    //                 <td key={index} className="px-6 py-4 whitespace-nowrap">
    //                   {subjectGrades.find(grade => grade.period.name === trimester)?.value || '0.0'}
    //                 </td>
    //               ))}
    //               <td className="text-right px-6">
    //                 <button
    //                   onClick={() => handleModalEdit(subject)}
    //                   className="py-2 px-3 font-medium text-purpleDark hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg dark:text-purplePrimary "
    //                 >
    //                   <div className='flex items-center'>
    //                     <span className='mr-2'>Editar</span>
    //                     <FaEdit />
    //                   </div>
    //                 </button>
    //               </td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </div>

    //   {selectedSubject && (
    //     <ModalEditGrades
    //       isOpen={isOpenModalEdit}
    //       onClose={() => setIsOpenModalEdit(false)}
    //       onSave={handleSaveGrades}
    //       subject={selectedSubject}
    //     />
    //   )}
    // </div>
  );
};

export default StudentDetail;
