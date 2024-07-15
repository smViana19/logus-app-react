import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../../components/Navs/NavLink';
import Logo from '../../components/outros/Logo';
import BtnPrincipal from '../../components/Botoes/BtnPrincipal';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import LogoutButton from '../../components/Botoes/LogoutBtn';
import BtnPomodoroOpenModal from '../../components/Botoes/BtnPomodoroOpenModal';
import ModalPomodoroSound from '../../components/Modal/ModalPomodoroSound';
import AdminCardTop from '../../components/CardsContainers/AdminCardTop';

export default function Pomodoro() {


    return (
        <div className="min-h-screen bg-gray-50 relative">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link to="/">
                                    <Logo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href="#" to='/dashboard'>Dashboard</NavLink>
                                <NavLink href="#" to='/dashboard/postagens' >Área de Postagens</NavLink>
                                <NavLink href="#" to='/dashboard/agenda'>Agenda</NavLink>
                                <NavLink href="#" to='/dashboard/pomodoro' className='text-purplePrimary'>Método Pomodoro</NavLink>
                                <LogoutButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="flex-1 p-4">


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
    );
}

