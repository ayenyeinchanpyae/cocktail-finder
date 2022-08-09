import React from "react";
import { FiSend } from "react-icons/fi";
import mail from "../images/mail.svg";
const Contact = () => {
  return (
    <div className="bg-yellow-100">
      <div className="flex mb-8  mt-[50px] lg:ml-[100px] h-[300px] ">
        <div className="lg:flex flex-1 hidden">
          <img src={mail} alt="" className="w-[500px] h-[300px]" />
        </div>
        <div className="lg:mr-[100px] flex flex-1 flex-col items-center  justify-center space-y-8 shadow-lg">
          <p className="text-xl font-bold">Get our newsletter</p>
          <p className="w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            repudiandae architecto qui adipisci in officiis,
          </p>
          <input
            type="email"
            placeholder="your email"
            className="w-[50%] h-[40px]"
          />
          <button className="flex flex-start justify-center items-center text-white bg-slate-700 w-[20%] space-x-[10px] py-[5px] rounded-[5px]">
            <span>Send</span>
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
