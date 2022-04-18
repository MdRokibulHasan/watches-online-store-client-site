import React, { useEffect, useState } from "react";
import "./DashboardHome.css";
const DashboardHome = () => {
  const [orders, setOrders] = useState();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://immense-lowlands-46905.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  useEffect(() => {
    fetch("https://immense-lowlands-46905.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div class="container-fluid px-4">
        <div class="row g-3 my-2">
          <div class="col-md-3">
            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">{products?.length}</h3>
                <p class="fs-5">Products</p>
              </div>
              <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div class="col-md-3">
            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">{orders?.length}</h3>
                <p class="fs-5">Sales</p>
              </div>
              <i class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div class="col-md-3">
            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">3899</h3>
                <p class="fs-5">Delivery</p>
              </div>
              <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div class="col-md-3">
            <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">%25</h3>
                <p class="fs-5">Increase</p>
              </div>
              <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>
        </div>

        <div class="row my-5">
          <h3 class="fs-4 mb-3">Recent Orders</h3>
          <div class="col">
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col" width="50">
                    #
                  </th>
                  <th scope="col">Product</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((iteam, index) => (
                  <tr key={iteam._id}>
                    <td>{index + 1}</td>
                    <td className="text-uppercase">{iteam.title}</td>
                    <td>{iteam.username}</td>

                    <td>{iteam.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
