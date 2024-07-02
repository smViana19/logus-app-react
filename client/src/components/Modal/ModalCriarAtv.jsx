import React, { useState } from 'react';

const Modal = ({ showModal, setShowModal, handleAddAtividade }) => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [dataEntrega, setDataEntrega] = useState('');
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

    const handleSubmit = () => {
        if (!validateInputs()) return;

        const dataHoraClique = new Date().toISOString();

        handleAddAtividade({
            nome,
            categoria,
            dataEntrega,
            pontos: parseInt(pontos),
            dataHoraClique,
        });

        setShowModal(false);

        setNome('');
        setCategoria('');
        setDataEntrega('');
        setPontos('0');
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white py-8 w-1/2 px-16 rounded-lg shadow-lg">
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
                                value={categoria} 
                                onChange={(e) => setCategoria(e.target.value)} 
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
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                placeholder="Pontos"
                            />
                        </div>
                        <div className='flex gap-8 mt-2'>
                            <input
                                type="datetime-local"
                                value={dataEntrega}
                                onChange={(e) => setDataEntrega(e.target.value)}
                                className="border border-gray-300 p-2 mb-4 w-full rounded-lg outline-none"
                                placeholder="Data de entrega"
                            />
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
