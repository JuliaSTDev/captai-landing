import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1C1917",
          light: "#292524",
        },
        teal: {
          DEFAULT: "#EA580C",
          light: "#FB923C",
          lighter: "#FED7AA",
        },
        accent: {
          DEFAULT: "#0369A1",
          light: "#38BDF8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
