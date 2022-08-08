import React from "react";
import { FiSend } from "react-icons/fi";
import mail from "../images/mail.eps";
const Contact = () => {
  return (
    <div className="flex mb-8 xl:mb-16 mt-[50px] lg:ml-[100px]">
      <div className="lg:flex flex-1 hidden">
        <img src={mail} alt="" />
      </div>
      <div className="flex flex-1 flex-col justify-center space-y-8">
        <p className="text-xl font-bold">Contact Us</p>
        <p className="w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          repudiandae architecto qui adipisci in officiis,
        </p>
        <input
          type="email"
          placeholder="your email"
          className="w-[50%] h-[40px]"
        />
        <input
          type="text"
          placeholder="your inquires..."
          className="w-[50%] h-[40px]"
        />
        <button className="flex justify-center items-center text-white bg-slate-700 w-[20%] space-x-[10px] py-[5px] rounded-[5px]">
          <span>Send</span>
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default Contact;
