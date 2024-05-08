/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Atkinson", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#dcfff3",
          100: "#b3f8e1",
          200: "#88f3ce",
          300: "#5bedbc",
          400: "#31e8a9",
          500: "#17ce90",
          600: "#09a170",
          700: "#00734f",
          800: "#00462f",
          900: "#00190d",
        },
        secondary: {
          50: "#dbfff9",
          100: "#b1faec",
          200: "#85f5df",
          300: "#58f0d2",
          400: "#2cecc5",
          500: "#13d3ac",
          600: "#03a486",
          700: "#00755f",
          800: "#004738",
          900: "#001913",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h4: {
              fontSize: "1em",
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
  plugins: [require("@tailwindcss/typography")],
  darkMode: "selector",
};
