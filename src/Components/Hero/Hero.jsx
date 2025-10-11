import React from "react";
import googlePlay from "../../assets/googleplay.png";
import appStore from "../../assets/appstore.png";
import bannerImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-[#62738214]">
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
        <img
          src={bannerImg}
          alt=""
          className="md:max-w-[50%] max-w-full mt-5"
        />
      </section>
    </div>
  );
};

export default Hero;
