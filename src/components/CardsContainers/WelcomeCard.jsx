import React from 'react';
import { FaRegSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const WelcomeCard = ({ user }) => {
    return (
        <div className="p-6 bg-white rounded-xl shadow-lg space-y-4 dark:bg-gray-800">
            <header>
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">
                    Seja bem-vindo novamente, {user}!
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Aqui estão algumas informações úteis para você.
                </p>
            </header>

            <div className="mt-4">
                <p className="text-gray-600">Últimas atualizações: 3 novos alunos cadastrados!</p>
                <p className="text-gray-600">Total de alunos: 250</p>
            </div>

            <footer className="mt-6">
                <p className="text-gray-600 font-semibold">Acesso rápido:</p>
                <ul className="list-disc list-inside ml-5 space-y-2">
                    <li>
                        <Link to="/admin/professores" className="text-purplePrimary hover:underline">
                            Gerenciar Professores
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/alunos" className="text-purplePrimary hover:underline">
                            Gerenciar Alunos
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/relatorios" className="text-purplePrimary hover:underline">
                            Visualizar Relatórios
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default WelcomeCard;
