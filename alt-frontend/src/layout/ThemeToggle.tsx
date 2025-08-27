import { useTheme } from "../hooks/useTheme";
import { SunIcon } from "../icons/others/SunIcon";
import { MoonIcon } from "../icons/others/MoonIcon";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-light-border 
                 bg-background-alt text-text"
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
