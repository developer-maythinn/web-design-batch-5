import React from "react";
import PromoHeader from "./PromoHeader";

function Promo() {
  const promoContext = React.createContext();
  const promotion = "50%";
  const text = "Percent";
  return <PromoHeader promotion={promotion} text={text} />;
}

export default Promo;
