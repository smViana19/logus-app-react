import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCircle, FaPowerOff } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions';
import logo from '../assets/logo.png';
import InputPurple from '../components/Inputs/InputPurple';
import ContainerPrintApp from '../components/CardsContainers/ContainerPrintApp';
import Subtitle from '../components/Text/Subtitulo';

//images
import imgAppStore from '../assets/installAppStore.png';
import imgGooglePlay from '../assets/installGooglePlay.png';
import imgMockupMobile from '../assets/mockup-home-mobile.png';
import imgAgenda from '../assets/agenda.png'; 
import imgPomodoro from '../assets/pomodoro.png'

import '../css/welcome.css';

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [description, setDescription] = useState('Passe o cursor do mouse por cima do ícone da habilidade para ver mais informações sobre ela.');
    const [imageChange, setImageChange] = useState('');
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleLogout = e => {
        e.preventDefault();
        dispatch(actions.loginFailure());
        navigate('/');
    };

    return (
        <div className="bg-center bg-corPrincipal selection:bg-red-500 selection:text-white bg-img">
            <header>
                <nav className="flex justify-around py-4 nav__landing-page">
                    <ul>
                        <li><img className='w-32' src={logo} alt="Logo" /></li>
                    </ul>
                    <ul className='flex gap-16'>
                        <li className='text-lg border-r-gray-500 border-r w-16 text-center h-8'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='text-lg w-8 px-6 text-center'>
                            <a href="#funcionalidades">Funcionalidades</a>
                        </li>
                    </ul>
                    <ul className='flex gap-16'>
                        <li className='text-lg'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout} to="#">
                                    <FaPowerOff />
                                </Link>
                            ) : (
                                <Link to="/login">Entrar</Link>
                            )}
                        </li>
                        <li className='text-lg'>
                            {isLoggedIn ? (
                                <Link to="/dashboard">Dashboard</Link>
                            ) : (
                                <Link to="/registro" 
                                className="font-medium text-white  hover:text-neutral-500"
                                id='btnRegistrar'>Registrar</Link>
                            )}
                            {isLoggedIn && (<FaCircle size={24} color='#66ff33' />)}
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id='home'>
                    <h1 className='text-4xl text-white font-bold text-center mt-48 mb-32'>Conectando mentes, expandindo horizontes.</h1>
                    <InputPurple
                        typeInput='email'
                        placeholderInput='logus@study.com'
                        typeBtn='submit'
                        valueBtn='Obtenha o Lógus grátis'
                    />
                </section>

                <ContainerPrintApp />

                <section className='container__app-mobile mt-16'>
                    <div className='mt-40'>
                        <Subtitle>Baixe também nosso aplicativo mobile</Subtitle>
                        <p className='mt-4'>Baixe o nosso aplicativo e tenha acesso a todas as funcionalidades a qualquer hora e em qualquer lugar. Simplifique sua vida com a conveniência do nosso app.</p>
                        <div className='flex justify-left gap-32 mt-16'>
                            <a href="#"><img className='w-32' src={imgGooglePlay} alt="Link para baixar o aplicativo android" /></a>
                            <a href="#"><img className='w-32' src={imgAppStore} alt="Link para baixar o aplicativo IOS" /></a>
                        </div>
                    </div>
                    <img className='w-3/4' src={imgMockupMobile} alt="Mockup Mobile" />
                </section>

                <section id='funcionalidades' className='my-32 w-3/4 m-auto'>
                    <Subtitle centered>FUNCIONALIDADES</Subtitle>
                    <div className='grid grid-cols-4 gap-32 justify-between mt-16'>
                        <div className='bg-gray-200 flex-none col-span-1'>
                            <ul>
                                <li 
                                    className={`py-3 px-4 flex cursor-pointer ${hoveredItem === 'agenda' ? 'border-l-2 border-purplePrimary' : ''}`}
                                    onMouseOver={() => {
                                        setDescription(`
                                            <h3 class="text-lg font-semibold mb-4">Agenda</h3>
                                            <p class="w-3/4">Implementamos uma agenda intuitiva para organizar suas atividades de forma funcional</p>
                                        `);
                                        setImageChange(imgAgenda);
                                        setHoveredItem('agenda');
                                    }}
                                >
                                    Agenda
                                </li>
                                <li 
                                    className={`py-3 px-4 flex cursor-pointer ${hoveredItem === 'pomodoro' ? 'border-l-2 border-purplePrimary' : ''}`}
                                    onMouseOver={() => {
                                        setDescription(`
                                            <h3 class="text-lg font-semibold mb-4">Método Pomodoro</h3>
                                            <p class="w-3/4">Implementamos uma agenda intuitiva para organizar suas atividades de forma funcional</p>
                                        `);
                                        setImageChange(imgPomodoro);
                                        setHoveredItem('pomodoro');
                                    }}
                                >
                                    Método Pomodoro
                                </li>
                                <li 
                                    className={`py-3 px-4 flex cursor-pointer ${hoveredItem === 'outra' ? 'border-l-2 border-purplePrimary' : ''}`}
                                    onMouseOver={() => {
                                        setDescription(`
                                            <h3 class="text-lg font-semibold mb-4">Agenda</h3>
                                            <p class="w-3/4">Implementamos uma agenda intuitiva para organizar suas atividades de forma funcional</p>
                                        `);
                                        setHoveredItem('outra');
                                    }}
                                >
                                    Outra Descrição
                                </li>
                                <li 
                                    className={`py-3 px-4 flex cursor-pointer ${hoveredItem === 'outra' ? 'border-l-2 border-purplePrimary' : ''}`}
                                    onMouseOver={() => {
                                        setDescription(`
                                            <h3 class="text-lg font-semibold mb-4">Agenda</h3>
                                            <p class="w-3/4">Implementamos uma agenda intuitiva para organizar suas atividades de forma funcional</p>
                                        `);
                                        setHoveredItem('outra');
                                    }}
                                >
                                    Outra Descrição
                                </li>
                                <li 
                                    className={`py-3 px-4 flex cursor-pointer ${hoveredItem === 'outra' ? 'border-l-2 border-purplePrimary' : ''}`}
                                    onMouseOver={() => {
                                        setDescription(`
                                            <h3 class="text-lg font-semibold mb-4">Agenda</h3>
                                            <p class="w-3/4">Implementamos uma agenda intuitiva para organizar suas atividades de forma funcional</p>
                                        `);
                                        setHoveredItem('outra');
                                    }}
                                >
                                    Outra Descrição
                                </li>
                            </ul>
                        </div>

                        <div className='col-span-3 flex items-center'>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                            {imageChange && <img className='ml-4 w-52' src={imageChange} alt="Imagem da funcionalidade" />}
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className='bg-[#820AD1] py-4'>
                    <h3 className='font-semibold text-xl text-white text-center my-8'>O que está esperando para se cadastrar??</h3>
                    <InputPurple
                        typeInput='email'
                        placeholderInput='logus@study.com'
                        typeBtn='submit'
                        valueBtn='Obtenha o Lógus grátis'
                        btnBgColor='white'
                        btnTextColor='#830AD1'
                        inputBorder='1px solid #E3E3E3'
                        placeholderColor='white'
                    />
                </div>
                <div className='bg-[#533680] text-white h-40'>
                    footer
                </div>
            </footer>
        </div>
    );
}
