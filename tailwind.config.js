module.exports = {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "3px 0px 6px 0px rgba(246, 246, 246, 0.75)",
      },
      screens: {
        "-md": { max: "768px" },
      },
    },
  },

  plugins: [],
};
