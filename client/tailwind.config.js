import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },

            gridTemplateColumns: {
                "1/5": "1fr 5fr"
            },
            colors: {
                //inputs
                cinzaBgInput: '#F3F3F3',
                cinzaBordaInput: '#DCDCDC',
                //backgrounds
                purplePrimary: '#820AD1',
                purpleDarkBg: '#533680',
                //textos
                txtPlaceholder: '#3A3A3A',
                txtTitulo: '#533680',
                txtLink: '',
                txtBotao: '',
            },
            scale: {
                '102': '1.02',
              },
              fontSize: {
                '5xl': '3rem',
                '6xl': '4rem',
          
              },
        },
    },
    plugins: [],
};
