import React from 'react';

const CardBlog = () => {
  return (
    <div>
      <div class="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <span class="text-xs dark:text-gray-600">
          Data postagem: 28/10/2024
        </span>

        <div>
          <img
            src="https://source.unsplash.com/random/100x100/?5"
            alt=""
            class="object-cover w-full mb-4 h-32 sm:h-64 dark:bg-gray-500"
          />
          <h2 class="mb-1 text-xl font-semibold">
           Título
          </h2>
          <p class="text-sm dark:text-gray-600">
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
