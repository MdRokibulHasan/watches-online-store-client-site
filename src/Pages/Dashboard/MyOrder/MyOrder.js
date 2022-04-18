import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Components/Hooks/useAuth";

const MyOrder = () => {
  const { selectProduct, setSelectProduct, remove, checkOut, allContexts } = useAuth();
  const { user } = allContexts;
  const { uid } = user;
  //   console.log(uid);
  // console.log("click", selectProduct);
  //   const history = useNavigate();
  //   const totalPrice = selectProduct.reduce((total, product) => total + parseInt(product.price), 0);
  return (
    <div>
      <div className="container">
        <div className="myoder-title mt-5">
          <h1 className="text-center">My Orders </h1>
        </div>
        {selectProduct.length ? (
          <div className="m-5 align-item-center">
            <div className="col-lg-8 col-md-8 col-sm-6">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Title</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Product Status</th>
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
                      <td>{iteam.status}</td>
                      <td>
                        <button onClick={() => remove(iteam._id)}>Cencle</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1>No Product Selected</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
