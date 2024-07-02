<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 5a1ccee2e34ec427327eadb5b91faaa51e10a233

const Modal = ({ showModal, setShowModal, handleAddAtividade }) => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
    const [horaEntrega, setHoraEntrega] = useState('23:59');
    const [pontos, setPontos] = useState('0');

    const validateInputs = () => {
        if (nome === '') {
            alert('Digite o nome do material');
            return false;
        }
        if (categoria === '') {
            alert('Selecione uma categoria');
            return false;
        }
        if (dataEntrega === '') {
            alert('Data de entrega inválida ou vazia');
            return false;
        }
        if (horaEntrega === '') {
            alert('Hora de entrega inválida ou vazia');
            return false;
        }
        return true;
    };

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

    useEffect(() => {
        if (showModal) {
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 16); // Formata para "yyyy-MM-ddThh:mm"
            setDataPostagem(formattedDate);
        }
    }, [showModal]);

    const handleSubmit = () => {
        if (!validateInputs()) return;

        const dataHoraClique = new Date().toISOString();
        const dataEntregaCompleta = `${dataEntrega}T${horaEntrega}`;

        handleAddAtividade({
            nome,
            categoria,
            dataEntrega: dataEntregaCompleta,
            pontos: parseInt(pontos),
            dataHoraClique,
        });

        setShowModal(false);

        setNome('');
        setCategoria('');
        setDataEntrega('');
        setHoraEntrega('23:59');
        setPontos('0');
    };

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
                    <div className="bg-white py-8 w-1/2 px-16 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg mb-6">Criar Material</h2>
                        <div className='flex gap-8'>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                placeholder="Nome do material"
                            />
                        </div>
                        <div className='flex gap-8'>
                            <select 
<<<<<<< HEAD
                                value={categoria} // Define o valor selecionado
                                onChange={(e) => setCategoria(e.target.value)} // Atualiza o estado 'categoria'
=======
                                value={categoria} 
                                onChange={(e) => setCategoria(e.target.value)} 
>>>>>>> 5a1ccee2e34ec427327eadb5b91faaa51e10a233
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                            >
                                <option value="" disabled>Selecione a Categoria</option>
                                <option value="Atividade">Atividade</option>
                                <option value="Resumo">Resumo</option>
                                <option value="Apresentação">Apresentação</option>
                                <option value="Outros">Outros</option>
                            </select>
                            <input
                                type="number"
                                value={pontos}
                                onChange={(e) => setPontos(e.target.value)}
<<<<<<< HEAD
=======
                                onFocus={handleFocus}
                                onBlur={handleBlur}
>>>>>>> 5a1ccee2e34ec427327eadb5b91faaa51e10a233
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                placeholder="Pontos"
                            />
                        </div>
                        <div className='flex gap-8 mt-2'>
                            <input
<<<<<<< HEAD
                                type="datetime-local"
                                value={dataPostagem}
                                onChange={(e) => setDataPostagem(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                placeholder="Data de postagem"
                                readOnly
                            />
                            <input
                                type="datetime-local"
=======
                                type="date"
>>>>>>> 5a1ccee2e34ec427327eadb5b91faaa51e10a233
                                value={dataEntrega}
                                onChange={(e) => setDataEntrega(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                placeholder="Data de entrega"
                            />
<<<<<<< HEAD
=======
                            <input
                                type="time"
                                value={horaEntrega}
                                onChange={(e) => setHoraEntrega(e.target.value)}
                                onFocus={handleHoraFocus}
                                onBlur={handleHoraBlur}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                placeholder="Hora de entrega"
                            />
>>>>>>> 5a1ccee2e34ec427327eadb5b91faaa51e10a233
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleSubmit}
                                className="bg-purplePrimary text-white py-1.5 px-8 rounded-lg tracking-wide"
                            >
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
