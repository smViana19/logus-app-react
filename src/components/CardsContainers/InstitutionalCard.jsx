import React from 'react';
import { useNavigate } from 'react-router-dom';

const InstitutionalCard = ({ info }) => {
    const navigate = useNavigate();

    return (
        <div className='p-6 bg-white rounded-xl shadow-lg space-y-4 cursor-pointer hover:bg-gray-100 transition-all'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-gray-600 dark:text-gray-100'>Lorem, ipsum.</h1>
                    <span className="font-semibold text-2xl">Lorem ipsum dolor sit amet.</span>
                </div>
                <span className='bg-[#EDDDFF] p-3 rounded-lg'>
                    meu pau
                </span>
            </div>
            <p className='text-sm text-gray-500 '>Lorem ipsum dolor sit amet.</p>
        </div>
    );
}

export default InstitutionalCard;
