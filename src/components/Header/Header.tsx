import React, { Component } from "react";
import "../Header/Header.css";
import { FaChartBar } from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>
          <span className="logo">
            IT Bloggy <FaChartBar className="logo__icon" />
          </span>
          <ul className="nav">
            <li>Blog</li>
            <li>CREATE A TOPIC</li>
            <li>SUPPORT</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
