import React, { useContext } from 'react';
import dayjs from 'dayjs'; 
import GlobalContext from '../../context/GlobalContext';

export default function Day({ day, rowIdx }) {

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7' : '';
    }

    const { setDaySelected, setShowEventModal } = useContext(GlobalContext);

    const handleDayClick = () => {
        setDaySelected(day);
        setShowEventModal(true);
    };

    return (
        <div className='border border-gray-200 flex flex-col'>
            <div className='flex flex-col items-center'>
                {rowIdx === 0 && (
                    <p className='text-sm mt-1'>
                        {day.format('ddd').toUpperCase()}
                    </p>
                )}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </div>

            <div className='flex-1 cursor-pointer' onClick={handleDayClick}>
               
            </div>
        </div>
    );
}
