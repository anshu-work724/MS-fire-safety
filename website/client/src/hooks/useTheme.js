import { useEffect, useState } from "react";

/**
 * Hook for managing DaisyUI theme switching
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to light
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
