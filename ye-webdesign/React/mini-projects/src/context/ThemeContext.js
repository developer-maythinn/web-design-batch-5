import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [isLightMode, setIsLightMode] = useState(true);
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });
  const [dark, setDark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  });

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <>
      <ThemeContext.Provider value={{ isLightMode, light, dark, toggleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextProvider;
