import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#3777ee',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gray-200': 'rgb(229 231 235)',
      'white': '#ffffff',
      'invalid': '#f99f97',
      'dark-blue': '#2963cf',
      'red': '#f50202',
      'background': '#e5e5e5',
      'online': '#48bb78',
      'offline': '#a7a8a9',
      'online-switch': '#9ae6b4',
      'offline-switch': '#dddee1',
      'sidebar-blue': '#2c64cd',
      'sidebar-divider': '#7aa5f5',
      'darker-blue': '#133d8a',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
};
export default config;
