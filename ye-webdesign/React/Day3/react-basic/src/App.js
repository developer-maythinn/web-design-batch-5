import { Route, Routes } from "react-router-dom";
import "./App.css";
import sum, { sub, text } from "./common";
import ClickEvent from "./components/Events/ClickEvent";
import ToggleButton from "./components/Events/ToggleButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputFormUseState from "./components/Hooks/InputFormUseState";
import InputWithUseState from "./components/Hooks/InputWithUseState";
import SimpleUseState from "./components/Hooks/SimpleUseState";
import UseStateCompontent from "./components/Hooks/UseStateCompontent";
import CRUD from "./components/Mini-projects/CRUD";
import ReCRUD from "./components/Mini-projects/ReCRUD";
import Bag from "./components/Props/Bag";
import Fruit from "./components/Props/Fruit";
import ComponentA from "./components/PropsDrillingAndUseContext/ComponentA";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import Hook from "./pages/hook";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      {/* <Header text="Header text from parent by props" />
      <Header text="Hello React"></Header>
      <p>Sum {sum(3, 4)}</p>
      <p>Sub {sub(10, 2)}</p>
      <p>{text("Hello react")}</p>
      <Footer /> */}

      {/* <Bag title="Promotion" />
      <Bag title="New" />
      <Bag>
        <Fruit name="Pipeapple"></Fruit>
        <Fruit name="Apple"></Fruit>
      </Bag>
      <Bag children={<h2>Hello H2</h2>}></Bag> */}

      {/* <Header text="Header" color="red" />
      <Footer /> */}
      {/* <ClickEvent /> */}
      {/* <ToggleButton /> */}
      {/* <UseStateCompontent /> */}
      {/* <SimpleUseState /> */}
      {/* <InputWithUseState /> */}
      {/* <InputFormUseState /> */}
      {/* <ComponentA /> */}
      {/* <CRUD></CRUD> */}
      {/* <ReCRUD /> */}
      <Navbar />

      <Routes>
        <Route path="/hook" element={<Hook />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
