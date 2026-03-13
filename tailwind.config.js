/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // TEAMITZ Brand Colors
        primary: {
          DEFAULT: '#2563EB', // TEAMITZ Blue
          600: '#2563EB',
          700: '#1D4ED8', // hover
          400: '#60A5FA', // light
        },
        secondary: {
          DEFAULT: '#7C3AED', // Innovation Purple
          600: '#7C3AED',
          500: '#A78BFA', // light
        },
        accent: {
          DEFAULT: '#22C55E', // Success Green
          500: '#22C55E',
          400: '#4ADE80', // light
        },
        background: {
          main: '#0F172A',
          card: '#1E293B',
          border: '#334155',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5F5',
        },
      },
      backgroundImage: {
        'teamitz-gradient': 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
