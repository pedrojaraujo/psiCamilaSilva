import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "16px",
        base: "18px",
        xl: "48px",
        "2xl": "64px",
      },
      colors: {
        "default-pink": "#EA8A83",
        "default-green": "#2F4A47",
        "default-bege": "#E2DBC9",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        cormorantGaramond: ["var(--font-cormorant-garamond)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
