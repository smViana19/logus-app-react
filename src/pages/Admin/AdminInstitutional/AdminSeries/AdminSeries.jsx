import React, { useEffect, useState } from 'react';
import axios from '../../../../../services/axios';
import { useSelector } from 'react-redux';

const AdminSeries = () => {


  const [serieId, setSerieId] = useState('');
  const [series, setSeries] = useState([]);
  const [schoolYearId, setSchoolYearId] = useState('');

  const [schoolYear, setSchoolYear] = useState([]);
  const [serieName, setSerieName] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const userId = useSelector((state) => state.auth.user.id);
  const fetchSchoolLevel = async () => {
    try {
      const response = await axios.get('/admin/nivel-ensino/');
      setEducationLevels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
    handleSubmit()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleGradeSubmit()
    handleSchoolYearSubmit()
    handleSeriesSubmit()
    
  }


  const handleSchoolYearSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/admin/ano-escolar/', {
        data_inicio: initialDate,
        data_fim: finalDate,
      });
      alert('Enviado com sucesso');
    } catch (error) {
      alert('Nao foi possivel enviar', error);
    }
  };

  const handleSeriesSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/admin/serie/', {
        nome: nameSerie,
        nivel_educacional_id: parseInt(educationalLevelId),
      });
      console.log(response);
      alert('Serie criada com sucesso.');
    } catch (error) {
      console.error(error);
      alert('Nao foi possivel inserir a serie nova');
    }
  };

  const handleGradeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/admin/turma/', {
        turma: grade,
        serie_id: serieId,
        ano_escolar_id: schoolYearId,
        user_id: userId,
      });
      alert('Turma criada com sucesso.');
    } catch (error) {
      console.error(error);
      alert('Nao foi possivel inserir a nova turma');
    }
  };

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:text-white">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-800 mb-8 p-8">
        <div className="py-4 flex flex-col gap-2">
          <label>Ano Escolar</label>
          <select
            onChange={(e) => setSchoolYear(e.target.value)}
            className="border border-gray-200 dark:bg-neutral-800 dark:border-neutral-600 px-2 py-1 rounded"
            name=""
            id=""
          >
            <option value="" selected disabled>
              Selecione um ano escolar
            </option>
            <option value="6ano">6º Ano do Fundamental</option>
            <option value="7ano">7º Ano do Fundamental</option>
            <option value="8ano">8º Ano do Fundamental</option>
            <option value="9ano">9º Ano do Fundamental</option>
            <option value="1ano">1º Ano do Ensino Médio</option>
            <option value="2ano">2º Ano do Ensino Médio</option>
            <option value="3ano">3º Ano do Ensino Médio</option>
          </select>
        </div>

        <div className="py-4 flex flex-col gap-2">
          <label>Nome da Turma</label>
          <input
            onChange={(e) => setSerieName(e.tareget.value)}
            className="border border-gray-200 px-2 dark:bg-neutral-800 py-1 rounded dark:border-neutral-600"
            type="text"
            placeholder="Ex: 3B1"
          />
        </div>

        <h2 className="font-semibold mt-4 border-t border-gray-200  py-2">
          Ano Letivo
        </h2>
        <div className="py-4 grid grid-cols-2 gap-8">
          <span className="flex flex-col">
            <label htmlFor="">Data de Inicio</label>
            <input
              onChange={(e) => setInitialDate(e.target.value)}
              className="border border-gray-200 px-2 py-1 dark:bg-neutral-800 dark:border-neutral-600 rounded w-full"
              type="date"
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Data de Conclusão</label>
            <input
              className="border border-gray-200 dark:bg-neutral-800 dark:border-neutral-600 px-2 py-1 rounded w-full"
              type="date"
              onChange={(e) => setFinalDate(e.target.value)}
            />
          </span>
        </div>
        <button
          className="bg-purplePrimary py-2 px-32 rounded dark:text-white text-white mt-4"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default AdminSeries;
