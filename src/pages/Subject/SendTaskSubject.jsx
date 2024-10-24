import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import InputFile from '../../components/Inputs/InputFile';

const SendTaskSubject = () => {
  const { nomeAtiv } = useParams();
  const location = useLocation();
  const materialId = useSelector((state) => state.material.selectedMaterialId);
  const userId = useSelector((state) => state.auth.user.id);


  const [data, setData] = useState({
    categoria: location.state.categoria,
    dataEntrega: location.state.data_entrega,
    pontos: location.state.pontos,
    detail: location.state.detail,
    descricao: location.state.descricao,
    files: [],
  });

  const [activitiesSubmitted, setActivitiesSubmitted] = useState(0);

  const dataEntregaFormatada = data.dataEntrega
    ? new Date(data.dataEntrega).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
    : 'Sem data de entrega';

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setData((prevData) => ({
        ...prevData,
        files: Array.from(files),
      }));
    } else {
      console.error("Nenhum arquivo selecionado");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (data.files.length === 0) {
      alert('Por favor, selecione ao menos um arquivo para enviar.');
      return;
    }

    const formData = new FormData();
    data.files.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('data_entrega', new Date().toISOString());
    formData.append('subject_material_id', materialId);
    console.log(materialId)
    formData.append('user_id', userId);

    try {
      const response = await axios.post(
        `http://localhost:3000/materias/material/submit/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setActivitiesSubmitted((prev) => prev + 1);
      alert('Arquivos enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os arquivos:', error);
      alert('Erro ao enviar os arquivos. Tente novamente.');
    }
  };


  return (
    <div className="sm:p-5 min-h-screen sm:ml-20 lg:ml-64 mt-8 md:mt-16 md:ml-64 lg:mt-8 transition-all duration-300 flex justify-between max-sm:mt-20 sm:justify-around flex-col">
      <div className="grid sm:grid-cols-[50px_1fr] items-start gap-8 mx-20 sm:mx-16">
        <div className="bg-zinc-200 rounded-full sm:flex hidden p-2 justify-center items-center">
          {/* SVG Icon */}
        </div>

        <div>
          <div className="flex justify-between">
            <h1 className="first-letter:uppercase text-xl font-medium mb-2 dark:text-zinc-100">
              {nomeAtiv}
            </h1>
            <span className="rounded-md sm:px-4 px-2 md:h-8 flex items-center font-medium sm:text-sm text-xs text-purplePrimary bg-[#EDDDFF] dark:bg-purple-700 dark:text-purple-200">
              {data.categoria}
            </span>
          </div>
          <p className="text-sm font-medium text-zinc-600 mb-4 dark:text-zinc-500">
            {data.pontos} pontos
          </p>
          <span className="text-zinc-600 dark:text-zinc-300">Entrega: {dataEntregaFormatada}</span>
          <p className="mt-8">{data.descricao}</p>
          {/* Aqui você pode adicionar a lógica para exibir as atividades entregues */}
          <p className="mt-2 text-sm text-gray-500">Atividades entregues: {activitiesSubmitted}</p>
        </div>
      </div>

      <form
        className="bg-white p-8 max-sm:ml-14 rounded border border-zinc-100 dark:bg-zinc-700 dark:text-zinc-100"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-8 font-medium">Enviar Atividade</h1>
        <div>
          <input className="" type="file" onChange={handleFileChange} />
          {/* <InputFile
            onChange={handleFileChange}
            nameFile={
              data.files.length > 0
                ? data.files.map((file) => file.name).join(', ')
                : ''
            }
          /> */}
        </div>
        <button
          type="submit"
          className="sm:mt-8 mt-4 sm:px-32 px-8 max-sm:w-full sm:py-2 py-1 bg-purplePrimary text-white rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default SendTaskSubject;
