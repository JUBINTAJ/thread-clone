import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        rotate: 'rotate 1.5s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg) translateX(5rem)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg) translateX(5rem)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
