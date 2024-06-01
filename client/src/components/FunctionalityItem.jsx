import React from 'react';

function FunctionalityItem({ name, isActive, onHover }) {
    return (
        <li
            className={`py-2 px-8 flex items-center cursor-pointer ${isActive ? 'border-b-2 border-purple-500' : ''}`}
            onMouseOver={onHover}
        >
           

            {name}
            <svg
                className={`ml-4 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 512 512"
            >
                <path fill="#820ad1" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </li>
    );
}

export default FunctionalityItem;
