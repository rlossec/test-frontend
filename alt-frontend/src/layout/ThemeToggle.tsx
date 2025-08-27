import { useTheme } from "../hooks/useTheme";
import { SunIcon } from "../icons/others/SunIcon";
import { MoonIcon } from "../icons/others/MoonIcon";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 text-text-light">
      {theme === "dark" ? (
        <SunIcon className="text-yellow-500" />
      ) : (
        <MoonIcon className="text-gray-500" />
      )}
    </button>
  );
}
