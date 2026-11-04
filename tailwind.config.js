/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ground: {
          base: '#090A0F',
          elevated: '#11131B',
          surface: '#181B26',
        },
        accent: {
          violet: '#6366F1',
          'violet-light': '#818CF8',
          magenta: '#9333EA',
          'magenta-light': '#C084FC',
          cyan: '#38BDF8',
          amber: '#F59E0B',
          emerald: '#22C55E',
          'indigo-btn': '#4F46E5',
        },
        ink: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          glass: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'ease-drawer': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
