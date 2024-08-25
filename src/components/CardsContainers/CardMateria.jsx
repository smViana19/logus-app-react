// CardMateria.js

import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { selectSubject } from '../../store/modules/subject/action'

const CardMateria = ({ banner, nome, atividades, subject }) => {
    const caminho = `/dashboard/postagens/${nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s/g, '')}`;

        const dispatch = useDispatch();

        const handleSelectSubject = () => {
            dispatch(selectSubject(subject.id))
        }

    

    return (
        <Link to={caminho} onClick={handleSelectSubject}>
            <div className='bg-gray-100 shadow-sm rounded-lg hover:scale-102 transition-transform duration-500 cursor-pointer' >
                <div className='h-16 rounded-t-lg flex items-end py-2 px-4' style={{
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <span className='text-2xl font-semibold text-white px-4'>{nome}</span>
                </div>
                <ul className='px-2 mt-2 pb-2'>
                    <li className='font-semibold mb-2'>Pendentes:</li>
                    {(atividades && Array.isArray(atividades) && atividades.length > 0) ? (
                        atividades.map((atividade, index) => (
                            <li key={index} className='flex justify-between text-sm pb-2'>
                                {atividade.nome} <span className='text-black-600'>{atividade.data}</span>
                            </li>
                        ))
                    ) : (
                        <li className='text-sm text-gray-600'>Nenhuma atividade pendente.</li>
                    )}
                    <li className='flex justify-between text-sm pb-1 mt-2'>
                        <a href='' className='border-b border-gray-300'>Ver mais ...</a>
                    </li>
                </ul>
            </div>
        </Link>
    );
};


export default CardMateria;