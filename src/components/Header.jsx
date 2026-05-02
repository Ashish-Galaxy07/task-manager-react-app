import React from "react";

const Header = ({ taskCount }) => {
  return (
    <header className="header">
      <h1>Task Manager</h1>
      <p>{taskCount} task{taskCount !== 1 ? "s" : ""}</p>
    </header>
  );
};

export default Header;