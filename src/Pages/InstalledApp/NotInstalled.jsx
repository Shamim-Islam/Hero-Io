import React from "react";
import appErrorImg from "../../assets/App-Error.png";

const NotInstalled = () => {
  return (
    <div className="text-center p-[80px] flex flex-col items-center">
      <img src={appErrorImg} alt="" />
      <h1 className="text-[48px] font-semibold mt-5">
        OPPS!! No Apps Installed Yet!
      </h1>
      <p className="text-[20px] text-[#627382] mt-3">
        You haven’t installed any apps yet — start exploring and add your first
        one! <br /> Don’t worry, this space won’t stay empty for long — discover
        new apps and get started today!
      </p>
    </div>
  );
};

export default NotInstalled;
