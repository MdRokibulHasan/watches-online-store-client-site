import React from "react";
import ItemImage from "../../Images/p13-450x450.jpg";
import ItemImage2 from "../../Images/p24-450x450.jpg";
import ItemImage3 from "../../Images/p11-450x450.jpg";
import ItemImage4 from "../../Images/p15-450x450.jpg";
import ItemImage5 from "../../Images/banner-2-1.jpg";
import ItemImage6 from "../../Images/banner-1-1.jpg";
import "./Categories.css";
const Categories = () => {
  return (
    <div>
      <div className="categories-section">
        <div className="categories-title">
          <h2>TOP CATEGORIES</h2>
        </div>
        <div className="container">
          <div className=" row justify-content-center">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="categories-content">
                <div className="categories-image">
                  <img src={ItemImage} alt="Image"></img>
                </div>
                <div className="categories-name">
                  <p>Diesel mega Chief</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="categories-content">
                <div className="categories-image">
                  <img src={ItemImage} alt="Image"></img>
                </div>
                <div className="categories-name">
                  <p className="text-center">Daniel Wellington</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="categories-content">
                <div className="categories-image">
                  <img src={ItemImage} alt="Image"></img>
                </div>
                <div className="categories-name">
                  <p>Fossil</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="categories-content">
                <div className="categories-image">
                  <img src={ItemImage} alt="Image"></img>
                </div>
                <div className="categories-name">
                  <p>Mserati</p>
                </div>
              </div>
            </div>
          </div>
          <div className="new-item">
            <div className="item-card">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-12">
                  <div className="item-section">
                    <div className="item">
                      <div className="item-image">
                        <img src={ItemImage6} alt="Image" />
                      </div>
                      <div className="item-content">
                        <div className="item-title">
                          <h2>New Arrivals</h2>
                        </div>
                        <div className="item-button">
                          <button className="item-btn">Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-12">
                  <div className="item-section">
                    <div className="item">
                      <div className="item-image">
                        <img src={ItemImage5} alt="Image" />
                      </div>
                      <div className="item-content">
                        <div className="item-title">
                          <h2>New Arrivals</h2>
                        </div>
                        <div className="item-button">
                          <button className="item-btn">Shop Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
