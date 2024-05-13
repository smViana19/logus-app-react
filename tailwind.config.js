import defaultTheme from "tailwindcss/defaultTheme";


/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Adicionando a nova cor roxoPrincipal com o código de cor 533680
        roxoPrincipal: "#5A1B8D",
        // Adicione mais cores conforme necessário
        corPrincipal: "#B4ADEA",
        corFundo: "#820AD1",
      },
    },
  },
  plugins: [],
};
