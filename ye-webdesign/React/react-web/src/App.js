import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Hooks from "./pages/hooks";
import HookDetail from "./pages/hookDetail";

function App() {
  
  return (
    <div className="App">
      <Nav></Nav>

      <Routes>
        <Route path="/hooks" element={<Hooks />}></Route>
        <Route path="/hooks/:id" element={<HookDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
