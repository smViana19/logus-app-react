import React from 'react';

export default function UsuarioCard({ role, user }) {
    return (
        <div className="bg-white dark:bg-zinc-900  dark:shadow-zinc-900  rounded-xl xl:mx-16 mt-0 mb-8 md:p-8 py-8 lg:flex lg:justify-between shadow-sm shadow-gray-100 ">
            <div className="mb-12 lg:mb-0 px-8">
                <div className="flex gap-16 mb-8 items-center">
                    <h1 className="font-bold text-3xl text-black dark:text-white">
                        Olá, {user}
                    </h1>
                    <span className="px-4 py-1 bg-[#B4ADEA] dark:bg-[#6D4C9D] text-purple-700 dark:text-purple-300 rounded-md cursor-pointer uppercase">
                        {role}
                    </span>
                </div>
                <div className="mb-2 lg:flex lg:items-center gap-2">
                    <img src="" alt=""/>
                    <span className="text-black dark:text-white">
                        COTEMIG - Colégio e Faculdade
                    </span>
                </div>
                <div>
                    <span className="text-black dark:text-white">
                        3º Ano do Ensino Médio
                    </span>
                </div>
            </div>

            <div className="flex justify-center text-center gap-4 sm:gap-8  md:gap-16">
                <div>
                    <p className="text-lg mb-14 sm:mb-8 text-black dark:text-white">Entregues</p>
                    <h3 className="font-semibold text-2xl text-black dark:text-white">24</h3>
                </div>
                <div>
                    <p className="text-lg mb-8 text-black dark:text-white">Não Entregues</p>
                    <h3 className="font-semibold text-2xl text-black dark:text-white">24</h3>
                </div>
                <div>
                    <p className="text-lg mb-8 text-black dark:text-white">Média de Notas</p>
                    <h3 className="font-semibold text-2xl text-black dark:text-white">97.2</h3>
                </div>
            </div>
        </div>
    );
}
