// import React from 'react'

import { AMAZON_LOGO } from "../utils/common";
import india from "../assets/india.svg";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex bg-[#131921] p-5">
      <div className="">
        <img className="w-[110px] " src={AMAZON_LOGO} alt="" />
      </div>
      <div className="text-white">
        <CiLocationOn />
        <span>Delivering to India</span>
      </div>
      <div>
        <input type="search" name="" id="" />
        <button className="">
          <CiSearch />
        </button>
      </div>
      <div>
        <img className="w-[20px]" src={india} alt="" />
      </div>
      <div className="text-white">
        <p>Hello, sign in</p>
        <p>Account&Lists</p>
      </div>
      <div className="text-white">
        <p>Returns</p>
        <p>&Orders</p>
      </div>
      <div className="text-white">
        <IoIosCart  size={35}/>
        <p>0</p>
        <p className="text-white">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
