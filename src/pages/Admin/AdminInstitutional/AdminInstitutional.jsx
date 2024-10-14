import React, { useState } from 'react';
import InfoCard from '../../../components/CardsContainers/InfoCard';
import InstitutionalCard from '../../../components/CardsContainers/InstitutionalCard';
import AdminInstitutionalModal from '../../../components/Modal/AdminInsitutionalModal/AdminInstitutionalModal';

const AdminInstitutional = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }


    const info = [
        { title: "Anos letivos", description: "Crie e gerencie os anos letivos" },
        { title: "Turmas", description: "Crie e gerencie as turmas" },
        { title: "Niveis escolares", description: "Crie e gerencie os niveis escolares" },
        { title: "Series", description: "Crie e gerencie as series" }
    ]

    return (
        <div className='p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300'>
            <h1 className='text-xl font-semibold'>Gerenciamento institucional</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8'>
                {info &&
                    info.map((project, index) => (
                        <InfoCard key={index} info={project} onClick={toggleModal} />
                    ))}
                {isModalOpen && (
                    <AdminInstitutionalModal toggleModal={toggleModal} />
                )}
            </div>
        </div>
    );
}

export default AdminInstitutional;
