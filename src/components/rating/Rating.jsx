import React from "react";
import "./Rating.css";

const Rating = ({ rate }) => {
  return (
    <>
      {rate === 1 ? (
        <div className="rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star not"></span>
          <span className="fa fa-star not"></span>
          <span className="fa fa-star not"></span>
          <span className="fa fa-star not"></span>
        </div>
      ) : rate === 2 ? (
        <div className="rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star not"></span>
          <span className="fa fa-star not"></span>
          <span className="fa fa-star not"></span>
        </div>
      ) : rate === 3 ? (
        <div className="rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star not"></span>
          <span className="fa fa-star not"></span>
        </div>
      ) : rate === 4 ? (
        <div className="rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star not"></span>
        </div>
      ) : rate === 5 ? (
        <div className="rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      ) : null}
    </>
  );
};

export default Rating;
