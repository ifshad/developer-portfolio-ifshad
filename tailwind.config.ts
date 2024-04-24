import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy' : '#265073',
        'teal' : '#2D9596',
        'teal-light' : '#9AD0C2',
        'sage' : '#F1FADA',
        'grey' : '#352F44'
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl' : '1600px',
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
