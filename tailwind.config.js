import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    extend: {
      colors: {
        yellow: {
          mikado: "#FDC221",
        },
        gray: {
          paynes: "#4F5D75",
        },
        violet: {
          ultra: "#645E9D",
        },
        black: {
          bean: "#001400",
        },
        white: {
          smoke: "#F3F3F3",
        },
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      screens: {
        xs: "440px",
        "3xl": "1440px",
      },
    },
  },

  plugins: [forms],
};
