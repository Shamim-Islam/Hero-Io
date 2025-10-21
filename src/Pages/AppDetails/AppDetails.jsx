import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { toast } from "react-toastify";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const appID = parseInt(id);
  const data = useLoaderData();
  const [installed, setInstalled] = useState(false);

  const appArray = Array.isArray(data) ? data : data.apps || [];
  const singleApp = appArray.find((app) => app.id === appID);
  // console.log(singleApp);

  useEffect(() => {
    const installedList = JSON.parse(
      localStorage.getItem("app_installed") || "[]"
    );
    setInstalled(installedList.includes(singleApp?.id));
  }, [singleApp]);

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    ratings,
    size,
  } = singleApp || {};

  function handleInstall() {
    const key = "app_installed";
    const installedList = JSON.parse(localStorage.getItem(key) || "[]");
    if (!installedList.includes(singleApp.id)) {
      installedList.push(singleApp.id);
      localStorage.setItem(key, JSON.stringify(installedList));
      setInstalled(true);

      toast.success(`${singleApp.title} installed successfully!`);
    } else {
      toast.warning(`${singleApp.title} is already installed!`);
    }
  }

  const convertCount = (value) => {
    if (typeof value === "string") {
      if (value.toLowerCase().includes("k")) {
        return parseFloat(value) * 1000;
      } else if (value.toLowerCase().includes("m")) {
        return parseFloat(value) * 1000000;
      }
    }
    return Number(value);
  };

  const formattedData = ratings.map((item) => ({
    ...item,
    count: convertCount(item.count),
  }));

  return (
    <div className="bg-[#62738214]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-4 pt-14 pb-4 gap-10">
          <div className="col-span-1">
            <img src={image} alt="" className="p-12 bg-white rounded-xl" />
          </div>
          <div className="col-span-3">
            <h1 className="text-[32px] font-bold">{title}</h1>
            <p className="text-[20px] text-gray-500">
              Developed by{" "}
              <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>{" "}
            </p>
            <div className="divider"></div>
            <div className="flex gap-18 items-center justify-baseline">
              <div>
                <img src={downloadImg} alt="" />
                <p className="text-[16px]">Downloads</p>
                <p className="text-[40px] font-black">{downloads}</p>
              </div>
              <div>
                <img src={ratingsImg} alt="" />
                <p className="text-[16px]">Avarage Ratings</p>
                <p className="text-[40px] font-black">{ratingAvg}</p>
              </div>
              <div>
                <img src={reviewImg} alt="" />
                <p className="text-[16px]">Total Reviews</p>
                <p className="text-[40px] font-black">{reviews}</p>
              </div>
            </div>
            <button
              className={`bg-[#00d390] mt-[20px] cursor-pointer py-[14px] px-[20px] rounded-md text-white text-[18px] font-semibold ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00d390] hover:bg-[#00b97e]"
              }`}
              onClick={handleInstall}
              // disabled={installed}
            >
              {installed ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        <div className="divider"></div>

        {/* rechart */}
        <div className="w-full h-[300px] mb-10">
          <h2 className="text-2xl font-bold mb-4">Ratings</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={formattedData}
              margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar
                dataKey="count"
                fill="#FF9800"
                barSize={25}
                radius={[5, 5, 5, 5]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="divider"></div>

        <div className="mt-10 pb-20">
          <h3 className="text-2xl font-bold mb-6">Description</h3>
          <p className="small text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
