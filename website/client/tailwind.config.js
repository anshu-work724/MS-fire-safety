/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#C41E3A", // Deep fire safety red
          "primary-focus": "#A01A2F",
          "primary-content": "#FFFFFF",
          "secondary": "#1E3A5F", // Corporate blue
          "secondary-focus": "#152A47",
          "secondary-content": "#FFFFFF",
          "accent": "#DC2626", // Alert red for CTAs
          "accent-focus": "#B91C1C",
          "accent-content": "#FFFFFF",
          "neutral": "#374151", // Dark gray for text
          "neutral-focus": "#1F2937",
          "neutral-content": "#FFFFFF",
          "base-100": "#FAFAFA", // Very light background
          "base-200": "#F5F5F5", // Light section background
          "base-300": "#E5E5E5", // Subtle borders
          "base-content": "#1F2937", // Dark text
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
        dark: {
          "primary": "#DC2626", // Slightly brighter red for dark mode
          "primary-focus": "#EF4444",
          "primary-content": "#FFFFFF",
          "secondary": "#2563EB", // Brighter blue for dark mode
          "secondary-focus": "#3B82F6",
          "secondary-content": "#FFFFFF",
          "accent": "#EF4444", // Alert red
          "accent-focus": "#F87171",
          "accent-content": "#FFFFFF",
          "neutral": "#9CA3AF", // Lighter gray for dark mode text
          "neutral-focus": "#D1D5DB",
          "neutral-content": "#1F2937",
          "base-100": "#1A1A1A", // Deep dark background
          "base-200": "#252525", // Dark section background
          "base-300": "#2D2D2D", // Dark borders
          "base-content": "#E5E7EB", // Light text
          "info": "#60A5FA",
          "success": "#34D399",
          "warning": "#FBBF24",
          "error": "#F87171",
        },
      },
    ],
  },
}

