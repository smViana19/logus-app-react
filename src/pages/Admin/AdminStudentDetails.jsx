import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../services/axios';
import { toast, ToastContainer } from 'react-toastify';

const AdminStudentDetails = () => {
  const { id } = useParams(); // ID do aluno vindo da URL
  const [student, setStudent] = useState(null);
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [newGrade, setNewGrade] = useState({
    subject_id: '',
    grade: '',
    period: '',
  });
  const [editingGrade, setEditingGrade] = useState(null);
  const [updatedGrade, setUpdatedGrade] = useState({
    grade: '',
    period: '',
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const studentResponse = await axiosInstance.get(`/users/${id}`);
        const gradesResponse = await axiosInstance.get(`/grade/student/${id}`);
        const subjectsResponse = await axiosInstance.get('/materias');

        setStudent(studentResponse.data.nome);
        setGrades(gradesResponse.data);
        setSubjects(subjectsResponse.data);
        console.log(grades)
      } catch (error) {
        console.error('Erro ao carregar os dados do aluno:', error);
        toast.error('Erro ao carregar os dados do aluno.');
      }
    };

    fetchStudentData();
  }, [id]);

  const handleAddGrade = async () => {
    try {
      const response = await axiosInstance.post('/grade', {
        user_id: id,
        ...newGrade,
      });
      setGrades((prevGrades) => [...prevGrades, response.data]);
      setNewGrade({ subject_id: '', grade: '', period: '' });
      toast.success('Nota adicionada com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar nota:', error);
      toast.error('Erro ao adicionar nota.');
    }
  };

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Perfil do Aluno: {student}
        </h2>
        <h3 className="text-lg font-semibold text-purple-600">Notas:</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left text-purple-600">Matéria</th>
                <th className="border px-4 py-2 text-left text-purple-600">Nota</th>
                <th className="border px-4 py-2 text-left text-purple-600">Período</th>
              </tr>
            </thead>
            <tbody>
              {grades.length > 0 ? (
                grades.map((grade) => (
                  <tr key={grade.id}>
                    <td className="border px-4 py-2">{grade.subject.nome}</td>
                    <td className="border px-4 py-2">{grade.grade}</td>
                    <td className="border px-4 py-2">{grade.period}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="border px-4 py-2 text-center text-purple-500">
                    Este aluno ainda não tem notas cadastradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* <ul className="list-disc ml-6 mb-6">
          {grades.length > 0 ? (
            grades.map((grade) => (
              <li key={grade.id}>
                Matéria: {grade.subject_name} | Nota: {grade.grade} | Período: {grade.period}
              </li>
            ))
          ) : (
            <li>Este aluno ainda não tem notas cadastradas.</li> // Mensagem caso não tenha notas
          )}
        </ul> */}

        <div className="bg-purple-100 p-4 rounded">
          <h4 className="text-purple-600 font-semibold mb-3">Adicionar Nota:</h4>
          <select
            value={newGrade.subject_id}
            onChange={(e) => setNewGrade({ ...newGrade, subject_id: e.target.value })}
            className="w-full border border-purple-300 p-2 rounded mb-4"
          >
            <option value="">Selecione a matéria</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.nome}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Nota"
            value={newGrade.grade}
            onChange={(e) => setNewGrade({ ...newGrade, grade: e.target.value })}
            className="w-full border border-purple-300 p-2 rounded mb-4"
          />
          <input
            type="number"
            placeholder="Período"
            value={newGrade.period}
            onChange={(e) => setNewGrade({ ...newGrade, period: e.target.value })}
            className="w-full border border-purple-300 p-2 rounded mb-4"
          />
          <button
            onClick={handleAddGrade}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Adicionar Nota
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminStudentDetails;
