/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Atkinson', 'sans-serif'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h4: {
              fontSize: '1em',
              fontWeight: 600,
            },
            h5: {
              fontWeight: 600,
            },
            // ...
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'selector',
};
