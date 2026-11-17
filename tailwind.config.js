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
        paper: {
          DEFAULT: '#F6F4EF',
          deep: '#EDE9E1',
          dim: '#E4DFD5',
        },
        ink: {
          DEFAULT: '#14120F',
          soft: '#3D3932',
          muted: '#514C44',
          faint: '#6B655B',
        },
        brand: {
          DEFAULT: '#5B21B6',
          deep: '#3F1277',
          light: '#A78BFA',
          tint: 'rgba(91, 33, 182, 0.10)',
        },
        night: {
          DEFAULT: '#0E0D0B',
          elevated: '#171411',
          surface: '#201C17',
        },
        line: {
          DEFAULT: 'rgba(20, 18, 15, 0.14)',
          light: 'rgba(246, 244, 239, 0.16)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter Tight', 'sans-serif'],
        display: ['var(--font-inter-tight)', 'Inter Tight', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      maxWidth: {
        shell: '1320px',
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'ease-drawer': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
};
