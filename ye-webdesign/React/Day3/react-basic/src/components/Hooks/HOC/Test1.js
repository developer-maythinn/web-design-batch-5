import React from "react";
import { withBlueBackground } from "./HOC";
import Test2 from "./Test2";

function Test1() {
  return <div>Hello World</div>;
}

const TestWithHOC = withBlueBackground(Test1);
export default TestWithHOC;
