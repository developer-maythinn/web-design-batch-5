import React, { Component } from "react";
import { Nav } from "./Header";

class Footer extends Component {
  render() {
    return (
      <>
        <h2>Footer Component</h2>
        <Nav bgColor={"green"} />
      </>
    );
  }
}

export default Footer;
