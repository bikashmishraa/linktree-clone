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
      fontFamily: {
        'stylish-regular': ['Stylish', 'serif'],
        'modern-antiqua-regular': ['Modern Antiqua', 'serif'],
        'old-standard-tt-regular': ['Old Standard TT', 'serif'],
        'kumar-one-outline-regular': ['Kumar One Outline', 'serif'],
      },
    },
  },
  plugins: [require('daisyui'),],
};
export default config;