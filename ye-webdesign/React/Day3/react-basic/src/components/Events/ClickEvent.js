import React from "react";

function ClickEvent() {
  //   const handleClick = () => alert("Hello React");
  function handleClick() {
    alert("Hello");
  }
  return (
    <>
      <button onClick={handleClick}>Click Event</button>
      {/* <button onClick={handleClick()}>Click Event</button> auto run */}
      <button onClick={() => handleClick()}>Click Event</button>
    </>
  );
}

export default ClickEvent;
