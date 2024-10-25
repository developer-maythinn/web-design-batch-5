import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import BookShop from "./pages/BookShop";
import Nav from "./components/Nav";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Nav />
        <Routes>
          <Route path="/"></Route>
          <Route path="/book-shop" element={<BookShop />}></Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
