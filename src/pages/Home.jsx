import React from "react";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Jumbotron from "../components/jumbotron/Jumbotron";
import dataReceipt from "../data/dataReceipt";
import dataTrending from "../data/dataTrending";
import Rating from "../components/rating/Rating";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import Next from "./icon-next.svg";
import Prev from "./icon-prev.svg";
import "./styles/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <div className="container">
        <div style={{ margin: "40px 0" }}>
          <h2>Browser Our Category</h2>
          <h2 style={{ color: "#8BAC3E" }}>Receipt</h2>
        </div>
      </div>
      <div className="horizontal-scroll-wrapper container">
        {dataReceipt.map((val) => {
          return (
            <div className="item" style={{ backgroundColor: `${val.bgColor}` }}>
              <div>
                <img src={val.pic} alt="Doughnat" width="70px" />
              </div>
              <div>
                <p>{val.name}</p>
                <p>{val.item} Items</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container button-next-prev">
        <button>
          <div>
            <p>Prev</p>
            <img src={Prev} alt="next" width="20px" />
          </div>
        </button>
        <button>
          <div>
            <p>Next</p>
            <img src={Next} alt="next" width="20px" />
          </div>
        </button>
      </div>
      <div className="container">
        <div style={{ margin: "40px 0" }}>
          <h2>Browser Our Trending</h2>
          <h2 style={{ color: "#8BAC3E" }}>Receipt</h2>
        </div>
      </div>
      <div className="container trending" style={{ marginBottom: "30px" }}>
        {dataTrending.map((val) => {
          return (
            <div
              className="item-trending"
              style={{ backgroundColor: `${val.bgColor}`, margin: "20px 0" }}
            >
              <img
                src={val.pic}
                alt="Doughnat"
                className="img-trending"
                style={{ borderRadius: "10px" }}
              />
              <h1 className="trending-name">{val.name}</h1>
              <p
                style={{
                  color: "#8BAC3E",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                {val.item}
              </p>
              <p>
                <Rating rate={val.rating} />
              </p>
            </div>
          );
        })}
      </div>
      <div className="container btn-all-receipt">
        <Button text="all receipt" bgColor="#8BAC3E" color="#fff" />
      </div>
      <div className="container footer-div">
        <Footer />
      </div>
      <Navigation />
    </>
  );
};

export default Home;
