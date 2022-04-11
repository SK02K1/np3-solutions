import { useTheme } from "../contexts";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const getThemeIcon = () => {
    if (theme === "dark") {
      return "light";
    }
    return "dark";
  };
  return (
    <nav className="navbar">
      <h1>NP3</h1>
      <span
        onClick={toggleTheme}
        className="material-icons-outlined theme-icon"
      >
        {`${getThemeIcon()}_mode`}
      </span>
    </nav>
  );
};
