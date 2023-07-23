import React from "react";
import "../Header/Header.css";
import { FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/" className="logo">
          IT Bloggy <FaChartBar className="logo__icon" />
        </Link>
        <ul className="nav">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/create-topic">CREATE A TOPIC</Link>
          </li>
          <li>
            <Link to="/about-us">ABOUT US</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
