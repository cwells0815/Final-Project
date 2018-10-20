import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";

const NavTabs = () => (
   
<ul className="nav nav-tabs nav-elements">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/Favorite"
        className={
          window.location.pathname === "/Favorite" ? "nav-link active" : "nav-link"
        }
      >
        Favorites
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/findAfilm"
        className={
          window.location.pathname === "/findAfilm" ? "nav-link active" : "nav-link"
        }
      >
        Find A Film
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/signin"
        className={
          window.location.pathname === "/signin" ? "nav-link active" : "nav-link"
        }
      >
        Sign In
      </Link>
    </li>


  </ul>
);

export default NavTabs;