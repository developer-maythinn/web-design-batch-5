import React from "react";
import { useInput } from "./UseInputHook";

function Input() {
  const [name, handleChange] = useInput("");
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {name}
    </>
  );
}

export default Input;
