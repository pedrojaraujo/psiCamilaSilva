import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "desktop-3xl": "1800px",
      },
      fontSize: {
        sm: "14px",
        normal: "16px",
        base: "18px",
        "2lg": "26px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      colors: {
        "default-pink": "#EA8A83",
        "default-green": "#2F4A47",
        "default-greenLight": "#486666",
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
