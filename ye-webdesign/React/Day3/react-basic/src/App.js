import "./App.css";
import sum, { sub, text } from "./common";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Bag from "./components/Props/Bag";
import Fruit from "./components/Props/Fruit";

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

      <Header text="Header" color="red" />
      <Footer />
    </div>
  );
}

export default App;
