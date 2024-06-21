import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../../context/GlobalContext';

const labelColorMap = {
    work: 'bg-blue-200',
    personal: 'bg-green-200',
    holiday: 'bg-red-200',
};

export default function Day({ day, rowIdx }) {
    const [dayEvents, setDayEvents] = useState([]);
    const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } = useContext(GlobalContext);

    useEffect(() => {
        const events = savedEvents.filter(evt => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY'));
        setDayEvents(events);
    }, [savedEvents, day]);

    function getCurrentDayClass() {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : '';
    }

    const handleDayClick = () => {
        setDaySelected(day);
        setShowEventModal(true);
    };

    return (
        <div className="border border-gray-200 flex flex-col">
            <div className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm mt-1">
                        {day.format('ddd').toUpperCase()}
                    </p>
                )}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </div>

            <div className="flex-1 cursor-pointer py-2" onClick={handleDayClick}>
                {dayEvents.map((evt, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedEvent(evt)}
                        className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}>
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
