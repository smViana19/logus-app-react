import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import InputFile from '../../components/Inputs/InputFile';

const SendTaskSubject = () => {
  const { nomeAtiv } = useParams();
  const location = useLocation();
  const { categoria, data_entrega, pontos, detail, descricao } =
    location.state || {};

  const materialId = useSelector((state) => state.material.selectedMaterialId);
  console.log(`id atividade: ${materialId}`);

  const userId = useSelector((state) => state.auth.user.id);
  console.log(`user id: ${userId}`);

  const [data, setData] = useState({
    categoria: location.state.categoria,
    dataEntrega: location.state.data_entrega,
    pontos: location.state.pontos,
    detail: location.state.detail,
    descricao: location.state.descricao,
    files: [], // Alterado para aceitar múltiplos arquivos
  });

  const dataEntregaFormatada = data.dataEntrega
    ? new Date(data.dataEntrega).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Sem data de entrega';

  // Função para manipular múltiplos arquivos
  const handleFileChange = (event) => {
    const files = event.target.files; // Pega todos os arquivos selecionados
    setData((prevData) => ({
      ...prevData,
      files: Array.from(files), // Converte a FileList para um array
    }));
  };

  // Função para enviar a entrega
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    if (data.files.length === 0) {
      alert('Por favor, selecione ao menos um arquivo para enviar.');
      return;
    }

    const formData = new FormData();
    // Adicionar múltiplos arquivos ao FormData
    data.files.forEach((file) => {
      formData.append('files', file); // 'files' é o nome do campo no backend
    });
    formData.append('data_entrega', new Date().toISOString());
    formData.append('subject_material_id', materialId);
    formData.append('user_id', userId);

    try {
      await axios.post(
        `http://localhost:3000/materias/material/submit/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Arquivos enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os arquivos:', error);
      alert('Erro ao enviar os arquivos. Tente novamente.');
    }
  };

  return (
    <div className="sm:p-5 min-h-screen  sm:ml-20 lg:ml-64 mt-8  md:mt-16  md:ml-64 lg:mt-8 transition-all duration-300 flex justify-between max-sm:mt-20 sm:justify-around flex-col">
      <div className="grid sm:grid-cols-[50px_1fr] items-start gap-8 mx-20 sm:mx-16">
        <div className="bg-zinc-200 rounded-full sm:flex hidden p-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="18.25"
            viewBox="0 0 448 512"
          >
            <path
              className="fill-purplePrimary"
              d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
            />
          </svg>
        </div>

        <div>
          <div className="flex justify-between">
            <h1 className="first-letter:uppercase text-xl font-medium mb-2">
              {nomeAtiv}
            </h1>
            <span className="rounded-md sm:px-4 px-2 md:h-8 flex items-center font-medium sm:text-sm text-xs text-purplePrimary bg-[#EDDDFF]">
              {data.categoria}
            </span>
          </div>
          <p className="text-sm font-medium text-zinc-600 mb-4">
            {data.pontos} pontos
          </p>
          <span className="text-zinc-600">Entrega: {dataEntregaFormatada}</span>
          <p className="mt-8">{data.descricao}asdfasdfasdf</p>{' '}
          {/* MOSTRAR O ARQUIVO AQUI */}
        </div>
      </div>

      <form
        className="bg-white p-8 max-sm:ml-14 rounded border border-zinc-100 "
        onSubmit={handleSubmit}
      >
        {' '}
        {/* DIRETOR E PROFESSOR NÃO PODE TER ESSA PARTE / MOSTRAR AS ATIVIDADES ENTREGUES E QM ENTREGOU P ELES */}
        <h1 className="mb-8 font-medium">Enviar Atividade</h1>
        <div className="">
          <InputFile
            onChange={handleFileChange}
            nameFile={
              data.files.length > 0
                ? data.files.map((file) => file.name).join(', ')
                : ''
            }
          />
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
