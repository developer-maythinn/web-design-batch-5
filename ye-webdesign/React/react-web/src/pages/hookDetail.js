import React from "react";
import { useParams } from "react-router-dom";
import SelectedImage from "../components/Hooks/UseState/SelectedImage";
import InputFocus from "../components/Hooks/UseRef/InputFocus";
import VideoPlayer from "../components/Hooks/UseRef/VideoPlayer";
import ProductSearch from "../components/Hooks/UseMemo/ProductSearch";
import ProductSearchWithUseMemo from "../components/Hooks/UseMemo/WithoutProductSearch";
import WithoutProductSearch from "../components/Hooks/UseMemo/WithoutProductSearch";
import ShowHide from "../components/Hooks/UseReducer/ShowHide";

function HookDetail() {
  const { id } = useParams();

  return (
    <>
      {/* <h1>{id}</h1> */}
      {id === "useState" ? (
        <>
          <SelectedImage />
        </>
      ) : id === "useRef" ? (
        <>
          <InputFocus />
          <br />
          <VideoPlayer />
        </>
      ) : id === "useEffect" ? (
        <>
          <h1>UseEffect</h1>
        </>
      ) : id === "useMemo" ? (
        <>
          <h1>With UseMemo</h1>
          <ProductSearch />
          <h1>Without UseMemo</h1>
          <WithoutProductSearch />
        </>
      ) : id === "useReducer" ? (
        <>
          <ShowHide />
        </>
      ) : (
        <div>Other</div>
      )}
    </>
  );
}

export default HookDetail;
