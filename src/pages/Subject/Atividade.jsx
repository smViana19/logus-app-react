import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Atividade = () => {
  const { nomeAtiv } = useParams();
  const location = useLocation();
  const { categoria, data_entrega, pontos, detail } = location.state || {};

  const materialId = useSelector(state => state.material.selectedMaterialId);
  console.log(`id atividade: ${materialId}`);

  const userId = useSelector(state => state.auth.user.id);
  console.log(`user id: ${userId}`);

  const [data, setData] = useState({
    categoria: location.state.categoria,
    dataEntrega: location.state.data_entrega,
    pontos: location.state.pontos,
    detail: location.state.detail,
    files: [], // Alterado para aceitar múltiplos arquivos
  });

  const dataEntregaFormatada = data.dataEntrega ?
      new Date(data.dataEntrega).toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }) : 'Sem data de entrega';

  // Função para manipular múltiplos arquivos
  const handleFileChange = (event) => {
    const files = event.target.files; // Pega todos os arquivos selecionados
    setData(prevData => ({
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
    data.files.forEach(file => {
      formData.append('files', file); // 'files' é o nome do campo no backend
    });
    formData.append('data_entrega', new Date().toISOString());
    formData.append('subject_material_id', materialId);
    formData.append('user_id', userId);

    try {
      await axios.post(`http://localhost:3000/materias/material/submit/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Arquivos enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os arquivos:', error);
      alert('Erro ao enviar os arquivos. Tente novamente.');
    }
  };

  return (
      <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
        <div className="flex justify-between mb-2">
          <h2 className="text-2xl font-semibold">{nomeAtiv}</h2>
          <span
              className="rounded-md px-4 py-1 font-medium tracking-wide text-sm text-purplePrimary bg-[#EDDDFF]">{data.categoria}</span>
        </div>
        <span className="text-sm uppercase text-gray-400"></span>

        <div className="mt-8 flex justify-between">
          <span>{data.pontos} pontos</span>
          <span>Data de Entrega: {dataEntregaFormatada}</span>
        </div>

        <div className="mt-32">
          {data.detail}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-8">
            <label className="block mb-2 text-sm font-medium text-gray-700">Anexar arquivos:</label>
            <input
                type="file"
                multiple // Adicionar o atributo multiple para aceitar vários arquivos
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purplePrimary file:text-white hover:file:bg-purple-700"
            />
            {data.files.length > 0 && (
                <p className="mt-2 text-sm text-gray-500">Arquivos
                  selecionados: {data.files.map(file => file.name).join(', ')}</p>
            )}
          </div>
          <button
              type="submit"
              className="mt-8 px-4 py-2 bg-purplePrimary text-white rounded"
          >
            Enviar
          </button>
        </form>
      </div>
  );
};

export default Atividade;
