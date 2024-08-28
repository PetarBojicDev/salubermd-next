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
      'gray-300': 'rgb(209 213 219)',
      'gray-400': 'rgb(156 163 175)',
      'gray-500': 'rgb(107 114 128)',
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
      'darker-blue': '#2354ad',
      'gray-card': '#d4d4d4',
      'gray-hover': '#f2f2f2',
      'gray-card-text': '#ababab',
      'divider': '#c1c2c4',
      'black': '#000000',
      'light-black': '#333333'
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
