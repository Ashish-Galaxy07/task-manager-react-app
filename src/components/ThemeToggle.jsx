import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀︎" : "⏾"}
      </button>
    </div>
  );
};

export default ThemeToggle;