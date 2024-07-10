/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        scaleImage: {
          '0%': { filter: 'grayscale(1)', transform: 'scale(1)' },
          '50%': { filter: 'grayscale(0)', transform: 'scale(0.9)', boxShadow: '3px 3px 10px rgb(13, 1, 90)' },
          '100%': { filter: 'grayscale(1)', transform: 'scale(1)' },
        },
        dotsAnimation: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        cubeRotate: {
          '0%': { transform: 'rotateY(0deg) translateY(0px)' },
          '50%': { transform: 'rotateY(180deg) translateY(-12px)' },
          '100%': { transform: 'rotateY(360deg) translateY(0px)' },
        },
        shakeEffect: {
          '50%': { bottom: '10%', left: '5%' },
        },
        zigzakAnimation: {
          '50%': { top: '2%', left: '5%' },
        },
        shakeEffectPlus: {
          '50%': { top: '3%', left: '48%' },
        },
      },
      animation: {
        scaleImage: 'scaleImage 5s linear infinite',
        dotsAnimation: 'dotsAnimation 5s infinite',
        cubeRotate: 'cubeRotate 3s infinite',
        shakeEffect: 'shakeEffect 6s linear infinite',
        zigzakAnimation: 'zigzakAnimation 5s ease-in infinite',
        shakeEffectPlus: 'shakeEffectPlus 5s ease-in infinite',
      },
    },
  },
  plugins: [],
};
