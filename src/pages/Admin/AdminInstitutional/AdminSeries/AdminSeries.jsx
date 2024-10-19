import React, { useEffect, useState } from 'react';
import axios from '../../../../../services/axios';
import { useSelector } from 'react-redux';

const AdminSeries = () => {
  const [serieId, setSerieId] = useState('');
  const [series, setSeries] = useState([]);
  const [grade, setGrade] = useState('')
  const [schoolYear, setSchoolYear] = useState([]);
  const [yearSchoolId, setYearSchoolId] = useState('');

  const userId = useSelector((state) => state.auth.user.id);

  const fetchSeries = async () => {
    try {
      const response = await axios.get('/admin/serie/');
      setSeries(response.data.grade);
    } catch (error) {
      console.error('Erro ao buscar séries:', error);
    }
  };

  const fetchSchoolYears = async () => {
    try {
      const response = await axios.get('/admin/ano-escolar/');
      setSchoolYear(response.data);
    } catch (error) {
      console.error('Erro ao buscar anos escolares:', error);
    }
  };

  useEffect(() => {

    fetchSeries();
    fetchSchoolYears();

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/admin/turma/', {
        turma: grade,
        serie_id: serieId,
        ano_escolar_id: yearSchoolId,
        user_id: userId,
      });
      alert('Turma criada com sucesso.');
    } catch (error) {
      console.error(error);
      alert('Nao foi possivel inserir a nova turma');
    }
  };

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
      <form onSubmit={handleSubmit} className='bg-white mb-8 p-8'>
        <div className="py-4 flex flex-col gap-2">
          <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="turma">
            Turma
          </label>
          <input
            type="text"
            id="turma"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="Ex: B5"
            className="border border-zinc-200 px-2 py-1 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="serieId">
            Série
          </label>
          <select
            id="serieId"
            value={serieId}
            onChange={(e) => setSerieId(e.target.value)}
            className="border border-zinc-200 px-2 py-1 rounded"
            required
          >
            <option value="">Selecione uma série</option>
            {series.map((serie) => (
              <option key={serie.id} value={serie.id}>
                {serie.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="anoEscolarId">
            Ano Escolar
          </label>
          <select
            id="anoEscolarId"
            value={yearSchoolId}
            onChange={(e) => setYearSchoolId(e.target.value)}
            className="border border-zinc-200 px-2 py-1 rounded"
            required
          >
            <option value="" selected disabled>Selecione um ano escolar</option>
            {schoolYear.map((year) => (
              <option key={year.id} value={year.id}>
                {year.ano}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-purplePrimary py-2 px-32 rounded text-white mt-4"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AdminSeries;
