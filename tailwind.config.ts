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
      }, //bb6da6
      colors: {
        primary: "#282c34",
        secondary: "#333842",
        tertiary: "#4C0BDE",
        primary2: "#292a3f",
        secondary2: "#353453",
        tertiary2: "#cc709f",
        text: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
