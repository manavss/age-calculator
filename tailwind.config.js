/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        offWhite: " hsl(0, 0%, 94%)",
        lightgrey: "hsl(0, 0%, 86%)",
        smokeygrey: "hsl(0, 1%, 44%)",
        offblack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
