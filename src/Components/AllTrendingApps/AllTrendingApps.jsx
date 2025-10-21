import React from "react";
import AppCard from "../../Components/AppCard/AppCard";
import { NavLink } from "react-router-dom";

const AllTrendingApps = ({ top8 }) => {
  return (
    <div className="bg-[#62738214]">
      <section className="py-[80px] text-center max-w-[1440px] mx-auto">
        <div className="text-center">
          <h1 className="text-[48px] font-bold">Trending Apps</h1>
          <p className="text-xl text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {top8 && top8.length > 0 ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-[70px] mb-[30px]">
            {top8.map((a) => (
              <AppCard key={a.id} app={a} />
            ))}
          </div>
        ) : (
          <p className="text-[#627382] mt-10">
            No trending apps available right now.
          </p>
        )}
        <NavLink to="/apps">
          <button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-10 py-3 rounded-md text-white text-[16px] font-semibold mt-10">
            Show All
          </button>
        </NavLink>
      </section>
    </div>
  );
};

export default AllTrendingApps;
