import React, { useEffect, useState } from 'react';
import axios from '../../../../services/axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAction = (action) => {
    console.log(action);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Ações
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleAction('Editar')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Editar
            </button>
            <button
              onClick={() => handleAction('Excluir')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Excluir
            </button>
            <button
              onClick={() => handleAction('Ver Mais')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Ver Mais
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const PAGE_SIZE = 5;

const AdminStudents = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/users/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const students = response.data.filter(
          (user) => user.role === 'estudante'
        );
        setStudents(students);
      } catch (error) {
        toast.error('Erro ao carregar alunos.');
      }
    };
    fetchStudents();
  }, []);

  const indexOfLastStudent = currentPage * PAGE_SIZE;
  const indexOfFirstStudent = indexOfLastStudent - PAGE_SIZE;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const totalPages = Math.ceil(students.length / PAGE_SIZE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <div className="flex justify-between mb-4">
        <select
          className="py-1 px-8 border border-gray-200 rounded "
          name=""
          id=""
        >
          <option value="">Selecione a turma</option>
        </select>
        <button className='bg-purplePrimary py-2 px-8 rounded text-white flex gap-4 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="17.5" viewBox="0 0 640 512"><path className='fill-white' d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
            <span>Adicionar aluno</span>
        </button>
      </div>
      <div className="bg-white pt-6 shadow rounded-md">
        <div className="px-4">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Alunos
          </h2>
        </div>
        <div className="mt-6">
          <table className="w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xd font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xd font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xd font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xd font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentStudents.length > 0 ? (
                currentStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {student.nome}
                    </td>
                    <td className="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {student.email}
                    </td>
                    <td className="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {student.role}
                    </td>
                    <td className="px-6 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      <DropdownButton />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-3 text-sm font-medium text-gray-900 text-center"
                  >
                    Nenhum estudante encontrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </button>
            <span className="self-center">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStudents;
