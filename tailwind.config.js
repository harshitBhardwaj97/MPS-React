/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
};
