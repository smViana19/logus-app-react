import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios'; // Importar o Axios
import { useSelector } from 'react-redux';


const Atividade = () => {
    const { nomeAtiv } = useParams();
    const location = useLocation();
    const { categoria, data_entrega, pontos, detail } = location.state || {};

    const materialId = useSelector(state => state.material.selectedMaterialId);
    console.log(`id atividade: ${materialId}`)


    const [data, setData] = useState({
        categoria: '',
        dataEntrega: '',
        pontos: '',
        detail: '',
        file: null
    });

    const dataEntregaFormatada = data.dataEntrega ?
        new Date(data.dataEntrega).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }) : "Sem data de entrega";

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setData(prevData => ({
            ...prevData,
            file
        }));
    };

    // Função para enviar a entrega
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        if (!data.file) {
            alert('Por favor, selecione um arquivo para enviar.');
            return;
        }

        const formData = new FormData();
        formData.append('file', data.file);
        formData.append('data_entrega', new Date().toISOString());
        formData.append('subject_material_id', materialId); 
        formData.append('user_id', 1); 

        try {
            await axios.post('/api/submit-activity', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Arquivo enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error);
            alert('Erro ao enviar o arquivo. Tente novamente.');
        }
    };

    return (
        <div className='w-3/4 mx-auto mt-32'>
            <div className='flex justify-between mb-2'>
                <h2 className='text-2xl font-semibold'>{nomeAtiv}</h2>
                <span className='rounded-md px-4 py-1 font-medium tracking-wide text-sm text-purplePrimary bg-[#EDDDFF]'>{data.categoria}</span>
            </div>
            <span className='text-sm uppercase text-gray-400'></span>

            <div className='mt-8 flex justify-between'>
                <span>{data.pontos} pontos</span>
                <span>Data de Entrega: {dataEntregaFormatada}</span>
            </div>

            <div className='mt-32'>
                {data.detail}
            </div>

            <form onSubmit={handleSubmit}>
                <div className='mt-8'>
                    <label className='block mb-2 text-sm font-medium text-gray-700'>Anexar arquivo:</label>
                    <input
                        type='file'
                        onChange={handleFileChange}
                        className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purplePrimary file:text-white hover:file:bg-purple-700'
                    />
                    {data.file && (
                        <p className='mt-2 text-sm text-gray-500'>Arquivo selecionado: {data.file.name}</p>
                    )}
                </div>
                <button
                    type='submit'
                    className='mt-8 px-4 py-2 bg-purplePrimary text-white rounded'
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Atividade;