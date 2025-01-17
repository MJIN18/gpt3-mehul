import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

// BEM -> Block Element Modifier

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {isOpen ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setIsOpen(true)} />
        )}
        {isOpen && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
