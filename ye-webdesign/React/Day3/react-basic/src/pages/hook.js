import React from "react";
import SimpleUseEffect from "../components/Hooks/UseEffect/SimpleUseEffect";
import TestWithHOC from "../components/Hooks/HOC/Test1";
import Test2 from "../components/Hooks/HOC/Test2";
import Input from "../components/Hooks/CustomHook/Input";

function Hook() {
  return (
    <>
      {/* <SimpleUseEffect /> */}
      <TestWithHOC title="React" name="JS" />
      {/* <Test2 /> */}
      <Input />
    </>
  );
}

export default Hook;
