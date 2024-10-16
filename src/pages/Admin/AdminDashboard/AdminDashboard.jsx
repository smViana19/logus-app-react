import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InfoCard from '../../../components/CardsContainers/InfoCard';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../../services/axios';
import BtnOpenTable from '../../../components/Buttons/BtnOpenTable';
import BtnGestaoEscolar from '../../../components/Buttons/BtnGestaoEscolar';

export default function AdminDashboard() {
  const [countStudents, setCountStudents] = useState('');
  const [countTeachers, setCountTeachers] = useState('');
  const [isTableStudentsOpen, setIsTableStudentsOpen] = useState(false);
  const [isTableTeachersOpen, setIsTableTeachersOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user?.nome);

  useEffect(() => {
    const fetchCountStudents = async () => {
      const response = await axios.get('/users/count');
      setCountStudents(response.data.count);
    };
    const fetchCountTeachers = async () => {
      const response = await axios.get('/users/count/professores');
      setCountTeachers(response.data.count);
    };
    fetchCountStudents();
    fetchCountTeachers();
  }, []);
  {
    /*
  const projects = [
    {
      title: 'Alunos',
      description: 'Gerencie alunos e acompanhe desempenho.',
      total: countStudents,
      path: '/admin/alunos',
      svg: 'M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z',
    },
    {
      title: 'Professores',
      description: 'Monitore atividades e carga horária.',
      total: countTeachers,
      path: '/admin/professores',
      svg: 'M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z',
    },
    {
      title: 'Relatórios',
      description: 'Visualize e analise relatórios gerenciais.',
      total: 10,
      path: '/admin/relatorios',
      svg: 'M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z',
    },
    {
      title: 'Institucional',
      description: 'Informações institucionais e de contato.',
      total: 1,
      path: '/admin/institucional',
      svg: 'M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z',
    },
  ]; */
  }

  const tableItems = [
    {
      name: 'Liam James',
      email: 'liamjames@example.com',
      position: 'Software engineer',
      salary: '$100K',
    },
    {
      name: 'Olivia Emma',
      email: 'oliviaemma@example.com',
      position: 'Product designer',
      salary: '$90K',
    },
    {
      name: 'William Benjamin',
      email: 'william.benjamin@example.com',
      position: 'Front-end developer',
      salary: '$80K',
    },
    {
      name: 'Henry Theodore',
      email: 'henrytheodore@example.com',
      position: 'Laravel engineer',
      salary: '$120K',
    },
    {
      name: 'Amelia Elijah',
      email: 'amelia.elijah@example.com',
      position: 'Open source manager',
      salary: '$75K',
    },
  ];

  const handleTableStudents = () => {
    if (isTableStudentsOpen === false) {
      setIsTableStudentsOpen(true);
    } else {
      setIsTableStudentsOpen(false);
    }
  };

  const handleTableTeachers = () => {
    if (isTableTeachersOpen === false) {
      setIsTableTeachersOpen(true);
    } else {
      setIsTableTeachersOpen(false);
    }
  };

  const handleOpenModalDelete = () => {
    setIsModalDeleteOpen(true);
  };

  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
  };

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <div className="">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h1 className="text-gray-800 text-xl font-bold sm:text-2xl dark:text-zinc-100">
              Gestão Escolar
            </h1>
            <p className="text-gray-600 mt-2 dark:text-zinc-400">
              Selecione a turma que deseja visualizar
            </p>
          </div>

          <div className="mt-3 md:mt-0"></div>
        </div>

        <div className="grid grid-cols-3 gap-x-8 my-8">
          <BtnGestaoEscolar
            title={'Cadastrar'}
            number={2}
            path="/registro"
            description={
              'Crie cadastros para adicionar seus alunos e professores'
            }
            svg={
              'M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z'
            }
          />

          <BtnGestaoEscolar
            title={'Criar Turma'}
            number={2}
            description={'Crie turmas para organizar seu sistema'}
            svg={
              'M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z'
            }
          />
        </div>

        <select
          className="px-8 border border-gray-200 rounded mt-4 py-1 dark:bg-zinc-800 dark:text-zinc-100 dark:border-gray-600"
          name=""
          id=""
        >
          <option value="">Selecione a turma</option>
          <option value=""></option>
        </select>

        <BtnOpenTable onClick={handleTableStudents} user={'Alunos'} />

        {isTableStudentsOpen && (
          <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b dark:text-zinc-100">
                <tr>
                  <th className="py-3 px-6">Nome Completo</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Matrícula</th>
                  <th className="py-3 px-6">Média</th>
                  <th className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y dark:text-zinc-400">
                {tableItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.salary}
                    </td>
                    <td className="text-right px-6 whitespace-nowrap">
                      <a
                        href="javascript:void()"
                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Edit
                      </a>
                      <button
                        onClick={handleOpenModalDelete}
                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <BtnOpenTable onClick={handleTableTeachers} user={'Professores'} />

      {isTableTeachersOpen && (
        <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b dark:text-zinc-100">
              <tr>
                <th className="py-3 px-6">Nome Completo</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Matrícula</th>
                <th className="py-3 px-6">Média</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y dark:text-zinc-400">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      href="javascript:void()"
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>
					<button
                        onClick={handleOpenModalDelete}
                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        Delete
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/*
	  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
        {projects &&
          projects.map((project, index) => (
            <InfoCard
              key={index}
              info={project}
              onClick={() => navigate(project.path)}
            />
          ))}
      </div>
	   */}

{isModalDeleteOpen && (
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      > {/* START MODAL */}
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      class="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      class="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Deletar Usuário
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        
						Você tem certeza que deseja deletar este usuário? Ele e todas as informações atraladas a ele serão removido permanentemente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deletar
                </button>
                <button
				onClick={handleCloseModalDelete}
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> )} {/* END MODAL */}




    </div>
  );
}
