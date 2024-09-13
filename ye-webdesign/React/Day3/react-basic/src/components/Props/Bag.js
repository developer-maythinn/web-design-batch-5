import React from "react";
import Fruit from "./Fruit";

// function Bag({ title }) {
//   return (
//     <>
//       <h1>{title}</h1>
//       <Fruit name="apple" />
//       <Fruit name="orange" />
//     </>
//   );
// }


function Bag({ children, title }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}
export default Bag;
