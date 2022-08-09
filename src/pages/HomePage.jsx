import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Contact from "../components/Contact";
import Popular from "../components/Popular";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      <Popular />
      {/* <Contact /> */}
    </div>
  );
};

export default HomePage;
