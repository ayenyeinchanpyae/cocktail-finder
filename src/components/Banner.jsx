import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import hero from "../images/hero.jpeg";
import star from "../images/star.png";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-[100px] mt-[50px] lg:ml-[100px]">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <p className="text-yellow-900 font-playfair text-4xl lg:text-[58px] leading-none mb-6">
            Find A Little Taste of Heaven
          </p>
          <p className="font-playfair max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repudiandae architecto qui adipisci in officiis, aperiam sequi atque
            perferendis eos,
          </p>
          <Link to={"/cocktails"}>
            <button className="bg-yellow-900 flex items-center space-x-[5px] text-white px-3 py-2 rounded-[5px]">
              <p className="font-playfair">Explore</p>
              <BiLinkExternal />
            </button>
          </Link>
        </div>
        <div className="hidden  flex-1 lg:flex lg:flex-end ">
          <div className="relative rounded-t-[250px] border-2 text-yellow-500">
            <img
              src={hero}
              className="lg:w-[500px] lg:h-auto p-[20px] rounded-t-[250px] "
              alt=""
            />
          </div>
          <img src={star} className="absolute ml-[350px] w-[100px] " alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
