import React, { useState } from "react";

const UserRoleSelector = ({ role, setRole }) => {
    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="flex">
            <div className="flex mr-4">
                <label htmlFor="aluno" className="mr-2">Aluno</label>
                <input
                    type="radio"
                    name="tipo"
                    id="aluno"
                    value="aluno"
                    checked={role === 'aluno'}
                    onChange={handleRoleChange}
                />
            </div>

            <div className="flex mr-4">
                <label htmlFor="professor" className="mr-2">Professor</label>
                <input
                    type="radio"
                    name="tipo"
                    id="professor"
                    value="professor"
                    checked={role === 'professor'}
                    onChange={handleRoleChange}
                />
            </div>

            <div className="flex">
                <label htmlFor="diretor" className="mr-2">Diretor</label>
                <input
                    type="radio"
                    name="tipo"
                    id="diretor"
                    value="diretor"
                    checked={role === 'diretor'}
                    onChange={handleRoleChange}
                />
            </div>
        </div>
    );
};

export default UserRoleSelector;