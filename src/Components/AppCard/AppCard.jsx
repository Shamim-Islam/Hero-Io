import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, title, companyName, downloads, ratingAvg } = app || {};

  return (
    <Link to={}>
      <div className="shadow-sm p-4 bg-white rounded-xl">
        <img src={image} alt="" className="bg-gray-200 rounded-xl" />
        <h3 className="text-[20px] font-medium mt-6">
          {title} - {companyName}
        </h3>
        <div className="flex justify-between mt-5 font-bold">
          <div className="flex items-center gap-2 bg-[#d9d9d978] rounded-xl text-[#00d390] p-2">
            <img src={downloadImg} alt="" className="w-[20px] h-[20px]" />
            <p>{downloads}</p>
          </div>
          <div className="flex items-center gap-2 bg-[#fff0e1] rounded-xl text-[#ff8811] px-3">
            <img src={ratingImg} alt="" className="w-[20px] h-[20px]" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
