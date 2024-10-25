import { Link } from 'react-router-dom';
import SubjectCard from '../../components/CardsContainers/SubjectCard.jsx';
import bannerMateria from '../../assets/Banners/bannerMaterias.jpg';
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../../services/axios.js';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinners/Spinner.jsx';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
export default function PostsArea() {
  const [materias, setMaterias] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newMateria, setNewMateria] = useState('');
  const [menuVisible, setMenuVisible] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editNome, setEditNome] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.user.role);
  const mySwal = withReactContent(Swal)


  console.log(role)


  useEffect(() => {
    async function fetchMaterias() {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/materias/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setMaterias(response.data);
      } catch (err) {
        setIsLoading(false);
        mySwal.fire({
          title: 'Erro ao carregar as máterias.',
          text: err.message,
          icon: 'error'
        });

      } finally {
        setIsLoading(false);
      }
    }

    fetchMaterias();
  }, []);

  async function handleAddMateria(e) {
    e.preventDefault();

    if (newMateria.trim() === '') {
      toast.error('Por favor, preencha o nome da matéria.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/materias/', {
        nome: newMateria,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const createdMateria = response.data;
      setMaterias([...materias, createdMateria]);
      setNewMateria('');
      setShowModal(false);
      toast.success('Matéria adicionada com sucesso!');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.forEach(error => toast.error(error));
    }

    const updatedMaterias = [
      ...materias,
      {
        nome: newMateria,
        banner: bannerMateria,
        atividades: [
          { nome: 'Atividade de Geografia Analítica', data: '04/06' },
        ],
      },
    ];

    setMaterias(updatedMaterias);
    localStorage.setItem('materias', JSON.stringify(updatedMaterias));
    setNewMateria('');
    setShowModal(false);
  }

  const handleDeleteMateria = async (index, id) => {
    const result = await mySwal.fire({
      title: "Você tem certeza?",
      text: "Deseja mesmo excluir a matéria?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#820AD1',
      confirmButtonText: 'Sim, desejo excluir!'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/materias/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setMaterias((prevMaterias) => prevMaterias.filter((_, i) => i !== index));
        mySwal.fire({
          title: 'Excluido!',
          text: 'A matéria foi excluida com sucesso.',
          icon: 'success'
        });
      } catch (err) {
        toast.error('Erro ao excluir matéria.');
      }
    }
  };

  const handleEditMateria = (index) => {
    setEditingIndex(index);
    setEditNome(materias[index].nome);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    const updatedMateria = {
      nome: editNome,
    };
    try {
      const response = await axios.put(`http://localhost:3000/materias/${materias[editingIndex].id}`, updatedMateria);
      const updatedMaterias = [...materias];
      updatedMaterias[editingIndex] = response.data;
      setMaterias(updatedMaterias);
      setEditingIndex(null);
      setShowEditModal(false);
      mySwal.fire({
        title: 'Editado!',
        text: 'A máteria foi editada com sucesso.',
        icon: 'success'
      });
    } catch (err) {
      mySwal.fire({
        title: 'Erro ao editar matéria',
        text: err,
        icon: 'error'
      });
    }
  };
  console.log(useSelector((state) => state.auth)); 
  const { user } = useSelector((state) => state.auth);
  const userRole = user?.role;

  if (isLoading) return <Spinner />;


  return (
    <>
      <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300">
        <main className="">
        <section className="flex justify-end mx-auto">
            {userRole === "diretor" && (
              <button
                className="bg-purplePrimary  hover:bg-purple-600 transition-all duration-300 text-white xl:px-24 max-lg:w-full py-2 rounded mt-4"
                onClick={() => setShowModal(true)}
              >
                Adicionar Matéria
              </button>
            )}
          </section>
          {materias.length > 0 ? (
            <section className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 3xl:grid-cols-4 gap-x-8 gap-y-16 justify-center mx-auto mt-8 ">
              {materias.map((materia, index) => (
                <div key={index} className="relative">
                  <Link to={`/dashboard/postagens/${materia.nome.toLowerCase().replace(' ', '')}`}>
                    <SubjectCard
                      banner={bannerMateria}
                      nome={materia.nome}
                      atividades={materia.atividades}
                      subject={materia}
                    />
                  </Link>
                  {(role == "diretor" || role =="professor")  &&(
                  <div className="absolute top-2 right-2 p-2 rounded-full focus:outline-none z-50">
                    <button
                      onClick={() => setMenuVisible(menuVisible === index ? null : index)}
                      className="px-3 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800"
                      style={{ color: '#000' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" height="14" width="3.5" viewBox="0 0 128 512">
                        <path className='fill-purplePrimary' d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg>
                    </button>
                    
                    
                    {menuVisible === index && (
                      <div
                        className="absolute top-10 right-2 w-24 bg-white border border-zinc-200 dark:border-zinc-600 rounded shadow-lg z-50">
                        <button
                          onClick={() => handleEditMateria(index)}
                          className="block w-full text-left px-4 py-2 text-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:bg-zinc-700"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteMateria(index, materia.id)}
                          className="block w-full text-left px-4 py-2 text-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:bg-zinc-700 transition-colors"
                        >
                          Excluir
                        </button>
                      </div>
                    )}
                  </div>
                  )}
                </div>
                
              ))}
            </section>
          ) : (
            <p className="text-center text-zinc-600 dark:text-zinc-300 mt-8 text-xl">
              Não foi possível encontrar as matérias.
            </p>
          )}
        </main>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50 z-50"
          onClick={() => setShowModal(false)}>

          <div
            className="bg-white 2xl:w-1/2 py-8 lg:w-4/6 w-full lg:px-16 px-4 rounded-md shadow-lg lg:text-left dark:bg-zinc-800 max-lg:mx-8 max-md:mx-4"
            onClick={(e) => e.stopPropagation()}>

            <h2 className='text-lg mb-6 dark:text-white'>Nova Matéria</h2>
            <form onSubmit={handleAddMateria}>
              <input
                type="text"
                value={newMateria}
                onChange={(e) => setNewMateria(e.target.value)}
                className="border border-zinc-300 p-2 mb-4 w-full rounded outline-none dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100 "
                placeholder="Nome da matéria"
              />
              <div className='flex justify-end mt-2'>
                <button
                  type="submit"
                  className="bg-purplePrimary dark:bg-purpleDark text-white py-1.5 px-8 rounded tracking-wide dark:text-zinc-200"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50  max-lg:px-4 z-50"
          onClick={() => setShowEditModal(false)}>
          <div
            className="bg-white py-8 lg:w-1/3 md:w-1/2 w-full lg:px-16 px-0 rounded-lg shadow-lg lg:text-left max-lg:px-4 dark:bg-zinc-600"
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg mb-6 dark:text-white">Editar Matéria</h2>
            <input
              type="text"
              value={editNome}
              onChange={(e) => setEditNome(e.target.value)}
              className="border border-zinc-300 p-2 mb-4 w-full rounded-lg outline-none dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100"
              placeholder="Nome da matéria"
            />
            <div className="flex justify-center gap-x-4">
              <button
                onClick={handleSaveEdit}
                className="bg-purplePrimary dark:bg-purpleDark text-white py-1.5 px-8 rounded-lg tracking-wide dark:text-zinc-200"
              >
                Salvar
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-zinc-500 text-white py-1.5 px-8 rounded-lg tracking-wide"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
