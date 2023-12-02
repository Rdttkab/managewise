import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(180deg,rgb(253, 242, 236) 0%,rgb(255, 255, 255) 100%)",
      },

      colors: {
        primary: "rgb(130, 71, 255)",
        secondary: "rgb(254, 129, 98)",
        tertiary: "rgb(118, 117, 117)",
        quaternary: "#EDEDFA",
        quinary: "rgb(28, 28, 28)",
        senary: "rgba(130, 71, 255, 0.2)",
        septenary: "rgb(253, 242, 236)",
      },
      flex: { 2: "1 0 0" },
    },
  },
  plugins: [],
};
export default config;
