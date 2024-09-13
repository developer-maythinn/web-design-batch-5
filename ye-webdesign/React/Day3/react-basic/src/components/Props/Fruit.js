import React from "react";
import "./fruit.css";

function Fruit({ name }) {
  const styles = {
    color: "red",
    fontSize: "2rem",
  };
  return (
    <>
      {/* <div style={styles}>{name}</div> */}
      {/* <div style={{ background: "red" }}>{name}</div> */}
      <div className="fruit-styles">{name}</div>
    </>
  );
}

export default Fruit;
