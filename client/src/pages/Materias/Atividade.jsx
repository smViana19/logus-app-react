import React from 'react';
import { useParams } from 'react-router-dom';

const DetalhesAtividade = () => {
    const { id } = useParams();

    // Aqui você pode buscar os detalhes da atividade usando o ID
    // Por exemplo, você pode usar um estado local para armazenar os detalhes da atividade
    // e uma função para buscar os detalhes a partir de uma API ou de um armazenamento local

    return (
        <div>
            <h1>Detalhes da Atividade</h1>
            <p>ID da Atividade: {id}</p>
            {/* Renderizar outros detalhes da atividade aqui */}
        </div>
    );
};

export default DetalhesAtividade;
