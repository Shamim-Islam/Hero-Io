import React, { Suspense, useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import AppCard from "../../Components/AppCard/AppCard";
import AppNotFound from "../AppNotFound/AppNotFound";

const AllApps = () => {
  const appsData = useLoaderData();
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("");
  const apps = appsData.slice();

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    let out = apps.filter((a) => a.title.toLowerCase().includes(term));
    if (sort === "high") out = out.sort((a, b) => b.downloads - a.downloads);
    if (sort === "low") out = out.sort((a, b) => a.downloads - b.downloads);
    return out;
  }, [q, sort, apps]);

  return (
    <div className="bg-[#62738214]">
      <section className="py-[80px] text-center max-w-[1440px] mx-auto">
        <div className="text-center">
          <h1 className="text-[48px] font-bold">Our All Applications</h1>
          <p className="text-xl text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between items-center mt-[40px]">
          <h2 className="text-[24px] font-semibold">
            ({filtered.length}) Apps Found
          </h2>

          <div className="flex gap-8 items-center flex-col md:flex-row">
            <input
              className="search-input border p-2 rounded"
              placeholder="Search apps..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Sort</option>
              <option value="high">Downloads: High-Low</option>
              <option value="low">Downloads: Low-High</option>
            </select>
          </div>
        </div>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          {filtered.length === 0 ? (
            <AppNotFound></AppNotFound>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-[70px] mb-[30px]">
              {filtered.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          )}
        </Suspense>
      </section>
    </div>
  );
};

export default AllApps;
