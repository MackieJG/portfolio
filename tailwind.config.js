/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        mainBackground: "FFFFFF", // white
        mainText: "000000", // Black
        secondaryColor: "14213D", // Oxford Blue
        accentColor: "E5E5E5", // Platinum
        themeColor: "FCA311", // Orange (web)
      },
    },
  },
  plugins: [],
};
