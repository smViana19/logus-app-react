import React, { useEffect } from 'react'
import { useState } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

export default function ContextWrapper( props ) {

    const [monthIndex, setMonthIndex] = useState(dayjs().month()) 
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [daySelected, setDaySelected] = useState(null)

    useEffect(() =>{
      if(smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth)
      }
    }, [smallCalendarMonth])
  return (
    <GlobalContext.Provider
     value={{
        monthIndex, 
        setMonthIndex,
        setSmallCalendarMonth,
        smallCalendarMonth,
        daySelected,
        setDaySelected
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}
