import React, { useState, useContext, useEffect } from 'react';
import { AtividadeContext } from '../../context/AtividadeContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const Modal = ({ showModal, setShowModal, handleAddAtividade }) => {
    const mySwal = withReactContent(Swal);
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
        atividades,
        setAtividades,
    } = useContext(AtividadeContext);
    const subjectId = useSelector(state => state.subject.selectedSubjectId);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (showModal) {
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 16);
            setDataPostagem(formattedDate);
        }
    }, [showModal, setDataPostagem]);

    const handleAddAtividadeLocal = async () => {

        if (nome.length === 0 || categoria.length === 0) {
            mySwal.fire({
                title: 'Alerta',
                text: 'Preencha os campos.',
                icon: 'warning'
            })
            return;
        }
        if (nome.length < 4) {
            mySwal.fire({
                title: 'Alerta',
                text: 'Nome precisa ter mais de 4 caracteres',
                icon: 'warning'
            })
            return;
        }
        const dataEntregaCompleta = semDataEntrega ? null : `${dataEntrega}T${horaEntrega}`;
        const newAtividadeData = {
            subject_id: subjectId,
            nome,
            categoria,
            pontos,
            detalhes: detail,
            data_entrega: dataEntregaCompleta,
        };

        try {
            await handleAddAtividade(newAtividadeData);
            mySwal.fire({
                title: 'Sucesso',
                text: 'Atividade criada com sucesso.',
                icon: 'success'
            })
            setShowModal(false)
        } catch (err) {
            console.log("Erro modal: ", err)
        }
    }

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
                        className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50"
                        onClick={(e) => {
                            if (e.target.id === 'modal-background') setShowModal(false);
                        }}
                    >
                        <div
                            className="bg-white py-8 xl:w-3/5 px-16 rounded-md shadow-lg dark:bg-zinc-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-xl mb-8 font-medium dark:text-zinc-100">Criar Material</h2>
                            <div>
                                <label className="dark:text-zinc-100" htmlFor="">Nome </label>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className="border border-zinc-300 p-2 mb-4 w-full rounded-md outline-none mt-1 dark:bg-zinc-700 dark:placeholder-zinc-400 dark:text-zinc-100"
                                    placeholder="Nome do material"
                                />
                            </div>

                            <div className="flex gap-8">
                                <div className="w-2/3">
                                    <label className="dark:text-zinc-100" htmlFor="">Categoria</label>
                                    <select
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                       className="border border-zinc-300 p-2 mb-4 w-full rounded-md outline-none mt-1 dark:bg-zinc-700 dark:text-zinc-100"
                                    >
                                        <option value="" disabled>
                                            Selecione a Categoria
                                        </option>
                                        <option value="Atividade">Atividade</option>
                                        <option value="Resumos">Resumo</option>
                                        <option value="Apresentação">Apresentação</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="dark:text-zinc-100" htmlFor="">Pontuação </label>
                                    <input
                                        value={pontos}
                                        onChange={(e) => setPontos(e.target.value)}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        className="border border-zinc-300 p-2 mb-4 w-full rounded-md outline-none mt-1 dark:bg-zinc-700 dark:text-zinc-100"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="dark:text-zinc-100" htmlFor="">Descrição</label>
                                <textarea
                                    placeholder=""
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="w-full border border-zinc-300 rounded-md h-48 px-4 py-2 outline-none mt-1 dark:bg-zinc-700 dark:text-zinc-100"
                                ></textarea>
                            </div>

                            <div className="flex gap-8 mt-4 mb-6">
                                <input
                                    onChange={(e) => setFile(e.target.files[0])}
                                    type="file"
                                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm
                                     file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 dark:text-zinc-400 dark:file:bg-zinc-700 dark:file:text-purple-600"
                                />
                            </div>

                            <div>
                                <label>
                                    <input
                                        type="checkbox"
                                        id="semDataEntrega"
                                        checked={semDataEntrega}
                                        onChange={(e) => setSemDataEntrega(e.target.checked)}
                                    />
                                    <span className="ml-2 dark:text-zinc-100">Não tem data de entrega</span>
                                </label>
                            </div>

                            {!semDataEntrega && (
                                <div className="flex gap-8 mt-4">
                                    <input
                                        type="date"
                                        value={dataEntrega}
                                        onChange={(e) => setDataEntrega(e.target.value)}
                                        className="border border-zinc-300 p-2 mb-4 w-full rounded-md outline-none dark:bg-zinc-700 dark:text-zinc-100"
                                    />
                                    <input
                                        type="time"
                                        value={horaEntrega}
                                        onChange={(e) => setHoraEntrega(e.target.value)}
                                        onFocus={handleHoraFocus}
                                        onBlur={handleHoraBlur}
                                        className="border border-zinc-300 p-2 mb-4 w-full rounded-md outline-none dark:bg-zinc-700 dark:text-zinc-100"
                                    />
                                </div>
                            )}

                            <div className="flex justify-end mt-6">
                                <button
                                    onClick={handleAddAtividadeLocal}
                                    className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700"
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
