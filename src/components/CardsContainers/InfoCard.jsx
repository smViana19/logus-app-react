import React from 'react';

const InfoCard = ({ info, onClick }) => {
  return (
    <div
      className="p-6 bg-white rounded-xl shadow-lg space-y-4 dark:bg-gray-800 cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-600 dark:text-gray-100">{info.title}</h1>
          <span className="font-semibold text-2xl">{info.total}</span>
        </div>

        <span className="bg-[#EDDDFF] p-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="21.5"
            viewBox="0 0 640 512"
          >
            <path
              className="fill-purplePrimary"
              d={info.svg}
            />

          </svg>
        </span>
      </div>


      <p className="text-sm text-gray-500 dark:text-gray-400">
        {info.description}
      </p>
      
    </div>
  );
};

export default InfoCard;
