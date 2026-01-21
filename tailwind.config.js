module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Replace royal blue with a gray palette
        royal: "#0b1c2d", // dark gray
        gold: "#d4af37",  // you can keep gold for highlights
        lightGray: "#f5f5f5", // background of sections
        grayPattern: "#e5e7eb",
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        }
        // for subtle grid/pattern
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],

      },
      backgroundImage: {
        // optional subtle pattern
        "gray-pattern": "repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, #f5f5f5 10px, #f5f5f5 20px)"
      }
    }
  },
  plugins: []
};
// helvtica robotpo host wald font
