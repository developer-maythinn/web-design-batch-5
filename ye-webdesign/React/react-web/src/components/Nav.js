import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/hooks/useState">UseState</Link>
        </li>
        <li>
          <Link to="/hooks/useEffect">UseEffect</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
