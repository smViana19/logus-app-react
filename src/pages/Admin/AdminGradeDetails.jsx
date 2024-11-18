import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../../services/axios';
import { toast, ToastContainer } from 'react-toastify';

const AdminGradeDetails = () => {
  const { id } = useParams(); // ID da turma vindo da URL
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');
  const [turmaName, setTurmaName] = useState('');
  const [allStudents, setAllStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const turmaResponse = await axiosInstance.get(`/turmas/${id}`);
        const studentResponse = await axiosInstance.get(`/turma-estudantes/${id}`);
        const allStudentsResponse = await axiosInstance.get('/users/alunos');

        setTurmaName(turmaResponse.data.name);
        setStudents(studentResponse.data);
        console.log(studentResponse.data);
        setAllStudents(allStudentsResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados da turma:', error);
        toast.error('Erro ao carregar dados da turma.');
      }
    };
    fetchData();
  }, [id]);

  const handleAddStudent = async () => {
    try {
      if (!selectedStudent) {
        toast.error('Por favor, selecione um aluno.');
        return;
      }

      const response = await axiosInstance.post('/turma-estudantes', {
        user_id: selectedStudent,
        class_id: id,
      });

      setStudents([...students, response.data]);
      setSelectedStudent('');
      setIsModalOpen(false);
      toast.success('Aluno adicionado com sucesso!');
      window.location.reload;
    } catch (error) {
      console.error('Erro ao adicionar aluno:', error);
      toast.error('Erro ao adicionar aluno.');
    }
  };

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <div className="bg-purplePrimary text-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-bold mb-4">Turma: {turmaName}</h2>
        <p className="text-lg">Gerencie os alunos da turma abaixo:</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-purplePrimary mb-4">Alunos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.length > 0 ? (
            students.map((aluno) => (
              <Link
                to={`/admin/alunos/${aluno.id}`}
                key={aluno.id}
                className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition ease-in cursor-pointer"
              >
                <h4 className="text-xl">{aluno.nome}</h4>
                <p className="text-sm text-gray-600">{aluno.id}</p>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">Nenhum aluno encontrado nesta turma.</p>
          )}
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purplePrimary text-white px-4 py-2 rounded mt-6 hover:bg-purple-700 transition"
        >
          Adicionar Aluno
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold text-purplePrimary mb-4">Adicionar Aluno</h2>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-4"
            >
              <option value="">Selecione um aluno</option>
              {allStudents
                .filter((aluno) => !students.some((s) => s.id === aluno.id)) // Exclui alunos já adicionados
                .map((aluno) => (
                  <option key={aluno.id} value={aluno.id}>
                    {aluno.nome}
                  </option>
                ))}
            </select>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddStudent}
                className="bg-purplePrimary text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default AdminGradeDetails;
