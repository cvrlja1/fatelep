/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6600',
                secondary: '#0066FF',
                background: '#F9FAFB',
                dark: '#1F2937',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: 0 },
                '100%': { opacity: 1 },
            },
            slideInUp: {
                '0%': { transform: 'translateY(20px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
            },
            slideInLeft: {
                '0%': { transform: 'translateX(-20px)', opacity: 0 },
                '100%': { transform: 'translateX(0)', opacity: 1 },
            },
            popIn: {
                '0%': { transform: 'scale(0.9)', opacity: 0 },
                '100%': { transform: 'scale(1)', opacity: 1 },
            },
        },
        animation: {
            fadeIn: 'fadeIn 1s ease-in-out',
            slideInUp: 'slideInUp 0.8s ease-out',
            slideInLeft: 'slideInLeft 0.8s ease-out',
            popIn: 'popIn 0.6s ease-out',
        },
    },
    plugins: [],
};
