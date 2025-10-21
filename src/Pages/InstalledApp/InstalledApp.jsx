import React from "react";
import ratingImg from "../../assets/icon-ratings.png";
import downloadImg from "../../assets/icon-downloads.png";

const InstalledApp = ({ sortedApps, handleUninstall }) => {
  return (
    <div className="grid mt-10">
      {sortedApps.map((a) => (
        <div
          className="bg-white rounded-xl mb-5 p-4 flex items-center justify-between"
          key={a.id}
        >
          <div className="flex gap-4 justify-start items-center">
            <img
              className="h-[80px] w-[90px] bg-gray-100 p-2 rounded-xl"
              src={a.image}
              alt={a.title}
            />
            <div>
              <h4 className="text-xl font-medium">{a.title}</h4>
              <div className="flex gap-4 mt-auto text-base font-medium items-center">
                <div className="flex items-center gap-2 text-[#00d390] py-2">
                  <img
                    src={downloadImg}
                    alt="downloads"
                    className="w-[16px] h-[16px]"
                  />
                  <p className="text-base">{a.downloads}</p>
                </div>
                <div className="flex items-center gap-2 text-[#ff8811] px-2 py-2">
                  <img
                    src={ratingImg}
                    alt="rating"
                    className="w-[16px] h-[16px]"
                  />
                  <p className="text-base">{a.ratingAvg}</p>
                </div>
                <div className="small text-[#627382]">{a.size} MB</div>
              </div>
            </div>
          </div>

          <div className="">
            <button
              className="bg-[#00d390] px-4 py-3 text-white text-base font-semibold rounded-sm cursor-pointer"
              onClick={() => handleUninstall(a.id)}
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstalledApp;
