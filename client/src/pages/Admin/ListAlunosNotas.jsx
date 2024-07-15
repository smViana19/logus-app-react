import React from 'react';
import MenuAdmin from '../../components/Navs/MenuAdmin';
import AdminCardTop from '../../components/CardsContainers/AdminCardTop';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default function ListaAlunosNotas() {
    return (
        <div className="min-h-screen w-screen bg-gray-50 flex">
            <MenuAdmin
                fillSelectedNotas={'#820ad1'}
                textSelectedNotas={'text-purplePrimary'}
                selectNotas={
                    'bg-[#B4ADEA] border-r-2 border-l-2 border-purplePrimary'
                }
            />

            <main className="flex-1 p-4">
                <AdminCardTop />
                <h1 className="font-semibold text-2xl">Alunos</h1>

                <div>
                    <select name="" id="" >
                        <option value="" selected disabled >Ano Escolar</option>
                        
                        <option value="">6 ano do Fundamental</option>
                        <option value="">7 ano do Fundamental</option>
                        <option value="">8 ano do Fundamental</option>
                        <option value="">9 ano do Fundamental</option>
                        <option value="">1 ano do Ensino Médio</option>
                        <option value="">2 ano do Ensino Médio</option>
                        <option value="">3 ano do Ensino Médio</option>
                    </select>
                </div>

                <div>

                </div>


                
              
            </main>
        </div>
    );
}
