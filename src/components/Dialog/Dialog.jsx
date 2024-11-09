import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal);


const Dialog = ({
    type = 'info',
    title = 'Atenção',
    text = '',
    confirmButtonText = 'OK',
    confirmButtonColor = '#820AD1',
    onConfirm = null,
}) => {
    return mySwal.fire({
        type,
        title,
        text,
        confirmButtonText,
        confirmButtonColor,
        onConfirm,
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm()
        }
    });
}

export const showDialog = ({
    title = 'Tem certeza?',
    text = 'Essa ação não pode ser desfeita!',
    confirmButtonText = 'Confirmar',
    cancelButtonText = 'Cancelar',
    confirmButtonColor = '#820AD1',
    onConfirm = null,
    showCancelButton = true
}) => {
    return mySwal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton,
        confirmButtonColor,
        confirmButtonText,

        cancelButtonText
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm()
        }
    });
}

export const showConfirmationDialog = (message) => {
    return mySwal.fire({
        title: "",
        text: message,
        icon: 'warning',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#820AD1',
    });
};

export const showSuccesDialog = (message) => {
    return mySwal.fire({
        title: 'Sucesso',
        text: message,
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#820AD1',
    });
};

export const showErrorAlert = (message) => {
    return mySwal.fire({
        title: 'Erro',
        text: message,
        icon: 'error',
        confirmButtonText: 'Tentar Novamente',
        confirmButtonColor: '#820AD1',
    });
}





