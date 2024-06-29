import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardMateria = ({ nome, banner, atividades }) => {
    return (
        <Link to={`/dashboard/postagens/${nome.toLowerCase().replace(/\s+/g, '')}`} className="block rounded-lg shadow-lg overflow-hidden">
            <img src={banner} alt={nome} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{nome}</h3>
                <ul className="divide-y divide-gray-200">
                    {atividades.map((atividade, index) => (
                        <li key={index} className="py-2">
                            <p className="text-sm text-gray-600">{atividade.nome}</p>
                            <p className="text-xs text-gray-400">{atividade.data}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    );
};

CardMateria.propTypes = {
    nome: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    atividades: PropTypes.arrayOf(PropTypes.shape({
        nome: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired
    })).isRequired
};

export default CardMateria;
