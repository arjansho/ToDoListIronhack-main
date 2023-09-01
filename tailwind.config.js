/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    daisyui: {
      themes: ["garden"],
      extend: {
        backgroundImage: {
          'hero-pattern': "url('./src/assets/34ze2yT01.svg')",
          'footer-texture': "url('./src/assets/Background.jpg')",
        }
      }
    },
    
    plugins: [require('daisyui')],
  };
  