import React from "react";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import MidBanner from "../../Components/MidBanner/MidBanner";
import Footer from "../../Components/Share/Footer/Footer";
import Header from "../../Components/Share/Navbar/Header";
import TopBanner from "../../Components/TopBanner/TopBanner";
import ShowReviews from "../../Components/UserReviews/ShowReviews";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <TopBanner></TopBanner>
      {/* <Banner /> */}
      <Product />
      <MidBanner />
      <Categories />
      <ShowReviews />
      <Footer></Footer>
    </div>
  );
};

export default Home;
