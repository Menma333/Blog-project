import React, { Component } from "react";
import "../Header/Header.css";
import { GrCube } from "react-icons/gr";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div>
          <span className="logo">IT Bloggy</span>
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
