import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-16 mt-[50px] lg:ml-[100px]">
      <div className="flex flex-col lg:flex-row">
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <p className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            Find A Little Taste of Heaven
          </p>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repudiandae architecto qui adipisci in officiis, aperiam sequi atque
            perferendis eos,
          </p>
          <Link to={"/cocktails"}>
            <button className="bg-orange-400 flex items-center space-x-[5px] text-white px-3 py-2 rounded-[5px]">
              <p>Explore</p>
              <BiLinkExternal />
            </button>
          </Link>
        </div>
        <div className="hidden flex-1 lg:flex flex-end ">
          <img src="" className="lg:w-auto lg:h-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
