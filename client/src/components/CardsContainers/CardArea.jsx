import React from 'react';

export default function CardArea({ area, colorProps, colorText }) {
  return (
    <div className={`border-2 border-violet-700 bg-${colorProps} w-full text-center rounded-lg h-24 flex items-center justify-center text-${colorText} text-xl font-semibold hover:scale-102 transition-transform duration-700 transform-gpu cursor-pointer`}>
        {area}
    </div>
  );
}
