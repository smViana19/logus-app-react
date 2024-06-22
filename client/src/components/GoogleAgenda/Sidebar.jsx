import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
import styled from 'styled-components'

export default function Sidebar() {
  return (
    <MenuLateral className='border p-5 w-64'>
        <CreateEventButton />
        <SmallCalendar /> 
    </MenuLateral>
  )
}

const MenuLateral = styled.aside`
  @media (max-width: 768px) {
    display: none;
  }
`
