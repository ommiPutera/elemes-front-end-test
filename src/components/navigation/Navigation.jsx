import React from "react";
import icon from "./icon.svg";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div>
        <img src={icon} alt="icon" width="25px" style={{ marginBottom: "10px" }} />
        <p>Home</p>
      </div>
      <div>
        <img src={icon} alt="icon" width="25px" style={{ marginBottom: "10px" }} />
        <p>Promotions</p>
      </div>
      <div>
        <img src={icon} alt="icon" width="25px" style={{ marginBottom: "10px" }} />
        <p>Others</p>
      </div>
    </div>
  )
}

export default Navigation;