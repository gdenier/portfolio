module.exports = {
  plugins: [require("prettier-plugin-astro"), require("prettier-plugin-tailwindcss")],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
};
