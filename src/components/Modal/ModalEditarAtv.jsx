import React, { useState, useEffect } from 'react';
import axios from '../../../services/axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import selectedMaterialId from `../CardsContainers/TaskCard`
import { useSelector } from 'react-redux';





const ModalEditarAtv = ({ showModal, setShowModal, atividade, handleEditAtividade, IdAtv }) => {
 console.log(IdAtv)
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
    const [horaEntrega, setHoraEntrega] = useState('23:59');
    const [pontos, setPontos] = useState('');
    const [detail, setDetail] = useState('');
    const [file, setFile] = useState(null);
    const [semDataEntrega, setSemDataEntrega] = useState(false);

    useEffect(() => {
        if (showModal) {
            setNome(atividade.nome);
            setCategoria(atividade.categoria);
            setDataEntrega(atividade.dataEntrega ? atividade.dataEntrega.split('T')[0] : '');
            setHoraEntrega(atividade.dataEntrega ? atividade.dataEntrega.split('T')[1].slice(0, 5) : '23:59');
            setPontos(atividade.pontos);
            setDetail(atividade.detail);
            setFile(null); // Resetar o arquivo quando o modal abre
            setSemDataEntrega(!atividade.dataEntrega);
        }
    }, [showModal, atividade]);

    const handleSubmit = async () => {
        if (!nome || !categoria) {
            toast.error('Nome e categoria são obrigatórios');
            return;
        }
    
        if (!semDataEntrega && (!dataEntrega || !horaEntrega)) {
            toast.error('Data e hora de entrega inválidas');
            return;
        }
    
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('categoria', categoria);
        formData.append('data_entrega', semDataEntrega ? null : `${dataEntrega}T${horaEntrega}`); // Certifique-se de que o nome aqui seja 'data_entrega'
        formData.append('pontos', pontos);
        formData.append('detalhes', detail); // Certifique-se de que o nome aqui seja 'detalhes'
        if (file) formData.append('file', file);
    
        try {
            const response = await axios.put(`/materias/material/${IdAtv}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success('Atividade editada com sucesso!');
            handleEditAtividade(response.data);
            setShowModal(false);
        } catch (error) {
            toast.error('Erro ao editar a atividade');
        }
    };
    

    return (
        <>
            {showModal && (
                <div
                    id="modal-background"
                    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
                    onClick={(e) => e.target.id === 'modal-background' && setShowModal(false)}
                >
                    <div className="bg-white py-8 xl:w-3/5 px-16 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-xl mb-8 font-medium">Editar Atividade</h2>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input
                                id="nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none mt-1"
                                placeholder="Nome da atividade"
                            />
                        </div>
                        <div className="flex gap-8">
                            <div className="w-2/3">
                                <label htmlFor="categoria">Categoria</label>
                                <select
                                    id="categoria"
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none mt-1"
                                >
                                    <option value="" disabled>Selecione a Categoria</option>
                                    <option value="Atividade">Atividade</option>
                                    <option value="Resumo">Resumo</option>
                                    <option value="Apresentação">Apresentação</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="pontos">Pontuação</label>
                                <input
                                    id="pontos"
                                    type="number"
                                    value={pontos}
                                    onChange={(e) => setPontos(e.target.value)}
                                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none mt-1"
                                    placeholder="Pontuação"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <textarea
                                id="descricao"
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg h-48 px-4 py-2 outline-none mt-1"
                                placeholder="Descrição da atividade"
                            ></textarea>
                        </div>
                        <div className="flex gap-8 mt-4 mb-6">
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                            />
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={semDataEntrega}
                                    onChange={(e) => setSemDataEntrega(e.target.checked)}
                                />
                                <span className="ml-2">Não tem data de entrega</span>
                            </label>
                        </div>
                        {!semDataEntrega && (
                            <div className="flex gap-8 mt-4">
                                <input
                                    type="date"
                                    value={dataEntrega}
                                    onChange={(e) => setDataEntrega(e.target.value)}
                                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                />
                                <input
                                    type="time"
                                    value={horaEntrega}
                                    onChange={(e) => setHoraEntrega(e.target.value)}
                                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                />
                            </div>
                        )}
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={handleSubmit}
                                className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
};

export default ModalEditarAtv;
