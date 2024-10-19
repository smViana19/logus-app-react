import React from 'react';
import { useSelector } from 'react-redux';

const CardBlog = () => {
  return (
    <div>
      <div className="flex flex-col dark:bg-zinc-700 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:text-zinc-100">
        <span className="text-xs dark:text-zinc-400 dark:text-zinc-100">
          Data postagem: 28/10/2024
        </span>

        <div>
          <img
            src="https://source.unsplash.com/random/100x100/?5"
            alt=""
            className="object-cover w-full mb-4 h-32 sm:h-64 "
          />
          <h2 className="mb-1 text-xl font-semibold">
            Título
          </h2>
          <p className="text-sm dark:text-zinc-400">
            Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum
            pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud
            atqui apeirian...
          </p>
        </div>

      </div>
    </div>
  );
};

export default CardBlog;
