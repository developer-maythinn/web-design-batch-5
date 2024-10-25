import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleThemeBtn() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Change Theme</button>;
}

export default ToggleThemeBtn;
