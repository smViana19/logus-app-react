import React, { useState } from 'react';
import MenuAdmin from '../../components/Navs/MenuAdmin';
import AdminCard from '../../components/CardsContainers/AdminCard.jsx';

export default function GradeNotas() {
    const [openStage, setOpenStage] = useState(null);
    const [grades, setGrades] = useState({
        1: { Biologia: {}, Química: {}, Física: {}, Matemática: {}, Português: {}, História: {}, Geografia: {} },
        2: { Biologia: {}, Química: {}, Física: {}, Matemática: {}, Português: {}, História: {}, Geografia: {} },
        3: { Biologia: {}, Química: {}, Física: {}, Matemática: {}, Português: {}, História: {}, Geografia: {} },
    });

    const toggleStage = (stage) => {
        setOpenStage(openStage === stage ? null : stage);
    };

    const handleInputChange = (stage, subject, type, value) => {
        setGrades(prevGrades => ({
            ...prevGrades,
            [stage]: {
                ...prevGrades[stage],
                [subject]: {
                    ...prevGrades[stage][subject],
                    [type]: value
                }
            }
        }));
    };

    const renderTable = (stage) => (
        <table className="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="px-4 py-2 bg-gray-200 text-center">Matérias</th>
                    <th className="px-4 py-2 bg-gray-200 text-center">Prova Intermediária</th>
                    <th className="px-4 py-2 bg-gray-200 text-center">Projetos</th>
                    <th className="px-4 py-2 bg-gray-200 text-center">Prova Final</th>
                    <th className="px-4 py-2 bg-gray-200 text-center">Total</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(grades[stage]).map((subject) => (
                    <tr key={subject}>
                        <td className="px-4 py-2 text-center">{subject}</td>
                        <td className="px-4 py-2 text-center">
                            <input
                                type="text"
                                className="w-full text-center"
                                value={grades[stage][subject].intermediate || ''}
                                onChange={(e) => handleInputChange(stage, subject, 'intermediate', e.target.value)}
                            />
                        </td>
                        <td className="px-4 py-2 text-center">
                            <input
                                type="text"
                                className="w-full text-center"
                                value={grades[stage][subject].projects || ''}
                                onChange={(e) => handleInputChange(stage, subject, 'projects', e.target.value)}
                            />
                        </td>
                        <td className="px-4 py-2 text-center">
                            <input
                                type="text"
                                className="w-full text-center"
                                value={grades[stage][subject].final || ''}
                                onChange={(e) => handleInputChange(stage, subject, 'final', e.target.value)}
                            />
                        </td>
                        <td className="px-4 py-2 text-center">
                            {(
                                parseFloat(grades[stage][subject].intermediate || 0) +
                                parseFloat(grades[stage][subject].projects || 0) +
                                parseFloat(grades[stage][subject].final || 0)
                            ).toFixed(2)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderButton = (stage) => (
        <button
            onClick={() => toggleStage(stage)}
            className="font-semibold mt-2 mb-2 text-left bg-white w-32 flex justify-around items-center py-1 rounded-lg border border-gray-100"
        >
            {stage} Etapa
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="8.75"
                viewBox="0 0 320 512"
                className={`transform transition-transform ${openStage === stage ? 'rotate-180' : ''}`}
            >
                <path
                    fill="#cecece"
                    d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                />
            </svg>
        </button>
    );

    return (
        <div className="min-h-screen w-screen bg-gray-50 flex">
            <MenuAdmin
                fillSelectedNotas={'#820ad1'}
                textSelectedNotas={'text-purplePrimary'}
                selectNotas={'bg-[#B4ADEA] border-r-2 border-l-2 border-purplePrimary'}
            />

            <main className="flex-1 p-4">
                <AdminCard />
                <h1 className="font-semibold text-2xl mb-16">Grade de Notas</h1>
                <div>
                    {renderButton(1)}
                    {openStage === 1 && <div className="bg-white mb-4">{renderTable(1)}</div>}

                    {renderButton(2)}
                    {openStage === 2 && <div className="bg-white mb-4">{renderTable(2)}</div>}

                    {renderButton(3)}
                    {openStage === 3 && <div className="bg-white mb-4">{renderTable(3)}</div>}
                </div>
            </main>
        </div>
    );
}
