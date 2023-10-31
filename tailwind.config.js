/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    object:{
      safelist: ['animate-[drop-in_0.5s]', 'animate-[drop-out_0.5s]']
    },
    
  },
  plugins: [require("daisyui")],
}

