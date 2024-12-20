import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SubjectFiltersButton from '../../components/Buttons/SubjectFiltersButton.jsx';
import TaskCard from '../../components/CardsContainers/TaskCard.jsx';
import { AtividadeProvider } from '../../context/AtividadeContext';
import Modal from '../../components/Modal/ModalCriarAtv';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import axiosInstance from '../../../services/axios';

const Subject = () => {
  const token = useSelector((state) => state.auth.token);
  const { nomeMateria } = useParams();
  const [atividades, setAtividades] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const role = useSelector((state) => state.auth.user.role);
  const subjectId = useSelector((state) => state.subject.selectedSubjectId);
  const mySwal = withReactContent(Swal);


  const fetchAtividades = async () => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:3000/materias/material/${subjectId}`
      );
      setAtividades(response.data);
      console.log(response.data)
    } catch (err) {
      mySwal.fire({
        title: 'Erro ao carregar atividades',
        text: err.message,
        icon: 'error',
      });
    }
  };


  useEffect(() => {
    fetchAtividades();
  }, [subjectId, token]);

  const handleAddAtividade = async (newAtividadeData) => {
    try {
      const response = await axiosInstance.post(
        'http://localhost:3000/materias/material/',
        newAtividadeData
      );
      setAtividades([...atividades, response.data]);
      setShowModal(false);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.forEach((error) => toast.error(error));
    }
  };

  const handleDeleteAtividade = async (index, id) => {
    try {
      await axiosInstance.delete(`http://localhost:3000/materias/material/${id}`);
      setAtividades((prevAtividades) =>
        prevAtividades.filter((_, i) => i !== index)
      );
      toast.success('Atividade excluída com sucesso!');
    } catch (err) {
      toast.error('Erro ao excluir atividade.');
    }
  };

  const filteredAtividades =
    filterStatus === 'all'
      ? atividades
      : atividades.filter((atividade) => {
        console.log('Filtering atividade:', atividade);
        return (
          atividade.categoria.toLowerCase() === filterStatus.toLowerCase()
        );
      });

  return (
    <AtividadeProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-800 ">
        <main className="md:px-16 mt-4 lg:px-32 xl:px-64 py-16 ">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-span-1 bg-purple-600 h-full flex items-end rounded-md ">
              <h1 className="text-white text-3xl p-2 md:p-6 first-letter:uppercase">
                {nomeMateria}
              </h1>
            </div>
            <div className="col-span-1 grid grid-rows-4 gap-4 dark:text-zinc-500">
              <SubjectFiltersButton
                text={'Resumos'}
                onClick={() => setFilterStatus('resumos')}
              />
              <SubjectFiltersButton
                text={'Apresentações'}
                onClick={() => setFilterStatus('apresentacao')}
              />
              <SubjectFiltersButton
                text={'Atividades'}
                onClick={() => setFilterStatus('atividade')}
              />
              <SubjectFiltersButton
                text={'Todas'}
                onClick={() => setFilterStatus('all')}
              />
            </div>
          </div>

          <div className="flex justify-end">
            {(role === 'diretor' || role === 'professor') && (
              <button
                className="px-3 bg-purplePrimary text-white tracking-wide py-1 text-3xl rounded-full"
                onClick={() => setShowModal(true)}
              >
                +
              </button>
            )}

          </div>


          <div className="gap-y- flex flex-col mt-8">
            {filteredAtividades.length > 0 ? (
              filteredAtividades.map((atividade, index) => (
                <TaskCard
                  key={atividade.id}
                  nome={atividade.nome}
                  categoria={atividade.categoria}
                  dataEntrega={atividade.data_entrega}
                  pontos={atividade.pontos}
                  file={atividade.file}
                  detail={atividade.detalhes}
                  onDelete={() => handleDeleteAtividade(index, atividade.id)}
                  idAtv={atividade.id}
                  fetchAtividades={fetchAtividades}
                />
              ))
            ) : (
              <p className="col-span-3 text-center text-zinc-500">
                Nenhuma atividade adicionada.
              </p>
            )}
          </div>


          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            handleAddAtividade={handleAddAtividade}
          />
        </main>
      </div>
    </AtividadeProvider>
  );
};

export default Subject;