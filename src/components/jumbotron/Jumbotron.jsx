import React from "react";
import pic1 from "./pic-1.png";
import Rating from "../rating/Rating";
import Button from "../button/Button";
import "./styles/Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron-container">
      <div className="jumbotron-content">
        <div className="container jumbotron-content-inside">
          <div className="content-1">
            <p>Good Food Us</p>
            <p>Good Mood</p>
          </div>
          <div className="content-2">
            <div className="content-2-image">
              <img src={pic1} alt="pic1" className="pic1" />
            </div>
            <div className="content-2-price">
              <div>
                <img src={pic1} alt="pic1" className="pic1-thumbnail" />
              </div>
              <div>
                <p>Green Salad Tomato</p>
                <p>Tomato</p>
                <p>
                  <Rating rate={2} />
                </p>
              </div>
            </div>
          </div>
          <div className="content-4">
            <p>
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>
          </div>
          <div className="content-5">
            <div>
              <Button text="daftar sekarang" bgColor="#8BAC3E" color="#fff" />
            </div>
            <div>
              <Button
                text="about us"
                bgColor="#eee"
                color="#666"
                fontWeight="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
