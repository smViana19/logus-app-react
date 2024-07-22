import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.png'

export default function MenuMobile() {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <ContainerNav className='bg-purplePrimary py-2 px-4 fixed w-full z-10 lg:hidden'>
                <button className='border py-2 px-4 rounded-md' onClick={toggleMenu}>{menuOpen ?

                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="20.5" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

                    :

                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="20.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>}
                </button>
             
            </ContainerNav>

            {
                menuOpen &&
                <MenuMobileContainer>
                    <img className='mt-20 w-32 m-auto mb-16' src={Logo} alt="" />
                    <ul >

                        <li className='py-4'>Home</li>
                        <li className='py-4'>Funcionalidades</li>
                        <li className='py-4'>Entrar</li>
                        <li className='py-4'>Cadastrar</li>

                    </ul>
                </MenuMobileContainer>
            }

        </>
    );
}



const MenuMobileContainer = styled.nav`
  display: none; 

  @media screen and (max-width: 768px) {
    display: block; 
    background-color: white;
    color: black;
    padding: 10px;
    width: 200px; 
    height: 100vh;
    position: fixed;
    z-index: 9;
    box-shadow: 5px 5px 5px rgba(200, 200, 200, 0.3);

  }
`;

const ContainerNav = styled.div `
    @media screen and (max-width: 768px) {
        width: 100%;
  }
`
