import React from 'react';

function FunctionalityItem({ name, description, image, isActive, onHover }) {
    return (
        <li
            className={`py-3 px-4 flex cursor-pointer ${isActive ? 'border-l-2 border-purplePrimary' : ''}`}
            onMouseOver={onHover}
        >
            {name}
        </li>
    );
}

export default FunctionalityItem;
