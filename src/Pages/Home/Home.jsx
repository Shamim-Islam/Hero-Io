import React from "react";
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import { NavLink, useLoaderData } from "react-router";
import AllTrendingApps from "../../Components/allTrendingApps/allTrendingApps";

const Home = () => {
  const appsData = useLoaderData();

  const top8 = appsData.slice(0, 8);

  return (
    <div className="">
      <Hero></Hero>
      <Banner></Banner>
      <AllTrendingApps top8={top8}></AllTrendingApps>
    </div>
  );
};

export default Home;
