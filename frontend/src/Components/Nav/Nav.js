import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <h3>NAVLIST</h3>
      <ul className="nav-links">
        <Link className="link" to="/Boxform">
          <li>BoxForm</li>
        </Link>
        <Link className="link" to="/Boxlist">
          <li>Boxlist</li>
        </Link>
      </ul>
    </div>
  );
}
