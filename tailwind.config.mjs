/** @type {import('tailwindcss').Config} */

const fontSize = {
  h1: "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
  h2: "clamp(1.2rem, 0.7vw + 1.2rem, 1.5rem)",
  h3: "clamp(1.19rem, 0.7vw + 1.2rem, 1.2rem)",
  base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
  sm: "clamp(.75rem, 0.34vw + 0.91rem, .875rem)",
};

const fontWeight = {
  heading: 600,
  bold: 500,
  base: 400,
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize,
    fontWeight,
    extend: {},
  },
  plugins: [],
};
