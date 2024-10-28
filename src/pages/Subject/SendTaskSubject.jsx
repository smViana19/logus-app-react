import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


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

  /*const handleCancelSubmit = async () => {
    if (!submissionId) {
      alert("Entrega não encontrada.");
      return;
    }
  
    try {
      await axios.delete(`http://localhost:3000/materias/material/submit/${submissionId}`);
      alert('Entrega cancelada com sucesso!');
      setActivitiesSubmitted((prev) => prev - 1);
      setSubmissionId(null);  // Limpa o ID após o cancelamento
    } catch (error) {
      console.error('Erro ao cancelar a entrega:', error);
      alert('Erro ao cancelar a entrega. Tente novamente.');
    }
  };
  
  const fetchSubmission = async () => {
    try {
      const response = await axios.get('http://localhost:3000/materias/material/submit', {
        headers: {
          Authorization: `Bearer ${token}`  
        },

      });
  
      const submission = response;
      console.log("submission: ", submission)
      if (submission) {
        setSubmissionId(submission.id);  // Armazena o ID da entrega no estado.
      } else {
        alert('Nenhuma entrega encontrada.');
      }
    } catch (error) {
      console.error('Erro ao buscar entrega:', error);
      console.log(submissionId)
      alert('Erro ao buscar entrega. Tente novamente.');
    }
  };
  */

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
      await axios.post(`http://localhost:3000/materias/material/submit/`, formData, {
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

/*
  useEffect(() => {
    fetchSubmission();
  }, []);
  */

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
          <p className="mt-2 text-sm text-gray-500">Atividades entregues: {activitiesSubmitted}</p>
        </div>
      </div>

      <form
        className="bg-white p-8 max-sm:ml-14 rounded border border-zinc-100 dark:bg-zinc-700 dark:text-zinc-100"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 font-medium">Enviar Atividade</h1>
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
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Selecionar Arquivos
          </button>
        </div>

        <div className="mt-4">
          {data.files.length > 0 && (
            <div className="space-y-2">
              {data.files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                  <span>{file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(file.name)}
                    className="text-red-500"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
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
