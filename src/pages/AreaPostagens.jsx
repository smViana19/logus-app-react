import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavLink from '../components/Navs/NavLink';
import Logo from '../components/Logo/Logo.jsx';
import LogoutButton from '../components/Buttons/LogoutButton.jsx';
import SubjectCard from '../components/CardsContainers/SubjectCard.jsx';
import bannerMateria from '../assets/Banners/bannerMaterias.jpg';
import { toast, ToastContainer } from 'react-toastify';
import MenuMobile from '../components/Navs/MenuMobile';
import axios from "../../services/axios";
import { get } from "lodash";



export default function AreaPostagens() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [materias, setMaterias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newMateria, setNewMateria] = useState('');
    const [menuVisible, setMenuVisible] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editNome, setEditNome] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);


    const token = useSelector((state) => state.auth.token);
    useEffect(() => {
        async function fetchMaterias() {
            try {
                const response = await axios.get('http://localhost:3000/materias/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setMaterias(response.data);
            } catch (err) {
                toast.error('Erro ao carregar matérias.');
            }
        }

        fetchMaterias();
    }, []);



    async function handleAddMateria(e) {
        e.preventDefault();

        if (newMateria.trim() === '') {
            toast.error('Por favor, preencha o nome da matéria.');
            console.log("funciona")
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/materias/', {
                nome: newMateria
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Certifique-se de que está correto
                }
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
                    { nome: 'Atividade de Geografia Analítica', data: '04/06' }
                ],
            },
        ];

        setMaterias(updatedMaterias);
        localStorage.setItem('materias', JSON.stringify(updatedMaterias));
        setNewMateria('');
        setShowModal(false);
    };

    const handleDeleteMateria = async (index, id) => {
        try {
            await axios.delete(`http://localhost:3000/materias/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setMaterias((prevMaterias) => prevMaterias.filter((_, i) => i !== index));
            toast.success('Matéria excluída com sucesso!');
        } catch (err) {
            toast.error('Erro ao excluir matéria.');
        }
    };

    const handleEditMateria = (index) => {
        setEditingIndex(index);
        setEditNome(materias[index].nome);
        setShowEditModal(true);
    };


    const handleSaveEdit = async () => {
        const updatedMateria = {
            nome: editNome
        };

        try {
            const response = await axios.put(`http://localhost:3000/materias/${materias[editingIndex].id}`, updatedMateria);
            const updatedMaterias = [...materias];
            updatedMaterias[editingIndex] = response.data;
            setMaterias(updatedMaterias);
            setEditingIndex(null);
            setShowEditModal(false);
            toast.success('Matéria editada com sucesso!');
        } catch (err) {
            toast.error('Erro ao editar matéria.');
        }
    };


    return (
        <>
            <div className="min-h-screen bg-gray-50 dark:bg-zinc-800 dark:text-white">
                <MenuMobile />
                <nav className="bg-white shadow-gray-100 shadow-md dark:bg-zinc-800 max-xl:hidden">

                    <div className="flex justify-between py-2 px-16">
                        <div className="flex items-center">
                            <Link to="/">
                                <Logo className="block h-12 w-auto fill-current text-black" />
                            </Link>
                        </div>

                        <div className="flex justify-around">
                            <div className="space-x-8 lg:flex">
                                <NavLink className="text-black" to="/dashboard">Dashboard</NavLink>
                                <NavLink className="text-black" to="/dashboard/postagens">Área de Postagens</NavLink>
                                <NavLink className="text-black" to="/dashboard/agenda">Agenda</NavLink>
                                <NavLink className="text-black" to="/dashboard/pomodoro">Método Pomodoro</NavLink>
                            </div>
                        </div>

                        <div className="flex justify-center gap-16">
                            <NavLink to="/dashboard/perfil">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="14"
                                    width="12.25"
                                    viewBox="0 0 448 512"
                                    className="fill-gray-400"
                                >
                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                            </NavLink>
                            <LogoutButton />

                        </div>
                    </div>
                </nav>
                <main className='pt-16'>
                    <section className="w-4/5 block mx-auto">
                        <button
                            className="border border-gray-300 px-16 xl:px-24 max-lg:w-full py-2 rounded-lg mt-4 "
                            onClick={() => setShowModal(true)}
                        >
                            Adicionar Matéria
                        </button>
                    </section>
                    <section className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 3xl:grid-cols-4 gap-x-8 gap-y-16 w-4/5 justify-center mx-auto mt-8 ">
                        {materias.length > 0 ? (
                            materias.map((materia, index) => (
                                <div key={index} className="relative">
                                    <Link to={`/dashboard/postagens/${materia.nome.toLowerCase().replace(' ', '')}`}>
                                        <SubjectCard
                                            banner={bannerMateria}
                                            nome={materia.nome} 
                                            atividades={materia.atividades}
                                            subject={materia}
                                        />
                                    </Link>
                                    <div className="absolute top-2 right-2 p-2 rounded-full focus:outline-none z-50">
                                        <button
                                            onClick={() => setMenuVisible(menuVisible === index ? null : index)}
                                            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800"
                                            style={{ color: '#000' }}
                                        >
                                            &#x22EE;
                                        </button>
                                        {menuVisible === index && (
                                            <div className="absolute top-10 right-2 w-24 bg-white border border-gray-200 dark:border-zinc-600 rounded-lg shadow-lg z-50">
                                                <button
                                                    onClick={() => handleEditMateria(index)}
                                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-zinc-900 dark:text-zinc-100"
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteMateria(index, materia.id)}
                                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-zinc-100 dark:hover:bg-zinc-900"
                                                >
                                                    Excluir
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-4 text-center text-gray-500 dark:text-zinc-200">
                                Nenhuma matéria criada.
                            </p>
                        )}
                    </section>
                </main>
            </div>


            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
                    onClick={() => setShowModal(false)} >

                    <div
                        className="bg-white 2xl:w-1/2 py-8 lg:w-4/6 w-full lg:px-16 px-4 rounded-lg shadow-lg lg:text-left dark:bg-zinc-800 max-lg:mx-8 max-md:mx-4"
                        onClick={(e) => e.stopPropagation()}  >

                        <h2 className="text-lg mb-6 dark:text-white">Adicionar Nova Matéria</h2>
                        <form onSubmit={handleAddMateria}>
                            <input
                                type="text"
                                value={newMateria}
                                onChange={(e) => setNewMateria(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100 "
                                placeholder="Nome da matéria"
                            //    required
                            />
                            <button
                                type="submit"
                                className="bg-purplePrimary dark:bg-purpleDark text-white py-1.5 px-8 rounded-lg tracking-wide dark:text-zinc-200"
                            >
                                Adicionar
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {showEditModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50  max-lg:px-4"
                    onClick={() => setShowEditModal(false)} >
                    <div
                        className="bg-white py-8 lg:w-1/3 md:w-1/2 w-full lg:px-16 px-0 rounded-lg shadow-lg lg:text-left max-lg:px-4"
                        onClick={(e) => e.stopPropagation()}  >
                        <h2 className="text-lg mb-6 dark:text-white">Editar Matéria</h2>
                        <input
                            type="text"
                            value={editNome}
                            onChange={(e) => setEditNome(e.target.value)}
                            className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                            placeholder="Nome da matéria"
                        />
                        <div className="flex ">
                            <button
                                onClick={handleSaveEdit}
                                className="bg-purplePrimary text-white py-1.5 px-8 rounded-lg tracking-wide mr-2 dark:text-zinc-200 dark:bg-purpleDark" >
                                Salvar
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
