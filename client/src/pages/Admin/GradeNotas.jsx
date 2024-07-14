import React from 'react'
import MenuAdmin from '../../components/Navs/MenuAdmin'
import AdminCardTop from '../../components/CardsContainers/AdminCardTop'
import ReactDOM from 'react-dom';



export default function GradeNotas() {




    return (
        <div className="min-h-screen w-screen bg-gray-50 flex">
            <MenuAdmin
                fillSelectedNotas={'#820ad1'}
                textSelectedNotas={'text-purplePrimary'}
                selectNotas={'bg-[#B4ADEA] border-r-2 border-l-2 border-purplePrimary'}
            />

            <main className="flex-1 p-4">

                <AdminCardTop />
                <h1 className='font-semibold text-2xl'>Grade de Notas </h1>
                <div>
                    <p>1 Etapa</p>

                    <div className=" h-96 bg-white">
                        <table class="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th class="px-4 py-2 bg-gray-200 text-center">Matérias</th>
                                    <th class="px-4 py-2 bg-gray-200 text-center">Prova Intermediária</th>
                                    <th class="px-4 py-2 bg-gray-200 text-center">Projetos</th>
                                    <th class="px-4 py-2 bg-gray-200 text-center">Prova Final</th>
                                    <th class="px-4 py-2 bg-gray-200 text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="px-4 py-2 text-center">Biologia</td>
                                    <td class="px-4 py-2 text-center">7.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">35.00</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-center">Química</td>
                                    <td class="px-4 py-2 text-center">7.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">35.00</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-center">Física</td>
                                    <td class="px-4 py-2 text-center">7.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">35.00</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-center">Matemática</td>
                                    <td class="px-4 py-2 text-center">7.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">35.00</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-center">Português</td>
                                    <td class="px-4 py-2 text-center">7.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">35.00</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-center">História</td>
                                    <td class="px-4 py-2 text-center">7.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">35.00</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-center">Geografia</td>
                                    <td class="px-4 py-2 text-center">7.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">14.00</td>
                                    <td class="px-4 py-2 text-center">35.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p>2 Etapa</p>
                    <p>3 Etapa</p>
                </div>
            </main>

        </div>
    )
}
