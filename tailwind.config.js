/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', "[class~='dark']"] // "dark:*" classes working!
  ,
    
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-them': "url('/bg/light.svg')",
        'dark-them': "url('/bg/dark.svg')",
      },
      boxShadow: {
        '3xl': ' 9px 12px 22px 5px rgba(0,0,0,0.49)'
       
      }
     
    },
  },
  plugins: [],
}
