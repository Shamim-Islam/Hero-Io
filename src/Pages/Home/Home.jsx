import React from "react";
import googlePlay from "../../assets/googleplay.png";
import appStore from "../../assets/appstore.png";
import bannerImg from "../../assets/hero.png";

const Home = () => {
  return (
    <div className="">
      <section className="flex flex-col justify-center items-center max-w-[1440px] mx-auto">
        <div className="text-center mt-[80px]">
          <h1 className="text-[72px] font-bold ">
            We Build <br />
            <span className="font-black bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-[#627382] text-xl my-5">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className="my-10">
            <a
              className="btn text-lg font-semibold"
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={googlePlay} alt="" className="p-1" />
              Google Play
            </a>
            <a
              className="btn ml-5 text-lg font-semibold"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={appStore} alt="" className="p-1" />
              App Store
            </a>
          </div>
        </div>
        <img src={bannerImg} alt="" className="max-w-[50%] mt-5" />
      </section>
      <section className="text-center p-[80px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
        <h1 className="text-[48px] font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex justify-around mt-8">
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

export default Home;
