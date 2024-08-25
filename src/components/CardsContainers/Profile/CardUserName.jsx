import React from 'react';
import BtnProfile from '../../Buttons/ProfileButton.jsx';

const CardUserName = () => {
    return (
        <div className="flex gap-28 items-center">
            <span className="text-xl">user_name</span>
            <span className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-200'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="14"
                    viewBox="0 0 128 512"
                >
                    <path
                        fill="#4b6aa0"
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                    />
                </svg>
            </span>
        </div>
    );
};

export default CardUserName;
