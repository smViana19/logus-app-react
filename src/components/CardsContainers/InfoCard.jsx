import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoCard = ({ info }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(info.path)
  }


  return (
    <div className="p-6 bg-white rounded-xl shadow-lg space-y-4 dark:bg-gray-800">
      <header>
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">
          {info.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {info.description}
        </p>
      </header>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Total: <span className="font-bold">{info.total}</span>
        </p>
      </div>

      <footer>
        <button
          className="w-full p-2 text-center text-white bg-purplePrimary rounded-lg hover:bg-purpleDark"
          onClick={handleNavigate}
        >
          Ver mais
        </button>
      </footer>
    </div>
  );
};

export default InfoCard;