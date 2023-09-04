/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      animation: {
        none: 'none',
        bounce: 'bounce 1s infinite',
        line: 'line 5s cubic-bezier(0.07, 0.15, 0.6, .75) infinite',
        'line-reveal': 'line-reveal 0.5s cubic-bezier(0.07, 0.15, 0.6, 0.75)',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slide:
          'slide 1s ease-in-out infinite alternate, slide-out 1s ease-in-out 1s infinite alternate',
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        line: {
          '0%, 75%, 100%': { top: '31px' },
          '15%, 60%': { top: 0 },
        },
        'line-reveal': {
          '0%, 75%, 100%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          },
          '15%, 60%': {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        pulse: {
          '50%': {
            opacity: '.3',
          },
        },
        slide: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};
