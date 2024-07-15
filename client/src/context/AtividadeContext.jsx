// AtividadeProvider.jsx

import React, { createContext, useState } from 'react';

export const AtividadeContext = createContext();

export const AtividadeProvider = ({ children }) => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('Categoria Padrão'); // Valor inicial padrão
    const [dataEntrega, setDataEntrega] = useState(null);
    const [horaEntrega, setHoraEntrega] = useState('23:59');
    const [pontos, setPontos] = useState(0);
    const [dataPostagem, setDataPostagem] = useState(null);
    const [semDataEntrega, setSemDataEntrega] = useState(false);
    const [detail, setDetail] = useState('');
    const [file, setFile] = useState(null);

    const atualizarCategoria = (novaCategoria) => {
        setCategoria(novaCategoria);
    };

    return (
        <AtividadeContext.Provider
            value={{
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
                atualizarCategoria, // Adicionando a função de atualização
            }}
        >
            {children}
        </AtividadeContext.Provider>
    );
};
