import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ToggleThemeBtn from "./ToggleThemeBtn";

function Nav() {
  const themeValues = useContext(ThemeContext);
  const { isLightMode, light, dark, toggleTheme } = themeValues;
  const theme = isLightMode ? light : dark;
  return (
    <>
      <nav className="nav-styles" style={{ background: theme.ui }}>
        <ul>
          <li>
            <Link to="/" style={{ color: theme.syntax }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/book-shop" style={{ color: theme.syntax }}>
              Book Shop
            </Link>
          </li>
          <li className="btn-container">
            <ToggleThemeBtn />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
