



const UserRoleSelector = ({ role, setRole }) => {
    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="flex justify-center gap-16">
            <div className="flex items-center">
                <input
                    type="radio"
                    name="tipo"
                    id="aluno"
                    value="estudante"
                    checked={role === 'estudante'}
                    onChange={handleRoleChange}
                    className="peer hidden"
                />
                <label
                    htmlFor="aluno"
                    className="cursor-pointer px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 dark:text-white transition 
        peer-checked:bg-purplePrimary peer-checked:text-white peer-checked:border-purplePrimary"
                >
                    Aluno
                </label>
            </div>

            <div className="flex items-center">
                <input
                    type="radio"
                    name="tipo"
                    id="professor"
                    value="professor"
                    checked={role === 'professor'}
                    onChange={handleRoleChange}
                    className="peer hidden"
                />
                <label
                    htmlFor="professor"
                    className="cursor-pointer px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 dark:text-white transition 
        peer-checked:bg-purplePrimary peer-checked:text-white peer-checked:border-purplePrimary"
                >
                    Professor
                </label>
            </div>

            <div className="flex items-center">
                <input
                    type="radio"
                    name="tipo"
                    id="diretor"
                    value="diretor"
                    checked={role === 'diretor'}
                    onChange={handleRoleChange}
                    className="peer hidden"
                />
                <label
                    htmlFor="diretor"
                    className="cursor-pointer px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 dark:text-white transition 
        peer-checked:bg-purplePrimary peer-checked:text-white peer-checked:border-purplePrimary"
                >
                    Diretor
                </label>
            </div>
        </div>
    );
};

export default UserRoleSelector;