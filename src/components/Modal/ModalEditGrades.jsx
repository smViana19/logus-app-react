import React, { useEffect, useState } from 'react';

const ModalEditGrades = ({ isOpen, onClose, onSave, subject }) => {
    const [editedGrades, setEditedGrades] = useState([]);

    useEffect(() => {
        setEditedGrades(subject.grades);
    }, [subject]);

    const handleChange = (index, value) => {
        const updatedGrades = [...editedGrades];
        updatedGrades[index].grade = value;
        setEditedGrades(updatedGrades);
    };
    const handleSave = () => {
        onSave(editedGrades);
    };

    return isOpen ? (
        <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
            ></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <h3 className="text-base font-semibold leading-6 text-zinc-900">
                                Editar Notas
                            </h3>

                            {editedGrades.map((grade, index) => (
                                <div key={grade.id || index} >
                                    <div className='mt-5 flex flex-col'>
                                        <label className='text-sm pb-2'>{grade.period}</label>
                                        <input
                                            type="number"
                                            className="border boder-gray-200 rounded px-4 py-1 w-full"
                                            value={grade.grade}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className='bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-2'>
                                <button onClick={handleSave} className="inline-flex w-full justify-center rounded-md bg-purplePrimary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purpleDark sm:ml-3 sm:w-auto">Salvar</button>
                                <button onClick={onClose} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 sm:mt-0 sm:w-auto">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        null
    )
}

export default ModalEditGrades;


