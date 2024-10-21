import React from 'react';
import BtnProfile from '../../Buttons/ProfileButton.jsx';

const SubCard = () => {
    return (
        <div className="bg-zinc-50 rounded-md dark:border-zinc-800 shadow-md shadow-zinc-100 border border-zinc-100 flex items-center gap-4 px-8 py-2 dark:bg-zinc-800 dark:shadow-zinc-800">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path className='dark:fill-white' d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
            <div className='flex flex-col'>
                <span className='font-semibold text-xl'>80 / 100</span>
                <span className='text-zinc-400 text-sm mt-1'>Atividades Entregues</span>
            </div>
        </div>
    );
};

export default SubCard;
