import React from "react";
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import AllTrendingApps from "../../Components/allTrendingApps/allTrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const appsData = useLoaderData();

  const appsArray = Array.isArray(appsData) ? appsData : appsData?.apps || [];
  const top8 = appsArray.slice(0, 8);

  if (!appsArray.length) return <p>Loading apps...</p>;

  return (
    <div>
      <Hero />
      <Banner />
      <AllTrendingApps top8={top8} />
    </div>
  );
};

export default Home;
