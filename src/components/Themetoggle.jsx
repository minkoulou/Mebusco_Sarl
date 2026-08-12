import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Applique/retire la classe .dark sur <html> et mémorise le choix.
 * L'icône pivote + fond en fondu au lieu de sauter d'une icône à l'autre.
 * À placer dans la Navbar (desktop + mobile).
 */
export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme, isDark]);

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/10 transition-colors duration-300 hover:bg-white/20 ${className}`}
    >
      <Sun
        strokeWidth={1.6}
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ease-out ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        strokeWidth={1.6}
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ease-out ${
          isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}