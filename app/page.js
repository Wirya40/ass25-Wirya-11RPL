"use client";
import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#f8f9fa" : "#1e1e1e",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          transition: "0.3s ease-in-out",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow:
          theme === "light"
            ? "0 2px 5px rgba(0,0,0,0.1)"
            : "0 2px 5px rgba(255,255,255,0.1)",
      }}
    >
      <h2>My Navbar</h2>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",
          padding: "8px 16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Toggle Theme
      </button>
    </nav>
  );
};


const Profile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "40px",
        backgroundColor: theme === "light" ? "#fff" : "#2c2c2c",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow:
          theme === "light"
            ? "0 4px 8px rgba(0,0,0,0.1)"
            : "0 4px 8px rgba(255,255,255,0.1)",
      }}
    >
      <h3>Jawir A.G</h3>
      <p>
        {theme === "light"
          ? "Loves bright days and coffee ☕"
          : "Prefers the calm of the night 🌙"}
      </p>
    </div>
  );
};


export default function Page() {
  return (
    <ThemeProvider>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        React Context API – Theme System
      </h1>
      <Navbar />
      <Profile />
    </ThemeProvider>
  );
}
