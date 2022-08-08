import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function PopularCard({ image, name, id, info, glass }) {
  return (
    <div className="flex flex-col w-[300px] divide-y divide-slate-500 ">
      <div className="mb-[20px] ">
        <img className=" rounded-t-[120px]" src={image} alt={name} />
      </div>

      <div className="mb-[20px] mx-[25px]">
        <div className="flex justify-start items-center space-x-[20px]">
          <AiFillStar className="text-2xl" />
          <h3 className="text-2xl font-bold text-orange-700">{name}</h3>
        </div>
        <div className="flex justify-between">
          <div>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link
              to={`/cocktails/${id}`}
              className="btn btn-primary btn-details"
            >
              <span className="underline">Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
