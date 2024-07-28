import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
  ];


export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: "class",
    safelist: [
        ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
        ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
        ...labelsClasses.map((lbl) => `text-${lbl}-400`)
      ],
    theme: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }

        'md': '540px',
        // => @media (min-width: 540px) { ... }

        'lg': '768px',
        // => @media (min-width: 768px) { ... }
        
        'xl': '1024px',
        // => @media (min-width: 1024px) { ... }

        '2xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
        extend: {
            screens: {
              '3xl': '1440px',
            },
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
                cinzaPrincipal: '#F0F1F5',
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
              rotate: {
                '360': '360deg'
              },

              
        },
    },
    plugins: [],
};
