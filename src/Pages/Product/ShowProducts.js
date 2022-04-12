import React, { useEffect, useState } from "react";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/output (1).json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="product-title">
        <h2 className="pd-title">TRENDING PRODUCTS</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products?.map((product) => {
          return (
            <div className=".col-12 col-md-3 col-lg-3">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt="..." style={{ maxHeight: "450px" }} />
                <div className="card-body">
                  <p className="card-name text-uppercase text-center">{product.name}</p>
                  <h5 className="card-title text-uppercase text-center ">{product.title}</h5>
                  <p className="card-price text-center">$: {product.price}</p>
                </div>
                <div className="card-footer">
                  <button className="btn-atc">Add To Card</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowProducts;
