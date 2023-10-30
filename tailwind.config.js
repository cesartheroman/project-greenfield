/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  'node_modules/daisyui/dist/**/*.js',
  'node_modules/react-daisyui/dist/**/*.js',
];
export const theme = {
  extend: {},
};
export const plugins = [require('daisyui')];
