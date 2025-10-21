import React from "react";
import googlePlay from "../../assets/googleplay.png";
import appStore from "../../assets/appstore.png";
import bannerImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="bg-[#62738214]">
      <section className="flex flex-col justify-center items-center max-w-[1440px] mx-auto px-4 text-center">
        {/* ===== Hero Text ===== */}
        <div className="mt-[80px]">
          <h1 className="text-[48px] md:text-[72px] font-bold leading-tight">
            We Build <br />
            <span className="font-black bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>

          <p className="text-[#627382] text-lg md:text-xl my-5 max-w-3xl mx-auto">
            At <strong>HERO.IO</strong>, we craft innovative apps designed to
            make everyday life simpler, smarter, and more exciting. <br /> Our
            goal is to turn your ideas into digital experiences that truly make
            an impact.
          </p>

          {/* ===== Store Buttons ===== */}
          <div className="my-10 flex justify-center flex-wrap gap-5">
            <a
              className="btn text-lg font-semibold bg-white hover:bg-[#00d390] hover:text-white transition-all border-none"
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googlePlay}
                alt="Google Play Store"
                className="p-1 w-6 h-6"
              />
              Google Play
            </a>

            <a
              className="btn text-lg font-semibold bg-white hover:bg-[#00d390] hover:text-white transition-all border-none"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appStore}
                alt="Apple App Store"
                className="p-1 w-6 h-6"
              />
              App Store
            </a>
          </div>
        </div>

        {/* ===== Banner Image ===== */}
        <img
          src={bannerImg}
          alt="Hero banner showcasing mobile apps"
          className="md:max-w-[50%] max-w-full mt-5"
        />
      </section>
    </div>
  );
};

export default Hero;
