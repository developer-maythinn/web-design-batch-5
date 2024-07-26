import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Bag from "./components/Props-children/Bag";
import User from "./components/Props-children/User";
import React from "react";
function App() {
  const userData = [
    { name: "Su Su", age: 25 },
    { name: "John", age: 30 },
    { name: "Rose", age: 35 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello React</h1> */}
        {/* <Button />
        <Header name="Header 1" />
        <Header name="This is Header" text="Hello" /> */}
        {/* <Bag>
          <h1>This is Bag.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            corrupti dolores, impedit cumque tempora architecto accusamus quo
            minima quos a sint! Earum quasi fugiat eius, esse veniam dolores
            unde consequatur!
          </p>
        </Bag>
        <Bag>
          <h2>Hello Bag 2</h2>
        </Bag> */}
        {userData &&
          userData.length > 0 &&
          userData.map((user, index) => {
            return (
              <React.Fragment key={index}>
                <User user={user}></User>
              </React.Fragment>
            );
          })}
      </header>
    </div>
  );
}

export default App;