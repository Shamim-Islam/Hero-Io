import React from "react";
import appErrorImg from "../../assets/App-Error.png";
import { NavLink } from "react-router";

const AppNotFound = () => {
  return (
    <div className="text-center p-[80px] flex flex-col items-center">
      <img src={appErrorImg} alt="" />
      <h1 className="text-[48px] font-semibold mt-5">OPPS!! APP NOT FOUND</h1>
      <p className="text-[20px] text-[#627382] mt-3">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <NavLink to="/">
        <button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-10 py-3 rounded-md text-white text-[16px] font-semibold mt-10">
          Go Back!
        </button>
      </NavLink>
    </div>
  );
};

export default AppNotFound;
