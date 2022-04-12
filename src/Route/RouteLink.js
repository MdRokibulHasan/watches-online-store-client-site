import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "../Components/Share/Footer/Footer";
import Header from "../Components/Share/Navbar/Header";

import Home from "../Pages/Home/Home";
import Login from "../Pages/UserInformation/Login/Login";
import Regiser from "../Pages/UserInformation/Register/Regiser";
const RouteLink = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regiser />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default RouteLink;
