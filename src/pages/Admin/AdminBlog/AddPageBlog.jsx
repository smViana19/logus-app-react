import React, { useState } from 'react';

const AddPageBlog = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:text-white">
      <h1 className="text-lg font-semibold">Criar Nova Página</h1>
      <div className="flex flex-col my-8">
        <label htmlFor="">Título</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id=""
          name=""
          className="border border-gray-200 py-1 px-2 rounded mt-2 outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Conteúdo</label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-200 py-1 px-2 rounded mt-2 h-80 outline-none"
          name=""
          id=""
        ></textarea>
      </div>

      <button
        className="bg-purplePrimary px-32 mt-8 text-white py-2 rounded"
        type="submit"
      >
        Criar
      </button>
    </div>
  );
};

export default AddPageBlog;
