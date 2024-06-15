import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.png'

export default function MenuMobileIndex() {


    return (
        <>
            <ContainerNav className='bg-purplePrimary py-4 px-4 fixed w-full z-10 md:hidden flex justify-end'>
                <ul className='flex gap-8 items-center'>
                    <li>Entrar</li>
                    <li>Cadastrar</li>
                </ul>
            </ContainerNav>

           

        </>
    );
}


const ContainerNav = styled.div `
    @media screen and (max-width: 768px) {
        width: 100%;
  }
`
