import React, { useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import SearchInput from "./SearchInput";

const Header = () => {
  let [open, setOpen] = useState(false);
  const { cocktails, loading } = useGlobalContext();
  const searchValue = useRef();
  const { setSearchTerm } = useGlobalContext();

  return (
    <div className="w-full relative shadow-md">
      <div className="flex items-center justify-between max-w-[1200px] px-[2em] py-[1.5em]  mx-auto">
        <div>
          <Link to="/">
            <p className="font-oleo text-3xl font-bold ">CheerUp!</p>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center space-x-[2em]">
            <Link to="/cocktails" className="flex justify-center">
              <p className="font-playfair">Cocktails</p>
            </Link>
            <Link to={"/about"}>
              <p className="font-playfair">About Us</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
      >
        {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      {open ? (
        <div className="absolute w-full md:hidden">
          <ul className="flex flex-col bg-orange-100 items-center ] ">
            <Link to="/cocktails">
              <p className="m-[20px]">Cocktails</p>
            </Link>
            <Link to={"/about"}>
              <p className="m-[20px]">About US</p>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
