"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    background: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <nav style={styles}>
      <h3>My Website</h3>
      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>
    </nav>
  );
}
