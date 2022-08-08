import React from "react";
import { Link } from "react-router-dom";
export default function CocktailCard({ image, name, id, info, glass }) {
  return (
    <div className="flex flex-col w-[300px] bg-white drop-shadow-2xl rounded-[10px]">
      <div className="mb-[20px] ">
        <img className=" rounded-[10px]" src={image} alt={name} />
      </div>
      <div className="mb-[20px] mx-[25px]">
        <h3 className="text-2xl font-bold text-orange-700">{name}</h3>
        <div className="flex justify-between">
          <div>
            <h4>{glass}</h4>
            <p>{info}</p>
          </div>
          <Link to={`/cocktails/${id}`} className="btn btn-primary btn-details">
            <button className="bg-orange-400 text-white px-[10px] py-[5px] rounded-[5px]">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
