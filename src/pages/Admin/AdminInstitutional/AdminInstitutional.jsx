import React, { useState } from 'react';
import InfoCard from '../../../components/CardsContainers/InfoCard';
import InstitutionalCard from '../../../components/CardsContainers/InstitutionalCard';
import AdminInstitutionalModal from '../../../components/Modal/AdminInsitutionalModal/AdminInstitutionalModal';
import { useNavigate } from 'react-router-dom';

const AdminInstitutional = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }


    const info = [
        { title: "Postagens", description: "Crie e gerencie as postagens da instituição", path: '/admin/institucional/postagens' },
        { title: "Turmas", description: "Crie e gerencie suas turmas", path: '/admin/institucional/series' },
    ]

    return (
        <div className='p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300'>
            <h1 className='text-xl font-semibold'>Gerenciamento institucional</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8'>
                {info &&
                    info.map((project, index) => (
                        <InfoCard key={index} info={project} onClick={() => navigate(project.path)} />
                    ))}
            </div>

           
        </div>
    );
}

export default AdminInstitutional;
