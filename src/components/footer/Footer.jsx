import React from "react";
import Logo from "../header/logo.png";
import PhoneIcon from "./phone.svg";
import Instagram from "./instagram.svg";
import Mail from "./mail.svg";
import Mail1 from "./mail1.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="info">
        <img src={Logo} alt="logo" width="150px" />
        <p>
          Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
          Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
        </p>
        <div className="logo-sosmed">
          <div className="mail-icon">
            <img src={Mail} alt="Mail" width="20px" />
          </div>
          <div>
            <img src={PhoneIcon} alt="PhoneIcon" width="20px" />
          </div>
          <div>
            <img src={Instagram} alt="Instagram" width="20px" />
          </div>
        </div>
      </div>
      <div className="categories">
        <div>
          <h2 style={{ marginBottom: "30px" }}>Categories</h2>
          <p>Cupcake</p>
          <p>Pizza</p>
          <p>Kebab</p>
          <p>Salmon</p>
          <p>Doughnut</p>
        </div>
      </div>
      <div className="aboutus">
        <div>
          <h2 style={{ marginBottom: "30px" }}>About Us</h2>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Report Problem</p>
        </div>
      </div>
      <div className="newsletter">
        <div>
          <h2 style={{ marginBottom: "30px" }}>NewsLetter</h2>
          <p style={{ marginBottom: "20px" }}>Get now free 50% discount for alll products on your first order</p>
          <div className="email-container">
            <div className="email">
              <img src={Mail1} alt="Mail" width="20px" style={{ marginRight: "10px" }} />
              <span style={{ fontSize: "14px", color: "#999" }}>elemesid@gmail.com</span>
            </div>
            <div className="email">
              <img src={PhoneIcon} alt="PhoneIcon" width="20px" style={{ marginRight: "10px" }} />
              <span style={{ fontSize: "14px", color: "#999" }}>0888 1111 2222</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
