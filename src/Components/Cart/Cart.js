import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Navbar/Header";

const Cart = () => {
  const { selectProduct, setSelectProduct, remove, checkOut, allContexts } = useAuth();
  const { user } = allContexts;
  const { uid } = user;
  console.log(uid);
  // console.log("click", selectProduct);
  const history = useNavigate();
  const totalPrice = selectProduct.reduce((total, product) => total + parseInt(product.price), 0);
  return (
    <div>
      <Header></Header>
      <div className="container">
        {selectProduct.length ? (
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-6">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Title</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selectProduct?.map((iteam, index) => (
                    <tr key={iteam._id}>
                      <td>{index + 1}</td>
                      <td>{iteam.title}</td>
                      <td>
                        {" "}
                        <img style={{ height: "90px", width: "115px" }} src={iteam.image} alt="Product Image" />
                      </td>
                      <td>{iteam.price}</td>
                      <td>
                        <button onClick={() => remove(iteam._id)}>Cencle</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 text-center">
              <div className="total-product">
                <h4>Total Product:{selectProduct.length}</h4>
                <h4>Total Price:{totalPrice.toFixed(2)}$</h4>
                <button onClick={checkOut} className="btn">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1>No Product Selected</h1>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
