import React, { useState, useContext, useEffect } from 'react';
import { AtividadeContext } from '../../context/AtividadeContext';
import { ThemeProvider } from 'styled-components'; 

const Modal = ({ showModal, setShowModal, handleAddAtividade }) => {
    const {
        nome,
        setNome,
        categoria,
        setCategoria,
        dataEntrega,
        setDataEntrega,
        horaEntrega,
        setHoraEntrega,
        pontos,
        setPontos,
        dataPostagem,
        setDataPostagem,
        semDataEntrega,
        setSemDataEntrega,
        detail,
        setDetail,
        file,
        setFile,
    } = useContext(AtividadeContext);

    const handleSubmit = () => {
        if (nome === '') {
            alert('Digite o nome do material');
            return;
        }
        if (categoria === '') {
            alert('Selecione uma categoria');
            return;
        }
        if (!semDataEntrega && (dataEntrega === '' || horaEntrega === '')) {
            alert('Data ou hora de entrega inválida');
            return;
        }

        const dataHoraClique = new Date().toISOString();
        const dataEntregaCompleta = semDataEntrega
            ? null
            : `${dataEntrega}T${horaEntrega}`;

        handleAddAtividade({
            nome,
            categoria,
            dataEntrega: dataEntregaCompleta,
            pontos, 
            dataHoraClique,
            detail,
            file, 
        });

        setNome('');
        setCategoria('');
        setDataEntrega('');
        setHoraEntrega('23:59');
        setPontos('0');
        setSemDataEntrega(false);
        setDetail('');
        setFile(null);
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 16); 
            setDataPostagem(formattedDate);
        }
    }, [showModal, setDataPostagem]);

    const handleFocus = () => {
        if (pontos === '0') {
            setPontos('');
        }
    };

    const handleBlur = () => {
        if (pontos === '') {
            setPontos('0');
        }
    };

    const handleHoraFocus = () => {
        if (horaEntrega === '23:59') {
            setHoraEntrega('');
        }
    };

    const handleHoraBlur = () => {
        if (horaEntrega === '') {
            setHoraEntrega('23:59');
        }
    };

    return (
        <ThemeProvider theme={{}}>
            <>
                {showModal && (
                    <div
                        id="modal-background"
                        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
                        onClick={(e) => {
                            if (e.target.id === 'modal-background')
                                setShowModal(false);
                        }}
                    >
                        <div
                            className="bg-white py-8 xl:w-3/5 px-16 rounded-lg shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-xl mb-8 font-medium">Criar Material</h2>
                            <div >
                                <label htmlFor="">Nome </label>
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
                                        <option value="" disabled>
                                            Selecione a Categoria
                                        </option>
                                        <option value="Atividade">Atividade</option>
                                        <option value="Resumo">Resumo</option>
                                        <option value="Apresentação">
                                            Apresentação
                                        </option>
                                        <option value="Outros">Outros</option>
                                    </select>
                            </div>

                                <div>
                                    <label htmlFor="">Pontuação </label>
                                    <input
                                        value={pontos}
                                        onChange={(e) => setPontos(e.target.value)}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none mt-1" type="text" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="">Descrição</label>
                                <textarea
                                    placeholder=""
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg h-48 px-4 py-2 outline-none mt-1"
                                ></textarea>
                            </div>

                            <div className="flex gap-8 mt-4 mb-6">
                                <input
                                    onChange={(e) => setFile(e.target.files[0])}
                                    type="file"
                                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                />
                            </div>

                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        id="semDataEntrega"
                                        checked={semDataEntrega}
                                        onChange={(e) =>
                                            setSemDataEntrega(e.target.checked)
                                        }
                                    />
                                    <span className="ml-2">
                                        Não tem data de entrega
                                    </span>
                                </label>
                            </div>

                            {!semDataEntrega && (
                                <div className="flex gap-8 mt-4">
                                    <input
                                        type="date"
                                        value={dataEntrega}
                                        onChange={(e) =>
                                            setDataEntrega(e.target.value)
                                        }
                                        className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                    />
                                    <input
                                        type="time"
                                        value={horaEntrega}
                                        onChange={(e) =>
                                            setHoraEntrega(e.target.value)
                                        }
                                        onFocus={handleHoraFocus}
                                        onBlur={handleHoraBlur}
                                        className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                    />
                                </div>
                            )}

                            <div className="flex justify-end mt-6">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700"
                                >
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </>
        </ThemeProvider>
    );
};

export default Modal;
