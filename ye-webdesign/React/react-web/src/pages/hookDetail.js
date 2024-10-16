import React from "react";
import { useParams } from "react-router-dom";
import SelectedImage from "../components/Hooks/UseState/SelectedImage";

function HookDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h1>{id}</h1>
      {id === "useState" ? (
        <>
          <SelectedImage />
        </>
      ) : (
        <div>Other</div>
      )}
    </>
  );
}

export default HookDetail;
