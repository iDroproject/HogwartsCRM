import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/students"> Students-List </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/dashboard"> Dashboard </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
