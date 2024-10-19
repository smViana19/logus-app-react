// SubjectCard.js

import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { selectSubject } from '@/store/modules/subject/action.js';

const SubjectCard = ({ banner, nome, atividades, subject }) => {
  const caminho = `/dashboard/postagens/${nome
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s/g, '')}`;

  const dispatch = useDispatch();

  const handleSelectSubject = () => {
    dispatch(selectSubject(subject.id));
  };

  return (
      
      <Link to={caminho} onClick={handleSelectSubject}>
        <div className="bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-800 rounded-md hover:scale-102 transition-transform duration-500 cursor-pointer p-4 flex items-center gap-6">
        <span className='bg-zinc-100 dark:bg-zinc-800 rounded-full p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="18.25" viewBox="0 0 448 512"><path className='fill-purplePrimary' d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
        </span>
          <div>
              <span className="text-xl font-semibold text-purplePrimary upper dark:text-white">
                {nome}
              </span>
              <ul className="mt-2 pb-2">
                <li className="mt-2 dark:text-zinc-100">Pendentes:</li>
                {atividades &&
                Array.isArray(atividades) &&
                atividades.length > 0 ? (
                  atividades.map((atividade, index) => (
                    <li key={index} className="flex justify-between text-sm pb-2">
                      {atividade.nome}{' '}
                      <span className="text-sm text-zinc-600 dark:text-zinc-300">{atividade.data}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-sm dark:text-zinc-300 text-zinc-600">
                    Nenhuma atividade pendente.
                  </li>
                )}
              </ul>
          </div>
        </div>
      </Link>
    
  );
};

export default SubjectCard;
