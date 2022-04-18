import React from "react";
import { Link } from "react-router-dom";
import "./MidBanner.css";
const MidBanner = () => {
  return (
    <div className="midbanner-section">
      <div className="midbanner-bg">
        <div className="mid-banner">
          <div className="midbanner-content">
            <div className="midbanner-title">
              <p>SALE UP TO 30% OFF ALL ITEMS</p>
              <h2>
                BE THE FIRST TO <br></br>GET LIMITED EDITIONS
              </h2>
            </div>
          </div>
          <div className="midbanner-button">
            <Link to={"/products"}>
              <button className="mid-button">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
