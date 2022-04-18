import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Navbar/Header";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [specificDetail, setSpecificDetail] = useState([]);
  const { addToCart, allContexts } = useAuth();
  const { user } = allContexts;
  const { uid } = user;
  const history = useNavigate();
  useEffect(
    () =>
      fetch("https://immense-lowlands-46905.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          setDetails(data);
        }),

    []
  );
  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details?.filter((detail) => detail._id == id);
      setSpecificDetail(matchedData);
    }
  }, [details]);
  // console.log(specificDetail);

  return (
    <>
      <Header></Header>
      <div className="pd-section">
        <div className="container">
          <div className="pd-content">
            <div className="row align-items-center">
              {specificDetail?.map((pd) => (
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="pd-image">
                    <img src={pd.image} alt="Image"></img>
                  </div>
                </div>
              ))}

              {specificDetail?.map((product) => (
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="pd-title">
                    <h4>{product.title}</h4>
                    <p className="price-product">${product.price}</p>
                    <hr />
                    <div className="description">
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="pd-buy">
                    <form onSubmit={(e) => e.preventDefault()} className="cart" method="post" enctype="multipart/form-data">
                      <div className="quantity-button">
                        <div className="quantity">
                          <button type="button" className="minus">
                            -
                          </button>{" "}
                          <input type="number" name="quantity" className="input-quantity" step="1" value="1" />
                          <button type="button" className="plus">
                            +
                          </button>{" "}
                        </div>
                        <button
                          onClick={() => {
                            if (uid) {
                              addToCart(product);
                            } else {
                              history("/login");
                            }
                          }}
                          className="single_add_to_cart_button button alt"
                        >
                          Add to cart
                        </button>
                      </div>
                      <button className="button quick-buy">Buy Now</button>{" "}
                    </form>
                  </div>
                  <div className="mt-5">
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
