import "./App.css";
import sum, { sub, text } from "./common";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <p>Sum {sum(3, 4)}</p>
      <p>Sub {sub(10, 2)}</p>
      <p>{text("Hello react")}</p>
      <Footer />
    </div>
  );
}

export default App;
