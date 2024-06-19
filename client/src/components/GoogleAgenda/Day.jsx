import React from 'react';

export default function Day({ day, rowIdx }) {
    return (
        <div className='border border-gray-200 flex flex-col'>
            <div className='flex flex-col items-center'>
                {/* Conditionally render the day name only if it's the first row */}
                {rowIdx === 0 && (
                    <p className='text-sm mt-1'>
                        {day.format('ddd').toUpperCase()}
                    </p>
                )}
                <p className='text-sm p-1 my-1 text-center'>
                    {day.format('DD')}
                </p>
            </div>
        </div>
    );
}
