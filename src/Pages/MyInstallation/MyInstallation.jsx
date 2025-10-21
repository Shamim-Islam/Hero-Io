import React, { useEffect, useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import InstalledApp from "../InstalledApp/InstalledApp";
import NotInstalled from "../InstalledApp/NotInstalled";
import { toast } from "react-toastify";

const MyInstallation = () => {
  const [installed, setInstalled] = useState([]);
  const appsData = useLoaderData();

  const [q, setQ] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("app_installed") || "[]");
    setInstalled(list);
  }, []);

  function handleUninstall(id) {
    const key = "app_installed";
    const list = JSON.parse(localStorage.getItem(key) || "[]").filter(
      (x) => x !== id
    );
    localStorage.setItem(key, JSON.stringify(list));
    setInstalled(list);
    
    toast.info("App uninstalled successfully!");

  }

  const apps = installed
    .map((id) => appsData.find((a) => a.id === id))
    .filter(Boolean);

  // sorting logic
  const sortedApps = useMemo(() => {
    let sorted = [...apps];
    if (sort === "high") {
      sorted.sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else if (sort === "low") {
      sorted.sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    }
    return sorted;
  }, [apps, sort]);

  function parseDownloads(value) {
    if (typeof value === "number") return value;
    if (typeof value !== "string") return 0;
    value = value.toLowerCase().replace(/,/g, "");
    if (value.includes("m")) return parseFloat(value) * 1_000_000;
    if (value.includes("k")) return parseFloat(value) * 1_000;
    return parseFloat(value) || 0;
  }

  return (
    <div className="bg-[#62738214]">
      <section className="py-[80px]  max-w-[1440px] mx-auto">
        <div className="text-center">
          <h1 className="text-[48px] font-bold">Your Installed Apps</h1>
          <p className="text-xl text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center mt-[40px]">
          {" "}
          <h2 className="text-[24px] font-semibold">
            ({sortedApps.length}) Apps Found
          </h2>
          <div>
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
        {sortedApps.length === 0 ? (
          <NotInstalled></NotInstalled>
        ) : (
          <InstalledApp
            sortedApps={sortedApps}
            handleUninstall={handleUninstall}
          ></InstalledApp>
        )}
      </section>
    </div>
  );
};

export default MyInstallation;
