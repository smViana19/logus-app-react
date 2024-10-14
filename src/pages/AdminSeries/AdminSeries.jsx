import React, { useEffect, useState } from 'react';
import axios from '../../../services/axios';
import { useSelector } from 'react-redux';

const AdminSeries = () => {

    const [nameLevel, setNameLevel] = useState('');
    const [descriptionLevel, setDescriptionLevel] = useState('');
    const [year, setYear] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [educationalLevelId, setEducationalLevelId] = useState('');
    const [educationLevels, setEducationLevels] = useState([]);
    const [nameSerie, setNameSerie] = useState('');
    const [descriptionSerie, setDescriptionSerie] = useState('');
    const [grade, setGrade] = useState('');
    const [serieId, setSerieId] = useState('');
    const [series, setSeries] = useState([]);
    const [yearSchoolId, setYearSchoolId] = useState('');
    const [yearSchool, setYearSchool] = useState([]);

    const userId = useSelector((state) => state.auth.user.id);
    const fetchSchoolLevel = async () => {
        try {
            const response = await axios.get('/admin/nivel-ensino/')
            setEducationLevels(response.data);

        } catch (error) {
            console.error(error)
        }
    }

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
            setYearSchool(response.data);
        } catch (error) {
            console.error('Erro ao buscar anos escolares:', error);
        }
    };

    useEffect(() => {
        fetchSchoolLevel();
        fetchSchoolYears();
        fetchSeries();
    }, []);


    const handleSchoolLevelSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/admin/nivel-ensino/', {
                nome: nameLevel,
                descricao: descriptionLevel
            });
            alert("Enviado o nivel escolar com sucesso")
        } catch (error) {
            console.log(error)
            alert("nao foi possivel enviar", error)
        }
    }

    const handleSchoolYearSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/admin/ano-escolar/', {
                ano: year,
                data_inicio: initialDate,
                data_fim: finalDate
            });
            alert("Enviado com sucesso")
        } catch (error) {
            alert("Nao foi possivel enviar", error)
        }
    }

    const handleSeriesSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/admin/serie/', {
                nome: nameSerie,
                descricao: descriptionSerie,
                nivel_educacional_id: parseInt(educationalLevelId),
            });
            console.log(response)
            alert("Serie criada com sucesso.")
        } catch (error) {
            console.error(error)
            alert("Nao foi possivel inserir a serie nova")
        }
    }

    const handleGradeSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/admin/turma/', {
                turma: grade,
                serie_id: serieId,
                ano_escolar_id: yearSchoolId,
                user_id: userId,
            })
            alert("Turma criada com sucesso.")
        } catch (error) {
            console.error(error)
            alert("Nao foi possivel inserir a nova turma");
        }
    }

    return (
        <div className='p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSchoolLevelSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameLevel">
                                Nome do Nível *
                            </label>
                            <input
                                type="text"
                                id="nameLevel"
                                placeholder='3o ano medio'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={nameLevel}
                                onChange={(e) => setNameLevel(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descriptionLevel">
                                Descrição
                            </label>
                            <input
                                type="text"
                                id="descriptionLevel"
                                placeholder='Digite a descricao'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={descriptionLevel}
                                onChange={(e) => setDescriptionLevel(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">

                    <form onSubmit={handleSchoolYearSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nameLevel">
                                Ano
                            </label>
                            <input
                                type="number"
                                id="year"
                                placeholder='2024'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                                Data Inicial
                            </label>
                            <input
                                type="date"
                                id="startDate"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={initialDate}
                                onChange={(e) => setInitialDate(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                                Data Final
                            </label>
                            <input
                                type="date"
                                id="endDate"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={finalDate}
                                onChange={(e) => setFinalDate(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </form>

                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSeriesSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                                Nome da Série
                            </label>
                            <input
                                type="text"
                                id="nome"
                                value={nameSerie}
                                onChange={(e) => setNameSerie(e.target.value)}
                                placeholder="Ex: 1 ano do fundamental"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao">
                                Descrição
                            </label>
                            <input
                                type="text"
                                id="descricao"
                                value={descriptionSerie}
                                onChange={(e) => setDescriptionSerie(e.target.value)}
                                placeholder="Digite uma descrição"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nivelEducacionalId">
                                Nível Educacional
                            </label>
                            <select
                                id="nivelEducacionalId"
                                value={educationalLevelId}
                                onChange={(e) => setEducationalLevelId(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="">Selecione um nível educacional</option>
                                {educationLevels.map((level) => (
                                    <option key={level.id} value={level.id}>
                                        {level.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <form onSubmit={handleGradeSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="turma">
                                Turma
                            </label>
                            <input
                                type="text"
                                id="turma"
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                                placeholder="Ex: B5"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serieId">
                                Série
                            </label>
                            <select
                                id="serieId"
                                value={serieId}
                                onChange={(e) => setSerieId(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="">Selecione uma série</option>
                                {series.map((serie) => (
                                    <option key={serie.id} value={serie.id}>
                                        {serie.nome} {/* Supondo que o nome da série é uma propriedade do objeto */}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="anoEscolarId">
                                Ano Escolar
                            </label>
                            <select
                                id="anoEscolarId"
                                value={yearSchoolId}
                                onChange={(e) => setYearSchoolId(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="">Selecione um ano escolar</option>
                                {yearSchool.map((year) => (
                                    <option key={year.id} value={year.id}>
                                        {year.ano}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminSeries;
