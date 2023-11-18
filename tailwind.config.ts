import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange-100': '#E8BA3A',
        'esmeralda-800': '#08554C',
        'purple-1000': '#2A0E1B',
        'bege-100': '#ECE0CA',
      },
    },
  },
  plugins: [],
}
export default config
