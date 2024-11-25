import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../services/axios';


const SendTaskSubject = () => {
  const { nomeAtiv } = useParams();
  const location = useLocation();
  const materialId = useSelector((state) => state.material.selectedMaterialId);
  const userId = useSelector((state) => state.auth.user.id);
  const [submissionId, setSubmissionId] = useState(null);
  const { nomeMateria } = useParams();


  const token = useSelector((state) => state.auth.token);
  const mySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const fileInputRef = React.useRef(null);



  const [data, setData] = useState({
    categoria: location.state.categoria,
    dataEntrega: location.state.data_entrega,
    pontos: location.state.pontos,
    detail: location.state.detail,
    descricao: location.state.descricao,
    id: location.state.subject_material_id,
    files: [],
  });

  const handleClickFileInput = () => {
    fileInputRef.current.click();
  };

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

    if (files.length > 2) {
      mySwal.fire({
        title: 'Limite de arquivos excedido!!',
        icon: 'error',
      });
      event.target.value = null;
      return;
    }

    setData((prevData) => ({
      ...prevData,
      files: [...prevData.files, ...Array.from(files)],
    }));
  };

  const handleRemoveFile = (fileName) => {
    setData((prevData) => ({
      ...prevData,
      files: prevData.files.filter(file => file.name !== fileName),

    }));


  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (data.files.length === 0) {
      mySwal.fire({
        title: 'Selecione ao menos um arquivo para enviar!',
        icon: 'error',
      });
      return;
    }

    const formData = new FormData();
    data.files.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('data_entrega', new Date().toISOString());
    formData.append('subject_material_id', data.id);
    formData.append('user_id', userId);

    try {
      await axiosInstance.post(`http://localhost:3000/materias/material/submit/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setActivitiesSubmitted((prev) => prev + 1);
      mySwal.fire({
        title: 'Arquivos enviados com sucesso!!',
        icon: 'success',
      });
      navigate(`/dashboard/postagens/${nomeMateria}`);
    } catch (error) {
      console.error('Erro ao enviar os arquivos:', error);
      mySwal.fire({
        title: 'Erro ao enviar os arquivos, por favor tente novamente!',
        icon: 'error',
      });
    }
  };

  return (
    <div className="flex justify-center p-5 ml-16 items-center min-h-screen bg-gray-100 dark:bg-zinc-800">
      <div className="max-w-4xl w-full bg-white dark:bg-zinc-700 shadow-lg rounded-lg p-6 space-y-6">
        {/* Cabeçalho do Card */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white capitalize">
              {nomeAtiv}
            </h1>
            <span className="px-4 py-1 text-sm font-medium text-purplePrimary bg-purple-100 rounded-full dark:bg-purple-700 dark:text-purple-200">
              {data.categoria}
            </span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p className="mb-1">Entrega até: <strong>{dataEntregaFormatada}</strong></p>
            <p className="mb-1">{data.pontos} pontos</p>
            <p>{data.descricao}</p>
          </div>
        </div>

        {/* Atividades Enviadas */}
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          <p>Atividades enviadas: <strong>{activitiesSubmitted}</strong></p>
        </div>

        {/* Formulário para envio */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700 dark:text-white">
            Enviar Atividade
          </h2>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              multiple
              className="hidden"
            />
            <button
              type="button"
              onClick={handleClickFileInput}
              className="inline-block px-6 py-2 bg-purplePrimary text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-all"
            >
              Selecionar Arquivos
            </button>
          </div>
          <div>
            {data.files.length > 0 && (
              <div className="space-y-2">
                {data.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                  >
                    <span className="text-sm text-gray-800 dark:text-gray-200">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(file.name)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remover
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-purplePrimary text-white font-semibold rounded-lg hover:bg-purple-700 transition-all"
          >
            Enviar Atividade
          </button>
        </form>
      </div>
    </div>

  );
};

export default SendTaskSubject;
