import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="text-center p-[80px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
        <h1 className="text-[48px] font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex justify-around mt-8 flex-col md:flex-row">
          <div>
            <p className="text-[16px]">Total Downloads</p>
            <h1 className="text-[64px] font-black">29.6M</h1>
            <p className="text-[16px]">21% more than last month</p>
          </div>
          <div>
            <p className="text-[16px]">Total Reviews</p>
            <h1 className="text-[64px] font-black">906K</h1>
            <p className="text-[16px]">46% more than last month</p>
          </div>
          <div>
            <p className="text-[16px]">Active Apps</p>
            <h1 className="text-[64px] font-black">132+</h1>
            <p className="text-[16px]">31 more will Launch</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
