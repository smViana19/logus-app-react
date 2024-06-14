import React from 'react'
import styled from 'styled-components'


export default function BtnPomodoroOpenModal({ text, svg, onClick }) {
    return (
        <BtnFoco onClick={onClick} className='cursor-pointer flex gap-5 items-center bg-white w-1/4 justify-center py-1 rounded-lg border border-gray-100 shadow-sm'>
           {svg}
            <span className=''>{text}</span>
        </BtnFoco>
    )
}

const BtnFoco = styled.button `
    @media screen and (max-width: 768px) {
        width: 40%;
        padding: 4px 8px 4px 8px;
    }
`
