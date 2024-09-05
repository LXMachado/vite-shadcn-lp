const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Primary using Indigo spectrum
        primary: {
          DEFAULT: "#818cf8", // Primary base
          50: "#eef2ff",     // Lightest Indigo
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",    // Primary default (Indigo)
          600: "#4f46e5",    // Darker Indigo
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",    // Darkest Indigo
        },
        
        // Secondary using Violet spectrum
        secondary: {
          DEFAULT: "#8b5cf6",  // Base Violet
          50: "#f5f3ff",      // Lightest Violet
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",     // Violet base
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",     // Darker Violet
          900: "#4c1d95",
        },

        // Accent using Purple spectrum
        accent: {
          DEFAULT: "#a78bfa", // Purple base
          50: "#faf5ff",      // Lightest Purple
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",     // Mid Purple
          600: "#9333ea",     // Accent base (Purple)
          700: "#7e22ce",     
          800: "#6b21a8",     // Darker Purple
          900: "#581c87",     // Darkest Purple
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
