/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme/**/*.liquid"],
  theme: {
    extend: {
      height: {
        "22" : "22rem"
      },
      flex: {
        "align-center": "align-center",
      }


    },
  },
  plugins: [],
}

