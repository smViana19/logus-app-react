import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCircle, FaUserCircle, FaPowerOff } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import logo from '../../assets/logo.png';
import InputPurple from '../../components/Inputs/InputPurple';
import ContainerPrintApp from '../../components/CardsContainers/ContainerPrintApp';
import Subtitle from '../../components/Text/Subtitulo';
import FunctionalityItem from '../../components/CardsContainers/FunctionalityItem';
import FooterLanding from '../../components/Footer/FooterLanding';
import styled from 'styled-components';

//images
import imgAppStore from '../../assets/installAppStore.png';
import imgGooglePlay from '../../assets/installGooglePlay.png';
import imgMockupMobile from '../../assets/mockup-home-mobile.png';
import imgAgenda from '../../assets/agenda.png';
import imgPomodoro from '../../assets/pomodoro.png';

import '../../css/welcome.css';
import Loading from '../../components/outros/Loading';
import MenuMobileIndex from '../../components/Navs/MenuMobileIndex';

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const initialDescription = `
        <h3 class="text-lg font-semibold mb-4">Agenda</h3>
        <ParagraphFuncionalidades class="w-3/4">A agenda integrada permite aos alunos organizarem suas atividades acadêmicas e pessoais de maneira estruturada. Com opções para adicionar lembretes de tarefas, podendo ser organizadas como urgente, moderado, e tranquilo, a agenda digital facilita o planejamento e a gestão do tempo do aluno.</ParagraphFuncionalidades>
    `;

    const [description, setDescription] = useState(initialDescription);
    const [imageChange, setImageChange] = useState(imgAgenda);
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleLogout = e => {
        e.preventDefault();
        dispatch(actions.loginFailure());
        navigate('/');
    };

    const functionalities = [
        {
            name: 'Agenda',
            description: initialDescription,
            image: imgAgenda,
            id: 'agenda'
        },
        {
            name: 'Método Pomodoro',
            description: `
                <h3 class="text-lg font-semibold mb-4">Método Pomodoro</h3>
                <p class="w-3/4 mt-4">A funcionalidade do método Pomodoro no nosso aplicativo oferece uma maneira eficiente de gerenciar o tempo de estudo. Utilizando ciclos de 25 minutos de trabalho intenso seguidos por pausas curtas, essa técnica ajuda os alunos a manterem o foco e a produtividade.</p>
                <ParagraphFuncionalidades class="w-3/4 mt-4">Aém disso, implementamos uma série de sons para ajudar na concentração. Alguns desses sons são:  </ParagraphFuncionalidades>
                <li class='mt-4 ml-4'><span class='font-semibold'>Ruído Branco</span>  → Tem uma frequência específica para inibir sons externos, auxiliando na melhor concentração do aluno </li>
                <li class='mt-4 ml-4'><span class='font-semibold'>Ruído Branco</span>  → Tem uma frequência específica para inibir sons externos, auxiliando na melhor concentração do aluno </li>
            `,
            image: imgPomodoro,
            id: 'pomodoro'
        },
        {
            name: 'Pontuação',
            description: `
                <h3 class="text-lg font-semibold mb-4">Pontuação</h3>
                <ParagraphFuncionalidades class="w-3/4">O sistema de pontuação incentiva os alunos a se dedicarem mais aos estudos ao recompensar suas atividades acadêmicas com pontos. Atividades como a postagem de exercícios, elaboração de resumos e entrega de trabalhos geram pontos, motivando os alunos a participarem ativamente. Quando atingem uma determinada pontuação, a escola decide as recompensas, que podem incluir reconhecimentos públicos, certificados de mérito ou pequenas premiações, refletindo o esforço e a dedicação dos alunos.</ParagraphFuncionalidades>
            `,
            image: null,
            id: 'pontuacao'
        },
        {
            name: 'Área de Postagens',
            description: `
                <h3 class="text-lg font-semibold mb-4">Área de Postagens</h3>
                <ParagraphFuncionalidades class="w-3/4">A área de postagens é uma área colaborativa onde os alunos podem compartilhar resumos, atividades, apresentações e outros materiais de estudo. Essa funcionalidade promove a troca de conhecimento e recursos entre os estudantes, incentivando um ambiente de aprendizado colaborativo.</ParagraphFuncionalidades>
                <ParagraphFuncionalidades class="w-3/4 mt-2">A ideia é que os alunos possam postar, por espontânea vontade, os resumos e materiais de estudo que fizerem, mas disponiblizamos uma área onde o professor possa posta as atividades e os alunos podem anexá-las</ParagraphFuncionalidades>
            `,
            image: null,
            id: 'postagens'
        },
    ];

    return (
        <div className="bg-center bg-corPrincipal selection:bg-red-500 selection:text-white bg-img">
            <header>
                <MenuMobileIndex />
                <Nav className="flex justify-around py-4 nav__landing-page items-center">
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
                    <UlDeskEntrar className='flex gap-16 items-center'>
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
                                <Link to="/dashboard">
                                    <FaUserCircle />
                                </Link>
                            ) : (
                                <Link to="/registro"
                                    className="font-medium text-white hover:text-neutral-500"
                                    id='btnRegistrar'>Registrar</Link>
                            )}

                        </li>
                        <li>
                            {isLoggedIn && (<FaCircle size={24} color='#66ff33' />)}
                        </li>
                    </UlDeskEntrar>
                </Nav>
            </header>

            <Main className='mx-64'>
                <section id='home'>
                    <h1 className='text-4xl text-white font-bold text-center mt-48 mb-32'>Conectando mentes, expandindo horizontes.</h1>
                    <InputPurple
                        typeInput='email'
                        placeholderInput='logus@study.com'
                        typeBtn='submit'
                        valueBtn='Obtenha grátis'
                        btnTextColor={'white'}
                    />
                </section>

                <ContainerPrintApp />

                <section className='container__app-mobile mt-24 flex'>

                    <div className='mt-40'>
                        <Subtitle>Baixe também nosso aplicativo mobile</Subtitle>
                        <p className='mt-4'>Baixe o nosso aplicativo e tenha acesso a todas as funcionalidades a qualquer hora e em qualquer lugar. Simplifique sua vida com a conveniência do nosso app.</p>
                        <div className='flex justify-left gap-32 mt-16'>
                            <a href="#">
                                <img className='w-40' src={imgGooglePlay} alt="Link para baixar o aplicativo android" />
                            </a>
                            <a href="#"><img className='w-40 ' src={imgAppStore} alt="Link para baixar o aplicativo IOS" /></a>
                        </div>

                    </div>
                    <img className='w-1/4' src={imgMockupMobile} alt="Mockup Mobile" />
                </section>


                <section id='funcionalidades' className='my-32 m-auto'>
                    <Subtitle centered>FUNCIONALIDADES</Subtitle>
                    <ContainerFuncionalidades className='gap-32 justify-between mt-16'>
                        <div className='mb-16 col-span-2'>
                            <ItensFuncionalidades className='flex justify-around '>
                                {functionalities.map(item => (
                                    <FunctionalityItem
                                        key={item.id}
                                        name={item.name}
                                        description={item.description}
                                        image={item.image}
                                        isActive={hoveredItem === item.id}
                                        onHover={() => {
                                            setDescription(item.description);
                                            setImageChange(item.image);
                                            setHoveredItem(item.id);
                                        }}
                                    />
                                ))}
                            </ItensFuncionalidades>
                        </div>

                        <ContainerConteudoFuncionalidade className='col-span-5 flex items-center'>
                            <div dangerouslySetInnerHTML={{ __html: description }} />
                            {imageChange && <img className='ml-4 w-52' src={imageChange} alt="Imagem da funcionalidade" />}
                        </ContainerConteudoFuncionalidade>
                    </ContainerFuncionalidades>
                </section>

                <section className='mb-40'>
                    <Subtitle centered>DIFERENCIAL</Subtitle>
                    <ContainerDiferencial className='mt-16 grid grid-cols-2 gap-16 text-justify justify-between'>
                        <div className='col-span-1'>
                            <h4 className='text-center font-medium text-lg mb-4'>Suporte 24h na plataforma</h4>
                            <p>Oferecemos suporte técnico personalizado para cada cliente, sem a utilização de robôs ou inteligências artificiais. Você será atendido por um ser humano. Nosso atendimento está disponível durante o horário comercial, de segunda à sexta.</p>
                        </div>
                        <div className='col-span-1'>
                            <h4 className='text-center font-medium text-lg mb-4'>Funcionalidades especiais</h4>
                            <p>Nossa plataforma oferece diversas funcionalidades para alunos que possuem dificuldades de concentração ou aprendizagem.</p>
                        </div>
                    </ContainerDiferencial>
                </section>

            </Main>

            <FooterLanding />
        </div>
    );
}


// ----- RESPONSIVIDADE -----

// Menu
const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    visibility: hidden;
    width: 34px;
  }
`;

const UlDeskEntrar = styled.ul`
  @media screen and (max-width: 768px) {
    display: none;
  }
`


// Main
const Main = styled.main`
  @media screen and (max-width: 768px) {
    margin: 16px;
  }
`;



// Section Funcionalidades

const ContainerFuncionalidades = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const ItensFuncionalidades = styled.ul`
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    justify-content: flex-start;
    width: 100%;
  }
`;

const ContainerConteudoFuncionalidade = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const ParagraphFuncionalidades = styled.p`
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-bottom: 8px;
    }
`;



// Section Diferencial

const ContainerDiferencial = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: 64px 16px 0 16px;

  }
`;
