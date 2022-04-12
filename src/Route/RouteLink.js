import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

import Footer from "../Components/Share/Footer/Footer";
import Header from "../Components/Share/Navbar/Header";
import AuthProvider from "../Contexts/AuthProvider";

import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import ShowProducts from "../Pages/Product/ShowProducts";
import Login from "../Pages/UserInformation/Login/Login";
import Regiser from "../Pages/UserInformation/Register/Regiser";
const RouteLink = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regiser />} />
          <Route path="/products" element={<ShowProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
};

export default RouteLink;
