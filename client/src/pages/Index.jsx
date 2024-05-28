import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCircle, FaPowerOff } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions';
import logo from '../assets/logo.png';
import InputPurple from '../components/Inputs/InputPurple';
import ContainerPrintApp from '../components/CardsContainers/ContainerPrintApp';
import Subtitle from '../components/Text/Subtitulo';
import imgAppStore from '../assets/installAppStore.png';
import imgGooglePlay from '../assets/installGooglePlay.png';
import imgMockupMobile from '../assets/mockup-home-mobile.png';
import CardFuncionalidades from '../components/CardsContainers/CardFuncionalidades';
import '../css/welcome.css'

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const handleLogout = e => {
        e.preventDefault();
        dispatch(actions.loginFailure());
        navigate('/');
    }

    return (
        <div className="bg-center bg-corPrincipal selection:bg-red-500 selection:text-white bg-img">
            <header>
                <nav className="flex justify-around py-4 nav__landing-page">
                    <ul>
                        <li><img className='w-32' src={logo} alt="Logo" /></li>
                    </ul>
                    <ul className='flex gap-16'>
                        <li className='text-lg border-r-gray-500 border-r w-16 text-center h-8'>
                            <Link to="#home">Home</Link>
                        </li>
                        <li className='text-lg w-8 px-6 text-center'>
                            <Link to="#funcionalidades">Funcionalidades</Link>
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

                <section id='home' className='container__app-mobile mt-16'>
                    <div className='mt-40'>
                        <Subtitle>Baixe também nosso aplicativo mobile</Subtitle>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                        <div className='flex justify-left gap-32 mt-16'>
                            <a href=""><img className='w-32' src={imgGooglePlay} alt="Link para baixar o aplicativo android" /></a>
                            <a href=""><img className='w-32' src={imgAppStore} alt="Link para baixar o aplicativo IOS" /></a>
                        </div>
                    </div>
                    <img className='w-3/4' src={imgMockupMobile} alt="Mockup Mobile" />
                </section>

                <section id='funcionalidades' className='my-32 w-3/4 m-auto'>
                    <Subtitle centered>FUNCIONALIDADES</Subtitle>
                    <p className='text-center mt-4 mb-24 w-auto'>Passe o mouse por cima dos titulos e veja nossas principais funcionalidades...</p>
                    <div className='container__funcionalidades-grid'>
                        <div>
                            <CardFuncionalidades
                                title='Postagem de Materiais'
                                text='Lorem ipsum dolor sit amet consectetur...'
                            />
                            <CardFuncionalidades
                                title='Agenda'
                                text='Lorem ipsum dolor sit amet consectetur...'
                            />
                            <CardFuncionalidades
                                title='Método Pomodoro'
                                text='Lorem ipsum dolor sit amet consectetur...'
                            />
                        </div>
                        <img src="" alt="Print das funcionalidades" />
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