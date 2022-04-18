import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

import Footer from "../Components/Share/Footer/Footer";
import Header from "../Components/Share/Navbar/Header";
import AuthProvider from "../Contexts/AuthProvider";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";

import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import ShowProducts from "../Pages/Product/ShowProducts";
import Login from "../Pages/UserInformation/Login/Login";
import Regiser from "../Pages/UserInformation/Register/Regiser";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import ManageOrder from "../Pages/Dashboard/ManageOrder/ManageOrder";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import Cart from "../Components/Cart/Cart";
import AddReviews from "../Pages/Dashboard/AddReviews/AddReviews";
import useAuth from "../Components/Hooks/useAuth";
import useFirebase from "../Components/Hooks/useFirebase";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";

const RouteLink = () => {
  return (
    <>
      <AuthProvider>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regiser />} />
          <Route path="/products" element={<ShowProducts />} />
          <Route
            path="/product/:id"
            element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/myorders" element={<MyOrder />} />

            <Route path={`/dashboard/reviews`} element={<AddReviews />} />
            <Route path={`/dashboard/addproduct`} element={<AddProduct />} />
            <Route path={`/dashboard/manageorder`} element={<ManageOrder />} />
            <Route path={`/dashboard/makeadmin`} element={<MakeAdmin />} />
          </Route>
        </Routes>
        {/* <Footer></Footer> */}
      </AuthProvider>
    </>
  );
};

export default RouteLink;
