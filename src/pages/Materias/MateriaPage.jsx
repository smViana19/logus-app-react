import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import NavLink from '../../components/Navs/NavLink';
import Navbar from '@/components/Navs/NavBar.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import LogoutButton from '../../components/Buttons/LogoutButton.jsx';
import SubjectFiltersButton from '../../components/Buttons/SubjectFiltersButton.jsx';
import TaskCard from '../../components/CardsContainers/TaskCard.jsx';
import { AtividadeProvider } from '../../context/AtividadeContext';
import Modal from '../../components/Modal/ModalCriarAtv';
import MenuMobile from '../../components/Navs/MenuMobile';
import axios from '../../../services/axios';
import { get } from 'lodash';
import { toast, ToastContainer } from 'react-toastify';


const MateriaPage = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const token = useSelector((state) => state.auth.token);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const { nomeMateria } = useParams();
    const [atividades, setAtividades] = useState([]);
    const [newAtividade, setNewAtividade] = useState('');
    const [newPontos, setNewPontos] = useState('');
    const [newCategoria, setNewCategoria] = useState('');
    const [newDetalhes, setNewDetalhes] = useState('');
    const [newDataEntrega, setNewDataEntrega] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [filterStatus, setFilterStatus] = useState('all');


    const subjectId = useSelector(state => state.subject.selectedSubjectId);
    console.log(`id materia: ${subjectId}`)


    useEffect(() => {
        async function fetchAtividades() {
            try {
                const response = await axios.get(`http://localhost:3000/materias/material/${subjectId}`);
                console.log('Dados retornados:', response.data);
                setAtividades(response.data);
            } catch (err) {
                toast.error('Erro ao carregar atividades');
            }
        }

        fetchAtividades(subjectId);
    }, [token]);



    async function handleAddAtividade() {

        if (newAtividade.trim() === '') {
            toast.error('Por favor, preencha o nome da atividade.');
            console.log('funciona');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/materias/material/', {
                nome: newAtividade,
                pontos: newPontos,
                categoria: newCategoria,
                detalhes: newDetalhes,
                data_entrega: newDataEntrega,
            });
            console.log('Dados retornados:', response.data);


            const createdAtividade = response.data;
            setAtividades([...atividades, createdAtividade]);
            setNewAtividade('');
            setNewPontos('');
            setNewCategoria('');
            setNewDetalhes('');
            setNewDataEntrega('');
            setShowModal(false);
            toast.success('Atividade adicionada com sucesso!');
        } catch (err) {
            const errors = get(err, 'response.data.errors', []);
            errors.forEach(error => toast.error(error));
        }
    }

    const handleDeleteAtividade = async (index, id) => {
        try {
            await axios.delete(`http://localhost:3000/materias/material/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setAtividades((prevAtividades) => prevAtividades.filter((_, i) => i !== index));
            console.log('Dados retornados:', response.data);
            toast.success('Atividade excluída com sucesso!');
        } catch (err) {
            toast.error('Erro ao excluir Atividade.');
        }
    };


    const filteredAtividades = filterStatus === 'all'
        ? atividades
        : atividades.filter((atividade) => {
            console.log('Filtering atividade:', atividade);
            return atividade.categoria.toLowerCase() === filterStatus.toLowerCase();
        });
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verificar o tema armazenado no localStorage ao carregar a página
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const handleThemeChange = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };


    return (
        <AtividadeProvider>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-white border-b border-gray-100">
                    <MenuMobile />
                    <Navbar handleThemeChange={handleThemeChange} isDarkMode={isDarkMode} />
                </nav>

                <main className="md:px-16 lg:px-32 xl:px-64 py-16">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 bg-purple-600 h-full flex items-end rounded-xl">
                            <h1 className="text-white text-3xl p-2 md:p-6 first-letter:uppercase">
                                {nomeMateria}
                            </h1>
                        </div>
                        <div className="col-span-1 grid grid-rows-4 gap-4">
                            <SubjectFiltersButton text={'Resumos'} onClick={() => handleFilterChange('resumo')} />
                            <SubjectFiltersButton text={'Apresentações'}
                                onClick={() => handleFilterChange('apresentação')} />
                            <SubjectFiltersButton text={'Atividades'} onClick={() => handleFilterChange('atividade')} />
                            <SubjectFiltersButton text={'Todas'} onClick={() => handleFilterChange('all')} />
                        </div>
                    </div>

                    <div className="flex items-center gap-8 mt-16">
                        <span className="font-medium text-xl text-gray-600 tracking-wide">Todas: </span>
                        <hr className="border-gray-300 h-1 w-full" />
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="px-3 bg-purplePrimary text-white tracking-wide py-1 text-3xl rounded-full"
                            onClick={() => setShowModal(true)}
                        >
                            +
                        </button>
                    </div>

                    <div className="gap-y- flex flex-col mt-8">
                        {filteredAtividades.length > 0 ? (
                            filteredAtividades.map((atividade, index) => (
                                <TaskCard
                                    key={index}
                                    nome={atividade.nome}
                                    categoria={atividade.categoria}
                                    dataPostagem={atividade.dataHoraClique}
                                    dataEntrega={atividade.dataEntrega}
                                    pontos={atividade.pontos}
                                    file={atividade.file}
                                    detail={atividade.detail}
                                    onDelete={() => handleDeleteAtividade(index, atividade.id)}
                                    onEdit={(updatedAtividade) => handleEdit(index, updatedAtividade)}
                                    material={atividade}
                                />
                            ))
                        ) : (
                            <p className="col-span-3 text-center text-gray-500">
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

export default MateriaPage;