import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";

import "./Product.css";
const Product = () => {
  const [products, setProducts] = useState([]);
  // const [selectProduct, setSelectProduct] = useState([]);
  const { addToCart, allContexts } = useAuth();
  const { user } = allContexts;
  const { uid } = user;
  const history = useNavigate();
  useEffect(() => {
    fetch("https://immense-lowlands-46905.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDetails = (id) => {
    const uri = `/product/${id}`;
    history(uri);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="product-title">
          <h2 className="pd-title">TRENDING PRODUCTS</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products?.slice(0, 4).map((product) => {
            return (
              <div className=".col-12 col-md-3 col-lg-3">
                <div className="card h-100">
                  <div className="card-image">
                    <img
                      onClick={() => handleDetails(product._id)}
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                      style={{ maxHeight: "450px" }}
                    />
                  </div>
                  {/* <div className="product-details">
                  <h4 className="text-center">Details</h4>
                </div> */}
                  <div className="card-body">
                    <p className="card-name text-uppercase text-center">{product.name}</p>
                    <h5 className="card-title text-uppercase text-center ">{product.title}</h5>
                    <p className="card-price text-center">$: {product.price}</p>
                  </div>
                  <div className="card-footer">
                    <button
                      onClick={() => {
                        if (uid) {
                          addToCart(product);
                        } else {
                          history("/login");
                        }
                      }}
                      className="btn-atc"
                    >
                      Add To Card
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
