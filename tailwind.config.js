/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg ,#4f46e5 ,#7c3aed)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
