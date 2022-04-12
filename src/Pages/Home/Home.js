import React from "react";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import MidBanner from "../../Components/MidBanner/MidBanner";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      {/* <Banner /> */}
      <Product />
      <MidBanner />
      <Categories />
    </div>
  );
};

export default Home;
