import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);


const Dialog = ({
    type = 'info',
    title = 'Atenção',
    text = '',
    confirmButtonText = 'OK',
    onConfirm = null,
}) => {
    return mySwal.fire({
        type,
        title,
        text,
        confirmButtonText,
        onConfirm,
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm()
        }
    });
}

const showDialog = ({
    type = 'info',
    title = 'Atenção',
    text = '',
    confirmButtonText = 'OK',
    onConfirm = null,
}) => {
    return mySwal.fire({
        type,
        icon,
        title,
        text,
        confirmButtonText,
        onConfirm
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm();
        }
    });
}

export const showConfirmationDialog = (message) => {
    return mySwal.fire({
        title: "",
        text: message,
        icon: 'warning',
        confirmButtonText: 'Ok'
    });
};

export const showSuccesDialog = (message) => {
    return mySwal.fire({
        title: 'Sucesso',
        text: message,
        icon: 'success',
        confirmButtonText: 'Ok',
    });
};

export const showErrorAlert = (message) => {
    return mySwal.fire({
        title: 'Erro',
        text: message,
        icon: 'error',
        confirmButtonText: 'Tentar Novamente',
    });
}





