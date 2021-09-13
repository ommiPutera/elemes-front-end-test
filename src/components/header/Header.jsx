import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="background-header">
      <div className="container-header">
        <div className="header-logo">
          <p>Logo</p>
        </div>
        <div className="list-page">
          <ul>
            <li>option-1</li>
            <li>option-2</li>
            <li>option-3</li>
            <li>option-4</li>
            <li>option-5</li>
          </ul>
        </div>
        <div className="header-signup">
          <p>Daftar sekarang</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
