import React, { useState } from "react";

const AddProduct = () => {
  const [products, setProducts] = useState({});

  const handelonchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...products };
    newProductData[field] = value;
    setProducts(newProductData);
  };
  // console.log(products);
  const handelevent = () => {
    const data = { ...products };

    fetch("https://immense-lowlands-46905.herokuapp.com/products", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          // const newSelected = [...products];
          // setProducts(newSelected);
          alert("Added Product Successfully");
        } else {
          alert("Something wrong");
        }
      });
  };
  return (
    <div>
      <div className="mt-5">
        <h1>Please add your Products</h1>
        <div>
          <div className="d-flex justify-content-center ">
            <div className="events-card shadow-lg my-5 px-5" style={{ height: 450 }}>
              <h3 className="py-3"> Add New Products </h3>

              <div className="form-group my-4">
                <input
                  type="text"
                  name="image"
                  onChange={handelonchange}
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Thambnil"
                />
              </div>

              <div className="form-group my-4">
                <input
                  type="text"
                  name="title"
                  onChange={handelonchange}
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Title"
                />
              </div>
              <div className="form-group my-4">
                <input
                  type="text"
                  name="name"
                  onChange={handelonchange}
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Sub-Title"
                />
              </div>

              <div className="form-group my-4">
                <input
                  type="text"
                  name="description"
                  onChange={handelonchange}
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Description"
                />
              </div>

              <div className="form-group my-4">
                <input
                  type="number"
                  name="price"
                  required
                  onChange={handelonchange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Price "
                />
              </div>

              <button onClick={handelevent} className="btn btn-sucess">
                AddProducts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
