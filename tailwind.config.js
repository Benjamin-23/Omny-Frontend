module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
      },
      colors: {
        'omny-purple': '#6366F1',
        'omny-dark': '#0F172A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float-up': 'float-up var(--duration, 15s) ease-out infinite',
      },
      keyframes: {
        'float-up': {
          '0%': { 
            transform: 'translateY(0) rotate(0deg)',
            opacity: 'var(--opacity, 0.3)'
          },
          '100%': { 
            transform: 'translateY(-100vh) rotate(360deg)',
            opacity: '0'
          },
        },
      },
    }
  },
  plugins: [],
} 