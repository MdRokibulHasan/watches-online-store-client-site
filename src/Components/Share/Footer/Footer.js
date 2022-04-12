import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <hr />
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="brand-name ">
              <h3>Watch Store</h3>
            </div>
            <div className="">
              <div className="list">
                <div className="social-link">
                  <ul>
                    <li>
                      <Link to="">
                        <i class="lni lni-facebook-oval"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i class="lni lni-instagram-original"></i>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="">
                        <i class="lni lni-twitter-original"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-info container">
          <div className="footer-link">
            <div className="row">
              <div className="information col-lg-3 col-md-3">
                <h2 className="text-uppercase ">information</h2>
                <div className="information-link">
                  <ul>
                    <li>
                      <Link to="">Shipping</Link>
                    </li>
                    <li>
                      <Link to="">Warranty & Authenticity</Link>
                    </li>
                    <li>
                      <Link to="">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="information col-lg-3 col-md-3">
                <h2 className="text-uppercase ">Helps</h2>
                <div className="information-link">
                  <ul>
                    <li>
                      <Link to="">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="">About Us</Link>
                    </li>
                    <li>
                      <Link to="">Reviews</Link>
                    </li>
                    <li>
                      <Link to="">Terms Of Service</Link>
                    </li>
                    <li>
                      <Link to="">Refund Policy Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="information col-lg-3 col-md-3">
                <h2 className="text-uppercase">Service</h2>
                <div className="information-link">
                  <ul>
                    <li>
                      <Link to="">Sale</Link>
                    </li>
                    <li>
                      <Link to="">Quick Ship </Link>
                    </li>
                    <li>
                      <Link to="">New Designs</Link>
                    </li>
                    <li>
                      <Link to="">Protection Plan</Link>
                    </li>
                    <li>
                      <Link to="">Gift Cards</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="information col-lg-3 col-md-3">
                <h2 className="text-uppercase ">Categories</h2>
                <div className="information-link">
                  <ul>
                    <li>
                      <Link to="">Watches</Link>
                    </li>
                    <li>
                      <Link to="">Watch Accessories</Link>
                    </li>
                    <li>
                      <Link to="">Clock</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>Copyright © 2022. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
