/** @type {import('tailwindcss').Config} */

const fontSize = {
  h1: "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
  h2: "clamp(1.2rem, 0.7vw + 1.2rem, 1.5rem)",
  base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize,
    extend: {},
  },
  plugins: [],
};
