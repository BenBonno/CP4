/* eslint-disable global-require */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
