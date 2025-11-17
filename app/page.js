"use client";

import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { useContext } from "react";

export default function Page() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

function MainPage() {
  const { theme } = useContext(ThemeContext);

  const pageStyles = {
    background: theme === "light" ? "#fafafa" : "#222",
    minHeight: "100vh",
    padding: "20px",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div style={pageStyles}>
      <h1>Current Theme: {theme}</h1>
      <Navbar />
      <Profile />
    </div>
  );
}
