import React, { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
 
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Click</button>
    </>
  );
}

export default InputFocus;
