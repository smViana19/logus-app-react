import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavLink from '../components/Navs/NavLink';
import Logo from '../components/outros/Logo';
import LogoutButton from '../components/Botoes/LogoutBtn';
import CardMateria from '../components/CardsContainers/CardMateria';
import bannerMateria from '../assets/Banners/bannerMaterias.jpg';

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

    useEffect(() => {
        const savedMaterias = JSON.parse(localStorage.getItem('materias'));
        if (savedMaterias) {
            setMaterias(savedMaterias);
        }
    }, []);

    const handleAddMateria = () => {
        const updatedMaterias = [
            ...materias,
            {
                nome: newMateria,
                banner: bannerMateria,
                atividades: [
                    { nome: 'Atividade de Geografia Analítica', data: '04/06' },
                    { nome: 'Atividade de Geografia Analítica', data: '12/06' },
                ],
            },
        ];
        setMaterias(updatedMaterias);
        localStorage.setItem('materias', JSON.stringify(updatedMaterias));
        setNewMateria('');
        setShowModal(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddMateria();
        }
    };

    const handleDeleteMateria = (index) => {
        const updatedMaterias = materias.filter((_, i) => i !== index);
        setMaterias(updatedMaterias);
        localStorage.setItem('materias', JSON.stringify(updatedMaterias));
    };

    const handleEditMateria = (index) => {
        setEditingIndex(index);
        setEditNome(materias[index].nome);
        setShowEditModal(true);
    };

    const handleSaveEdit = () => {
        const updatedMaterias = [...materias];
        updatedMaterias[editingIndex] = {
            ...updatedMaterias[editingIndex],
            nome: editNome,
        };
        setMaterias(updatedMaterias);
        localStorage.setItem('materias', JSON.stringify(updatedMaterias));
        setEditingIndex(null);
        setShowEditModal(false);
    };

    const handleCancelEdit = () => {
        setEditingIndex(null);
        setEditNome('');
        setShowEditModal(false);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link to="/">
                                        <Logo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex relative">
                                    <NavLink
                                        to="/dashboard"
                                        className="text-gray-800"
                                    >
                                        Dashboard
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/postagens"
                                        className="text-purplePrimary"
                                        onMouseEnter={() =>
                                            setDropdownVisible(true)
                                        }
                                        onMouseLeave={() =>
                                            setDropdownVisible(false)
                                        }
                                    >
                                        Área de Postagens
                                    </NavLink>
                                    {dropdownVisible && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                            <Link
                                                to="/dashboard/postagens/resumo"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Resumo
                                            </Link>
                                            <Link
                                                to="/dashboard/postagens/slide"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Slide
                                            </Link>
                                            <Link
                                                to="/dashboard/postagens/atividade"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Atividade
                                            </Link>
                                        </div>
                                    )}
                                    <NavLink
                                        to="/dashboard/agenda"
                                        className="text-gray-800"
                                    >
                                        Agenda
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/pomodoro"
                                        className="text-gray-800"
                                    >
                                        Método Pomodoro
                                    </NavLink>
                                    <LogoutButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <main>
                    <section className="w-4/5 m-auto">
                        <button
                            className="border border-gray-300 w-1/4 py-2 rounded-lg mt-4"
                            onClick={() => setShowModal(true)}
                        >
                            Adicionar Matéria
                        </button>
                    </section>
                    <section className="grid grid-cols-4 gap-x-8 gap-y-16 w-4/5 justify-center mx-auto mt-8">
                        {materias.length > 0 ? (
                            materias.map((materia, index) => (
                                <div key={index} className="relative">
                                    <Link
                                        to={`/dashboard/postagens/${materia.nome.toLowerCase().replace(' ', '')}`}
                                    >
                                        <CardMateria {...materia} />
                                    </Link>
                                    <div className="absolute top-2 right-2 p-2 rounded-full focus:outline-none z-50">
                                        <button
                                            onClick={() =>
                                                setMenuVisible(
                                                    menuVisible === index
                                                        ? null
                                                        : index
                                                )
                                            }
                                            className="p-2 rounded-full bg-gray-200"
                                            style={{ color: '#000' }}
                                        >
                                            &#x22EE;
                                        </button>
                                        {menuVisible === index && (
                                            <div className="absolute top-10 right-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                                <button
                                                     onClick={() => handleEditMateria(index)}
                                                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                     onClick={() => handleDeleteMateria(index)}
                                                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                >
                                                    Excluir
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="col-span-4 text-center text-gray-500">
                                Nenhuma matéria criada.
                            </p>
                        )}
                    </section>
                </main>
            </div>

            /* --------------------------- MODAL ADD TAREFA --------------------------- */
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
                    onClick={() => setShowModal(false)} >

                    <div
                        className="bg-white py-8 w-1/3 px-16 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}  >
                        
                        <h2 className="text-lg mb-6">Adicionar Nova Matéria</h2>
                        <form onSubmit={handleAddMateria}>
                        <input
                            type="text"
                            value={newMateria}
                            onChange={(e) => setNewMateria(e.target.value)}
                            className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                            placeholder="Nome da matéria"
                            required
                        />
                        <button
                            type='submit'
                            className="bg-purplePrimary text-white py-1.5 px-8 rounded-lg tracking-wide" >
                            Adicionar
                        </button>
                        </form>
                    </div>
                </div>
            )}
            /* --------------------------- MODAL EDIT TAREFA --------------------------- */
            {showEditModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
                    onClick={() => setShowEditModal(false)} >
                    <div
                        className="bg-white py-8 w-1/3 px-16 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}  >
                        <h2 className="text-lg mb-6">Editar Matéria</h2>
                        <input
                            type="text"
                            value={editNome}
                            onChange={(e) => setEditNome(e.target.value)}
                            className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                            placeholder="Nome da matéria"
                        />
                        <div className="flex justify-end">
                        <button
                            onClick={handleSaveEdit}
                            className="bg-purplePrimary text-white py-1.5 px-8 rounded-lg tracking-wide mr-2" >
                            Salvar
                        </button>
                       
                    </div>
                </div>
            </div>
            )}  
        </>
    );
}
