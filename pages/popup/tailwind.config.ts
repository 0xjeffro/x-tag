import baseConfig from '@extension/tailwindcss-config';
import type { Config } from 'tailwindcss/types/config';
const { nextui } = require('@nextui-org/react');

export default {
  ...baseConfig,
  content: [
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: {
              foreground: '#f0f0f0',
              DEFAULT: '#11181c',
            },
          },
        },
        dark: {
          // ...
          colors: {
            primary: {
              foreground: '#f0f0f0',
              DEFAULT: '#11181c',
            },
          },
        },
        // ... custom themes
      },
    }),
  ],
} as Config;
