import React, { Component } from "react";
import dailyMart from "../images/daily-mart.PNG";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleClick = (event) => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/home">
              <img className="img" src={dailyMart} alt="daily-mart-logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleClick}
            >
              <MenuIcon className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/home">Home </Link>
            </li>
            <li>
              <Link to="/cart">Your Cart </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
