/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#910F0F",
          "primary-content": "#fff",
          secondary: "#C4C4C4",
          "secondary-content": "#000",
          accent: "#6f6900",
          "accent-content": "#e0e0d0",
          neutral: "#291500",
          "neutral-content": "#d0cbc5",
          "base-100": "#fff",
          "base-200": "#DFE0EB",
          "base-300": "#DFE0EB",
          "base-content": "#121616",
          info: "#0096cf",
          "info-content": "#000810",
          success: "#00C500",
          "success-content": "#fff",
          warning: "#FFCA40",
          "warning-content": "#160900",
          error: "#C8151C",
          "error-content": "#fff",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
