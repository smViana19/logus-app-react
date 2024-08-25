import React from 'react';

const BtnMateriasFilter = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
        >
            {text}
        </button>
    );
};

export default BtnMateriasFilter;
