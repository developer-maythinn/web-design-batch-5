import React, { useReducer } from "react";

const initialState = {
  showText: false,
  changeStyleFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

function reducer(state, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case HIDE_TEXT:
      return {
        ...state,
        showText: false,
      };
    case SHOW_TEXT:
      return {
        ...state,
        showText: true,
      };
    case CHANGE_TEXT_STYLE:
      return {
        ...state,
        changeStyleFlag: !state.changeStyleFlag,
      };
    default:
      return state;
  }
}

function ShowHide() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { showText, changeStyleFlag } = state;
  return (
    <>
      {/* {showText ? (
        <h3
          style={{ background: changeStyleFlag ? "blueViolet" : "transparent" }}
        >
          Text component
        </h3>
      ) : (
        <h3></h3>
      )} */}
       <h3
          style={{ background: changeStyleFlag ? "blueViolet" : "transparent",
            visibility: showText ? "visible" : "hidden"
           }}
        >
          Text component
        </h3>
      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })} disabled={showText ? false: true}>
        Toggle Style Change
      </button>
    </>
  );
}

export default ShowHide;
