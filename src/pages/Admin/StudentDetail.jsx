import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axiosInstance from '../../../services/axios';
import { FaEdit } from "react-icons/fa";
import ModalEditGrades from '../../components/Modal/ModalEditGrades';
import { showErrorAlert, showSuccesDialog } from '../../components/Dialog/Dialog';
import Spinner from '../../components/Spinners/Spinner';

const StudentDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const student = location.state?.student;
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStudentGradesAndSubjects = async () => {
      try {
        const [gradesResponse, subjectsResponse] = await Promise.all([
          axiosInstance('/notas'),
          axiosInstance('/materias')
        ]);
        const gradesData = gradesResponse.data.filter(grade => grade.user_id === parseInt(id));
        setGrades(gradesData);
        setSubjects(subjectsResponse.data);
      } catch (error) {
        console.error("Erro ao buscar dados de notas:", error);
      }
    };

    fetchStudentGradesAndSubjects();
  }, [id]);

  const handleModalEdit = (subject) => {
    const subjectGrades = ['1º Trimestre', '2º Trimestre', '3º Trimestre'].map(trimester => ({
      period: trimester,
      grade: grades.find(grade => grade.subject_id === subject.id && grade.period.name === trimester)?.value || '0.0',
      id: grades.find(grade => grade.subject_id === subject.id && grade.period.name === trimester)?.id || null,
    }));

    setSelectedSubject({ subject, grades: subjectGrades });
    setIsOpenModalEdit(true);
  };

  const handleSaveGrades = async (updatedGrades) => {
    try {
      setIsLoading(true)
      for (const grade of updatedGrades) {
        console.log("data:", grade);


        if (grade.id) {
          await axiosInstance.put(`/notas/${grade.id}`, { value: grade.grade });
        } else {
          await axiosInstance.post('/notas', {
            user_id: id,
            subject_id: grade.subject_id,
            period_id: grade.period_id,
            value: grade.grade
          });
        }
      }
      const updatedStateGrades = grades.map(grade => {
        const updatedGrade = updatedGrades.find(updated => updated.id === grade.id);
        return updatedGrade ? { ...grade, value: updatedGrade.grade } : grade;
      });

      setGrades(updatedStateGrades);
      showSuccesDialog("Nota atualizada com sucesso");
    } catch (error) {
      console.error("Erro ao atualizar as notas:", error);
      showErrorAlert("Erro ao editar a nota, tente novamente mais tarde")
    } finally {
      setIsOpenModalEdit(false);
      setIsLoading(false)
    }
  };

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:bg-zinc-800">
      <h3 className="text-xl font-bold dark:text-white">{student.id} - {student.nome}</h3>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b dark:bg-zinc-800 dark:text-white">
            <tr>
              <th className="py-3 px-6">Matéria</th>
              <th className="py-3 px-6">1º Trimestre</th>
              <th className="py-3 px-6">2º Trimestre</th>
              <th className="py-3 px-6">3º Trimestre</th>
              <th className="text-right py-3 px-6">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {subjects.map(subject => {
              const subjectGrades = grades.filter(grade => grade.subject_id === subject.id);
              return (
                <tr key={subject.id} className='even:bg-gray-100 odd:bg-white dark:even:bg-zinc-700 dark:odd:bg-zinc-600 dark:text-white'>
                  <td className="px-6 py-4 whitespace-nowrap">{subject.nome}</td>
                  {['1º Trimestre', '2º Trimestre', '3º Trimestre'].map((trimester, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      {subjectGrades.find(grade => grade.period.name === trimester)?.value || '0.0'}
                    </td>
                  ))}
                  <td className="text-right px-6">
                    <button
                      onClick={() => handleModalEdit(subject)}
                      className="py-2 px-3 font-medium text-purpleDark hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg dark:text-purplePrimary "
                    >
                      <div className='flex items-center'>
                        <span className='mr-2'>Editar</span>
                        <FaEdit />
                      </div>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedSubject && (
        <ModalEditGrades
          isOpen={isOpenModalEdit}
          onClose={() => setIsOpenModalEdit(false)}
          onSave={handleSaveGrades}
          subject={selectedSubject}
        />
      )}
    </div>
  );
};

export default StudentDetail;
