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
import MenuMobile from '../../components/Navs/MenuMobile';

export default function Pomodoro() {


    return (
        <div className="min-h-screen bg-gray-50 relative">
        <nav className="bg-white border-b border-gray-50 shadow-md shadow-gray-50">
                    <MenuMobile/>
                    <div className="flex justify-between py-2 px-32">
                        <div className="flex items-center">
                            <Link to="/">
                                <Logo className="block h-12 w-auto fill-current" />
                            </Link>
                        </div>

                        <div className="flex justify-around">
                            <div className="space-x-8  lg:flex">
                                <NavLink to="/dashboard" className="">
                                    Dashboard
                                </NavLink>
                                <NavLink to="/dashboard/postagens" className="">
                                    Área de Postagens
                                </NavLink>
                                <NavLink to="/dashboard/agenda" className="">
                                    Agenda
                                </NavLink>
                                <NavLink to="/dashboard/pomodoro" className="">
                                    Método Pomodoro
                                </NavLink>
                                <NavLink to="/dashboard/notas" className="">
                                    Notas
                                </NavLink>
                            </div>
                            <div className="flex justify-between"></div>
                        </div>
                        <div className="flex justify-center gap-16">
                            <NavLink to="/dashboard/perfil" className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="14"
                                    width="12.25"
                                    viewBox="0 0 448 512"
                                >
                                    <path className='fill-gray-400' d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                            </NavLink>
                            <LogoutButton />
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

