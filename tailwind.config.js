import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                //inputs
                cinzaBgInput: '#F3F3F3',
                cinzaBordaInput: '#DCDCDC',
                //backgrounds
                purpleLightBg: '#820AD1',
                purpleDarkBg: '#533680',
                //textos
                txtPlaceholder: '#3A3A3A',
                txtTitulo: '',
                txtLink: '',
                txtBotao: '',
            },
        },
    },
    plugins: [],
};
