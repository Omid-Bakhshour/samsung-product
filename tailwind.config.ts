import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        samsung: ['samsung', 'sans-serif', 'arial'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
      dropShadow: {
        'tab-black': "0 0 3px rgba(255,255,255,0.75)",
        'tab-white': "0 0 3px rgba(0, 0, 0, 0.75)",
      },
      boxShadow: {
        'list-shadow': "0 4px 10px 0 rgba(0,0,0,0.2)",
      },
      borderColor : {
        'floating-header': "rgba(0,0,0,0.2)",
      },
      colors: {
        'primary-blue': "#2189ff"
      }
    },
  },
  plugins: [],
}
export default config
