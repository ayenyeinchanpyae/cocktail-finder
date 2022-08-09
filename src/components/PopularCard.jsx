import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function PopularCard({ image, name, id, glass }) {
  return (
    <div className="flex flex-col w-[300px] divide-y divide-slate-500 space-y-[15px]">
      <div className="mb-[20px] ">
        <img
          className=" rounded-t-[130px] border border-slate-500"
          src={image}
          alt={name}
        />
      </div>

      <div className="mb-[20px] mx-[25px] pt-[20px]">
        <div className="flex justify-start items-center space-x-[20px]">
          <AiFillStar className="text-2xl" />
          <h3 className="font-garamond text-3xl font-bold text-orange-700">
            {name}
          </h3>
        </div>
        <div className="flex justify-between">
          <h4 className="font-garamond text-xl">{glass}</h4>

          <Link to={`/cocktails/${id}`} className="btn btn-primary btn-details">
            <span className="underline font-garamond text-xl">See Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
