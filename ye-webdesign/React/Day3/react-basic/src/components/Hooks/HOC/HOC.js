import React from "react";
// Higher Order Component

export const withBlueBackground = (WrappedComponent) => {
  return (props) => {
    return (
      <div style={{ background: "blue", color: "#fff", padding: "20px" }}>
        {/* {console.log(props)} */}
        <WrappedComponent {...props} />
      </div>
    );
  };
};
