import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axiosInstance from '../../../services/axios';


//TODO: REFAZER OS INPUTS E COLOCAR MAIS BONITO FAZER ISSO AMANHA DE MANHA - SAMUEL
//TODO: REFAZER A REQ DOS SELECT PRA TALVEZ DIRETO DAS MATERIAS E DE TDS ANOS - SAMUEL




const StudentDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const student = location.state?.student;
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [grades, setGrades] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    const fetchStudentGrades = async () => {
      try {
        const response = await axiosInstance('/notas');
        const data = response.data;

        const filteredGrades = data.filter(grade => grade.user_id === parseInt(id));
        setGrades(filteredGrades);
        setPeriods([...new Set(filteredGrades.map(grade => grade.period.name))]);
        setSubjects([...new Set(filteredGrades.map(grade => grade.subject.nome))]);
        setTurmas([...new Set(filteredGrades.map(grade => grade.turma.turma))]);

      } catch (error) {
        console.error("Erro ao buscar dados de notas:", error);
      }
    };

    fetchStudentGrades();
  }, [id]);
  if (!student) {
    return <div>Aluno não encontrado</div>;
  }

  const subjectGrades = grades.reduce((acc, grade) => {
    const subjectName = grade.subject.nome;
    const period = grade.period.name;
    if (!acc[subjectName]) {
      acc[subjectName] = { '1º Trimestre': 0, '2º Trimestre': 0, '3º Trimestre': 0, total: 0 };
    }
    acc[subjectName][period] = grade.value || 0;
    acc[subjectName].total += grade.value || 0;
    return acc;
  }, {})

  const handleModalEdit = () => {
    setIsOpenModalEdit(!isOpenModalEdit);
  };

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:bg-zinc-800">
      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl first-letter:uppercase flex gap-2">
        {student.id} - <p className="first-letter:uppercase">{student.nome} </p>
      </h3>
      <div>
        <form action="">
          <input type="text" placeholder='Valor' />
          <select id="periodId" className="border border-zinc-200 px-2 py-1 rounded" required>
            <option selected disabled>Selecione um trimestre</option>
            {periods.map((period, index) => (
              <option key={index} value={period}>
                {period}
              </option>
            ))}
          </select>
          <select id="subjectId" className="border border-zinc-200 px-2 py-1 rounded" required>
            <option selected disabled>Selecione uma matéria</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          <select id="turmaId" className="border border-zinc-200 px-2 py-1 rounded" required>
            <option selected disabled>Selecione uma turma</option>
            {turmas.map((turma, index) => (
              <option key={index} value={turma}>
                {turma}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6">1º Trimestre</th>
              <th className="py-3 px-6">2º Trimestre</th>
              <th className="py-3 px-6">3º Trimestre</th>
              <th className="py-3 px-6">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {Object.entries(subjects).map(([subject, values]) => (
              <tr key={subject}>
                <td className="px-6 py-4 whitespace-nowrap">{subject}</td>
                <td className="px-6 py-4 whitespace-nowrap">{values['1º Trimestre'] || '0.0'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{values['2º Trimestre'] || '0.0'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{values['3º Trimestre'] || '0.0'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{values.total}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={handleModalEdit}
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {isOpenModalEdit && (
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
                  <h3 className="text-base font-semibold leading-6 text-zinc-900">
                    Editar Notas
                  </h3>

                  <div className="mt-8 flex flex-col">
                    <label className='text-sm pb-2' htmlFor="">Prova 01</label>
                    <input
                      className="border boder-gray-200 rounded px-4 py-1 w-full"
                      type="text"
                    />
                  </div>

                  <div className="mt-4 flex flex-col">
                    <label className='text-sm pb-2' htmlFor="">Prova 02</label>
                    <input
                      className="border boder-gray-200 rounded px-4 py-1 w-full"
                      type="text"
                    />
                  </div>

                  <div className="mt-4 flex flex-col">
                    <label className='text-sm pb-2' htmlFor="">Atividades</label>
                    <input
                      className="border boder-gray-200 rounded px-4 py-1 w-full"
                      type="text"
                    />
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
                    onClick={handleModalEdit}
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
      )}
    </div>
  );
};

export default StudentDetail;
