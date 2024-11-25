import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { json, Link, useNavigate } from 'react-router-dom';
import BtnOpenTable from '../../components/Buttons/BtnOpenTable';
import BtnGestaoEscolar from '../../components/Buttons/BtnGestaoEscolar';
import CardBlog from '../../components/CardsContainers/CardBlog';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { setDate } from 'date-fns';
import { read } from 'xlsx';
import axiosInstance from '../../../services/axios';
const mySwal = withReactContent(Swal);
const PAGE_SIZE = 10;

export default function AdminDashboard() {
  const [isTableStudentsOpen, setIsTableStudentsOpen] = useState(false);
  const [isTableTeachersOpen, setIsTableTeachersOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const token = useSelector((state) => state.auth.token);

  const [notaImport, setNotaImport] = useState([])
  const [headers, setHeaders] = useState([])


  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user?.nome);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axiosInstance.get('/users/');
        const students = response.data.filter(
          (user) => user.role === 'estudante'
        );
        const teachers = response.data.filter(
          (user) => user.role === 'professor'
        );
        setStudents(students);
        setTeachers(teachers);
      } catch (error) {
        mySwal.fire({
          title: 'Erro',
          text: error,
          icon: 'error',
        });
      }
    };
    fetchStudents();
  }, [token]);

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

  const handleModalDelete = () => {
    if (isModalDeleteOpen === false) {
      setIsModalDeleteOpen(true)
    } else {
      setIsModalDeleteOpen(false)
    }
  }
  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
  };

  const handlenModalEdit = () => {
    if (isModalEditOpen === false) {
      setIsModalEditOpen(true);
    } else {
      setIsModalEditOpen(false)
    }
  };

  const handleRowClick = (student) => {
    navigate(`/admin/students/${student.id}`, { state: { student } });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      setHeaders(jsonData[0])
      setDate(json.slice(1))
    }

    reader.readAsArrayBuffer(file)
  }


  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:bg-zinc-800">
      <div className="">
        <h1 className="text-zinc-800 text-xl font-bold sm:text-2xl dark:text-zinc-100">
          Gestão Escolar
        </h1>
        <p className="text-zinc-600 mt-2 dark:text-zinc-400">
          Selecione a turma que deseja visualizar
        </p>

        <div className="mt-3 md:mt-0"></div>
        <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-1 gap-4 my-8">
          <BtnGestaoEscolar
            title={'Cadastrar'}
            number={2}
            path="/admin/registro"
            description={
              'Crie cadastros para adicionar seus alunos e professores'
            }
            svg={
              'M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64l99.6 0 0-32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 32 64 0 0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z'
            }
          />

          <BtnGestaoEscolar
            title={'Configurações gerais da escola'}
            number={2}
            description={'Crie turmas para organizar seu sistema'}
            svg={
              'M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144L0 464c0 26.5 21.5 48 48 48l208 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 208 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4zM96 192l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM96 320l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z'
            }
            path={'/admin/turmas'}
          />

          {/* <BtnGestaoEscolar
            title={'Relatórios'}
            number={2}
            description={'Gerencie seus relatórios'}
            svg={
              'M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z'
            }
            path={'/admin/relatorios'}
          /> */}

        </div>


        <BtnOpenTable onClick={handleTableStudents} user={'Alunos'} />

        {isTableStudentsOpen && (
          <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-zinc-50 text-zinc-600 font-medium border-b dark:text-zinc-100 dark:bg-zinc-700">
                <tr>
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Nome Completo</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Matrícula</th>
                  <th className="py-3 px-6">Média</th>
                  <th className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody className="text-zinc-600 divide-y dark:text-zinc-400">
                {currentStudents.length > 0 ? (
                  currentStudents.map((student) => (
                    <tr
                      key={student.id}
                      onClick={() => handleRowClick(student)}
                      className="cursor-pointer"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">{student.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{student.nome}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{student.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-6 py-1 bg-red-100 text-red-600 rounded-md">
                          50%
                        </span>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-4 text-sm font-medium text-zinc-900 text-center dark:text-zinc-500"
                    >
                      Nenhum estudante encontrado
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-4 px-4 py-2 bg-zinc-100 dark:bg-zinc-700 dark:text-white">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className=" text-white px-4 rounded-md disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="8.75"
                  viewBox="0 0 320 512"
                  className="text-black dark:text-zinc-200"
                  fill="currentColor"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </button>
              <span className="self-center">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className=" text-white px-4 rounded-md disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="8.75"
                  viewBox="0 0 320 512"
                  className="text-black dark:text-zinc-200"
                  fill="currentColor"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <BtnOpenTable onClick={handleTableTeachers} user={'Professores'} />
      {isTableTeachersOpen && (
        <div className="mt-4 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-zinc-50 text-zinc-600 font-medium border-b dark:text-zinc-100 dark:bg-zinc-700">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Nome Completo</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Matéria</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-zinc-600 divide-y dark:text-zinc-400 ">
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {teacher.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {teacher.nome}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {teacher.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {teacher.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* <div className="flex justify-between  pt-8 border-t border-zinc-300 mb-8 mt-12 ">
        <h2 className="font-semibold text-xl dark:text-zinc-100">
          Blog e Notícias
        </h2>
        <Link
          className="px-16 py-2 bg-purplePrimary text-white rounded dark:text-zinc-100"
          to="/admin/blog/criar"
        >
          Criar
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <CardBlog />
      </div> */}
      {isModalDeleteOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* START MODAL */}
          <div
            className="fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
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
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-zinc-900"
                        id="modal-title"
                      >
                        Deletar Usuário
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-zinc-500">
                          Você tem certeza que deseja deletar este usuário? Ele
                          e todas as informações atraladas a ele serão removido
                          permanentemente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deletar
                  </button>
                  <button
                    onClick={handleModalDelete}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 sm:mt-0 sm:w-auto"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{' '}
      {/* END MODAL */}




      {isModalEditOpen && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* START MODAL */}
          <div
            className="fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl px-8 py-6">

                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path className='fill-orange-600' d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z" /></svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-zinc-900"
                      id="modal-title"
                    >
                      Editar Usuário
                    </h3>

                    <p className="text-sm text-zinc-500">
                      Este usuário será editado permanentemente
                    </p>
                  </div>
                </div>


                <form className='my-8 flex flex-col gap-4' action="">

                  <div className='flex flex-col gap-1'>
                    <label htmlFor="">Nome Completo</label>
                    <input className='border border-zinc-200 rounded py-1 px-2 outline-none' type="text" />
                  </div>

                  <div className='flex flex-col gap-1'>
                    <label htmlFor="">E-mail</label>
                    <input className='border border-zinc-200 rounded py-1 px-2 outline-none' type="email" />
                  </div>

                  <div className='flex flex-col gap-1'>
                    <label htmlFor="">Senha</label>
                    <input className='border border-zinc-200 rounded py-1 px-2 outline-none' type="password" />
                  </div>

                  <div className="bg-zinc-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Editar
                    </button>
                    <button
                      onClick={handlenModalEdit}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 sm:mt-0 sm:w-auto"
                    >
                      Cancelar
                    </button>
                  </div>

                </form>





              </div>
            </div>
          </div>
        </div>
      )}{' '}
      {/* END MODAL */}

    </div>
  );
}
