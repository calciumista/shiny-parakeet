/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#59a9b7",
          "secondary": "#0284c7",
          "accent": "#38e279",
          "neutral": "#1f2028",
          "base-100": "#e0f2fe",
          "info": "#519bf6",
          "success": "#68edaf",
          "warning": "#b55f03",      
          "error": "#e77385",
        },
      },
    ],
    base: false,
  },

  plugins: [require("daisyui")],
};

module.exports = config;
