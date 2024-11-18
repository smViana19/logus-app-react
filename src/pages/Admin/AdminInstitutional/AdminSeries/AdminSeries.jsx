import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../../../services/axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminSeries = () => {

  const [name, setName] = useState('')
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const classResponse = await axiosInstance.get('/turmas');
        const studentResponse = await axiosInstance.get('/users/alunos')
        setClasses(classResponse.data);
        setStudents(studentResponse.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        toast.error('Erro ao carregar dados.');
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/turmas', { name });
      toast.success("Turma criada com sucesso")
      setName('')
      setClasses([...classes, response.data])
    } catch (error) {
      console.error(error);
      toast.error('Nao foi possivel inserir a nova turma');
    }
  };
  const handleEditClass = async (classId, newName) => {
    try {
      await axiosInstance.put(`/turmas/${classId}`, { name: newName });
      toast.success('Turma atualizada com sucesso');
      setTurmas(turmas.map(turma => turma.id === turmaId ? { ...turma, name: newName } : turma));
    } catch (error) {
      console.error(error);
      toast.error('Erro ao atualizar a turma');
    }
  }

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <form onSubmit={handleSubmit} className="bg-white mb-8 p-8 rounded shadow">
        <div className="py-4 flex flex-col gap-2">
          <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="turma">
            Nome da turma
          </label>
          <input
            type="text"
            id="turma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: TURMA B1"
            className="border border-zinc-200 px-2 py-1 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purplePrimary py-2 px-4 rounded text-white mt-4 hover:bg-purple-700 transition"
        >
          Enviar
        </button>
      </form>
      <div className="bg-white p-8 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Turmas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((turma) => (
            <Link
              to={`/admin/turmas/${turma.id}`}
              key={turma.id}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition ease-in cursor-pointer"
            >
              <h3 className="font-semibold text-gray-600">{turma.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminSeries;
