import React from "react";

function ToggleButton() {
  let darkModeOn = true;

  const handleMode = () => {
    console.log(darkModeOn);
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log("Dark Mode");
    } else {
      console.log("Light Mode");
    }
  };
  return (
    <>
      <button onClick={handleMode}>Change Mode</button>
    </>
  );
}

export default ToggleButton;
