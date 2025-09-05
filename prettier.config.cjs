/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 120,
  tailwindStylesheet: "./src/styles.css",
  plugins: ["prettier-plugin-tailwindcss"],
}
