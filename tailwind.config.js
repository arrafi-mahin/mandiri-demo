/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        blue: "#006CB6",
        light: "#FFFFFFA8",
        yellow: "#FFC955",
        gray: "#96A2AA",
      },
      gradientColorStops: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.blue"
        )}, ${theme("colors.light")})`,
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        appBg: "url('/src/Assets/images/appBg.jpeg')",
      },
    },
  },
  plugins: [],
};
