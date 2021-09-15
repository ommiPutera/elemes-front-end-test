import React from "react";
import Button from "../button/Button";
import Logo from "./logo.png";
import Hot from "./Hot";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="background-header">
      <div className="container-header">
        <div className="header-logo">
          <img src={Logo} alt="logo" width="150px" />
        </div>
        <div className="list-page">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <span>
                <Hot />
              </span>
              Promotions
            </li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="header-signup">
          <div className="masuk">
            <Button text="masuk" color="#333" bgColor="#fff" fontWeight="500" />
          </div>
          <div>
            <Button text="daftar sekarang" bgColor="#8BAC3E" color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
