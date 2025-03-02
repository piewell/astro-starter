import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";

export default [
  {
    ignores: [".astro/**"],
  },
  js.configs.recommended,
  // Add modifications to rules here, such as:
  {
    rules: {
      // semi: ["warn", "always"]
    },
  },
  // add more generic rule sets above
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
