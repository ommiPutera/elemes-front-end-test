import React from "react";
import "./Button.css";

const Button = ({ text, onClick, bgColor, color, fontWeight }) => {
  return (
    <div className="btn-container">
      <button
        className="btn"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
          fontWeight: `${fontWeight}`,
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
