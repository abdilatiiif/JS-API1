// filepath: /Users/abdilatif/Desktop/skole/Javascript /arbeidskrav-kodemappe/JS-API1/.eslintrc.js
export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      eqeqeq: ["error", "always"],
    },
  },
];
