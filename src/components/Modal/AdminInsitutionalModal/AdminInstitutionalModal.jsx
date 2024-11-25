import React from 'react';
import { FaTimes } from 'react-icons/fa';

const AdminInstitutionalModal = (toggleModal) => {
    return (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                    <h3 className="text-lg font-semibold text-zinc-900 ">
                        Cadastrar novo produto
                    </h3>
                    <button
                        className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    >
                        <FaTimes size={16} />
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label htmlFor="name"
                                className="block mb-2 text-sm font-medium text-zinc-900 ">
                                Nome do produto
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                placeholder="Digite o nome do produto"
                                required
                            />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label htmlFor="price"
                                className="block mb-2 text-sm font-medium text-zinc-900 ">Preço</label>
                            <input
                                type="number" name="price" id="price"
                                className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="R$9.90" required="" />
                        </div>
                        <div className="col-span-3 sm:col-span-1">
                            <label htmlFor="quantity"
                                className="block mb-2 text-sm font-medium text-zinc-900 ">Quantidade</label>
                            <input
                                type="number" name="quantity" id="quantity"
                                className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Digite a quantidade"
                                required="" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="description"
                                className="block mb-2 text-sm font-medium text-zinc-900 ">Descrição</label>
                            <textarea
                                id="description"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="Digite a descrição do produto"></textarea>
                        </div>

                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Adicionar produto
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminInstitutionalModal;
