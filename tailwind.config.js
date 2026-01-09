/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0B1220",
          cream: "#F8FAFC",
          sand: "#FDE68A",
          sky: "#1D4ED8",
          pine: "#1D4ED8",
          berry: "#DC2626",
          navy: "#0B1220",
          red: "#DC2626",
          blue: "#1D4ED8",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      boxShadow: {
        device: "0 20px 60px rgba(2, 6, 23, 0.25)",
      },
    },
  },
  plugins: [],
};
