import React from "react";
import BannerImage from "../../Images/banner-2-2.jpg";
import BannerImage2 from "../../Images/banner-3-1.jpg";
import BannerImage3 from "../../Images/banner-1-2.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-5 col-sm-6">
            <div className="bg-image">
              <img src={BannerImage} alt="Banner Image" />
            </div>
            <div className="banner-info">
              <div className="info">
                <div className="content">
                  <h3>Dress Watches</h3>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
            <div className="bg-image">
              <img src={BannerImage2} alt="Banner Image" />
            </div>
            <div className="banner-info">
              <div className="info">
                <div className="content">
                  <h3>Dress Watches</h3>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="bg-image">
              <img src={BannerImage3} alt="Banner Image" />
            </div>
            <div className="banner-info">
              <div className="info">
                <div className="content">
                  <h3>Dress Watches</h3>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
