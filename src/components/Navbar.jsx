import { useAppContext } from "../context/Context";

function Navbar() {
  const { darkMode, toggleTheme } = useAppContext();

  return (
    <nav className="navbar">
      <h2 className="logo">GlowUI</h2>
      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
