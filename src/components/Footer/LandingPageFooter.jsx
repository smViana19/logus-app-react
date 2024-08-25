import React from 'react';
import logo from '../../assets/logo.png';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import enviar from '../../assets/enviar.png';
import telefone from '../../assets/telefone.png';

export default function LandingPageFooter() {
    return (
        <footer className='bg-[#5E4485]'>
            <div className='py-8'>
                <div className='lg:flex lg:justify-around lg:items-start grid grid-cols-2 md:gap-12 gap-y-8 text-white'>
                    
                   
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center mb-4'>
                        <ul>
                            <li><img className='w-32' src={logo} alt="Logo" /></li>
                        </ul>
                        </div>
                        <div className='flex space-x-4'>
                            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram.com" className="w-6 h-6"/>
                            </a>
                            <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" className="w-6 h-6"/>
                            </a>
                            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" className="w-6 h-6"/>
                            </a>
                            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" className="w-6 h-6"/>
                            </a>
                        </div>
                    </div>
                    
                    {/* Links Section */}
                    <div className='flex flex-col items-start'>
                        <h3 className='font-semibold mb-4'>HOME</h3>
                        <a href="/login" className='mb-2'>Entrar</a>
                    </div>

                    <div className='flex flex-col items-start'>
                        <h3 className='font-semibold mb-4'>FUNCIONALIDADES</h3>
                        <a href="/dashboard/agenda" className='mb-2'>Agenda</a>
                        <a href="/dashboard/pomodoro" className='mb-2'>Método Pomodoro</a>
                        <a href="#">Criação de Resumos</a>
                    </div>
                    
                    {/* Contact Section */}
                    <div className='flex flex-col items-start'>
                        <h3 className='font-semibold mb-4'>CONTATOS</h3>
                        <div className='flex items-center mb-2'>
                        <img src={enviar} alt="Facebook" className="w-6 h-6"/>
                            <a href="mailto:faleconosco@logus.com" className='ml-2 text-xs'>faleconosco@logus.com</a>
                        </div>
                        <div className='flex items-center'>
                        <img src={telefone} alt="Facebook" className="w-6 h-6"/>
                            <a href="tel:+5531999999999" className='ml-2'>(31) 99999-9999</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
