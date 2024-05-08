const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        themeColor: "#fd7014",
        themeBg: "#222831",
        cardBg: "#393e46",
        textColor: "#eeeeee",
      },
    },
  },
  content: [
    flowbite.content(),
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
