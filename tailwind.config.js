/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fb5830",
        lightOrange: "#f97160",
      },
    },
  },
  plugins: [],
};
