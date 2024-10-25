import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function BookShop() {
  const themeValues = useContext(ThemeContext);
  console.log(themeValues);

  return <div>BookShop</div>;
}

export default BookShop;
