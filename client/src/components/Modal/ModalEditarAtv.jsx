import React, { useState, useEffect } from 'react';

const ModalEditarAtv = ({ showModal, setShowModal, atividade, handleEditAtividade }) => {
    const [nome, setNome] = useState(atividade.nome);
    const [categoria, setCategoria] = useState(atividade.categoria);
    const [dataEntrega, setDataEntrega] = useState(atividade.dataEntrega ? atividade.dataEntrega.split('T')[0] : '');
    const [horaEntrega, setHoraEntrega] = useState(atividade.dataEntrega ? atividade.dataEntrega.split('T')[1] : '23:59');
    const [pontos, setPontos] = useState(atividade.pontos);
    const [detail, setDetail] = useState(atividade.detail);
    const [file, setFile] = useState(atividade.file);
    const [semDataEntrega, setSemDataEntrega] = useState(!atividade.dataEntrega);

    const handleSubmit = () => {
        if (nome === '' || categoria === '') {
            alert('Todos os campos são obrigatórios');
            return;
        }

        if (!semDataEntrega && (dataEntrega === '' || horaEntrega === '')) {
            alert('Data ou hora de entrega inválida');
            return;
        }

        const updatedAtividade = {
            ...atividade,
            nome,
            categoria,
            dataEntrega: semDataEntrega ? null : `${dataEntrega}T${horaEntrega}`,
            pontos,
            detail,
            file,
        };

        handleEditAtividade(updatedAtividade);
        setShowModal(false); // Fechar o modal após salvar
    };

    useEffect(() => {
        if (showModal) {
            setNome(atividade.nome);
            setCategoria(atividade.categoria);
            setDataEntrega(atividade.dataEntrega ? atividade.dataEntrega.split('T')[0] : '');
            setHoraEntrega(atividade.dataEntrega ? atividade.dataEntrega.split('T')[1] : '23:59');
            setPontos(atividade.pontos);
            setDetail(atividade.detail);
            setFile(atividade.file);
            setSemDataEntrega(!atividade.dataEntrega);
        }
    }, [showModal, atividade]);

    return (
        <>
            {showModal && (
                <div
                    id="modal-background"
                    className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
                    onClick={(e) => {
                        if (e.target.id === 'modal-background') setShowModal(false);
                    }}
                >
                    <div
                        className="bg-white py-8 xl:w-3/5 px-16 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl mb-8 font-medium">Editar Atividade</h2>
                        <div>
                            <label htmlFor="">Nome</label>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none mt-1"
                                placeholder="Nome do material"
                            />
                        </div>
                        <div className="flex gap-8">
                            <div className='w-2/3'>
                                <label htmlFor="">Categoria</label>
                                <select
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
                                <label htmlFor="">Pontuação</label>
                                <input
                                    type="text"
                                    value={pontos}
                                    onChange={(e) => setPontos(e.target.value)}
                                    className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none mt-1"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Descrição</label>
                            <textarea
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg h-48 px-4 py-2 outline-none mt-1"
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
        </>
    );
};

export default ModalEditarAtv;
