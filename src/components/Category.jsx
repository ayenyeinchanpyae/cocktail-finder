import React from "react";
import ordinarydrink from "../images/ordinarydrink.jpeg";
import softdrink from "../images/softdrink.png";
import vodka from "../images/vodka.jpeg";
import soft from "../images/soft.jpeg";

const Category = () => {
  return (
    <div className="flex flex-col items-center mb-8 xl:mb-16 mt-[50px] lg:ml-[100px]">
      <p className="text-4xl font-bold text-center mb-[50px]">Top Categories</p>
      <div className="flex space-x-[25px]">
        <div className="flex flex-col items-center justify-center w-[250px] bg-white shadow-lg rounded-[10px]">
          <img src={ordinarydrink} alt="" className="h-[250px]" />
          <p className="mb-[20px]">Ordinary Drink</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[250px] bg-white  shadow-lg rounded-[10px]">
          <img src={softdrink} alt="" className="h-[250px]" />
          <p className="mb-[20px]">Soft Drink</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[250px] bg-white  shadow-lg rounded-[10px]">
          <img src={vodka} alt="" className="h-[250px]" />
          <p className="mb-[20px]">Homemade Liqueur</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[250px] bg-white  shadow-lg rounded-[10px]">
          <img src={soft} alt="" className="h-[250px]" />
          <p className="mb-[20px]">Shot</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
