"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Profile() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    background: theme === "light" ? "#fff" : "#444",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
  };

  return (
    <div style={styles}>
      <h2>WIRYA</h2>
      <p>SMK TRIRATNA STUDENTS 11 RPL FRONT-END</p>
    </div>
  );
}
