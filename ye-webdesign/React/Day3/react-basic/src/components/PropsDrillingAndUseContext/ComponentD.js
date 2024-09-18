import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div className="box">
        <h1>Component D</h1>
        <div>ComponentD</div>
        <p>{user}</p>
      </div>
    </>
  );
}

export default ComponentD;
