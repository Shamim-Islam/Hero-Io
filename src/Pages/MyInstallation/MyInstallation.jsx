import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ratingImg from "../../assets/icon-ratings.png";
import downloadImg from "../../assets/icon-downloads.png";

const MyInstallation = () => {
  const [installed, setInstalled] = useState([]);
  const appsData = useLoaderData();

  //   const [q, setQ] = useState("");
  //   const [sort, setSort] = useState("");

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
    alert("Uninstalled app");
  }

  const apps = installed
    .map((id) => appsData.find((a) => a.id === id))
    .filter(Boolean);

  return (
    <div className="bg-[#62738214]">
      <section className="py-[80px]  max-w-[1440px] mx-auto">
        <div className="text-center">
          <h1 className="text-[48px] font-bold">Your Installed Apps</h1>
          <p className="text-xl text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {apps.length === 0 ? (
          <div className="card center">No installed apps</div>
        ) : (
          <div className="grid">
            {apps.map((a) => (
              <div className="bg-white rounded-xl mb-5" key={a.id}>
                <div className="flex gap-4 ">
                  <img className="app-img" src={a.image} alt={a.title} />
                  <div>
                    <h4>{a.title}</h4>
                    <div className="flex gap-4 mt-auto font-bold items-center">
                      <div className="flex items-center gap-2 text-[#00d390] p-2">
                        <img
                          src={downloadImg}
                          alt="downloads"
                          className="w-[20px] h-[20px]"
                        />
                        <p className="text-base">{a.downloads}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#ff8811] px-3 py-2">
                        <img
                          src={ratingImg}
                          alt="rating"
                          className="w-[20px] h-[20px]"
                        />
                        <p className="text-base">{a.ratingAvg}</p>
                      </div>
                      <div className="small">{a.size} MB</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 8 }}>
                  <button
                    className="install-btn"
                    onClick={() => handleUninstall(a.id)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyInstallation;

// import React, { Suspense, useState, useMemo } from "react";
// import { useLoaderData } from "react-router-dom";

// const InstalledApps = () => {
//   const appsData = useLoaderData();
//   const [q, setQ] = useState("");
//   const [sort, setSort] = useState("");

//   const filtered = useMemo(() => {
//     const term = q.trim().toLowerCase();
//     let out = apps.filter((a) => a.title.toLowerCase().includes(term));
//     if (sort === "high") out = out.sort((a, b) => b.downloads - a.downloads);
//     if (sort === "low") out = out.sort((a, b) => a.downloads - b.downloads);
//     return out;
//   }, [q, sort, apps]);

//   return (
//     <div className="bg-[#62738214]">
//       <section className="py-[80px] text-center max-w-[1440px] mx-auto">
//

//         <div className="flex justify-between items-center mt-[40px]">
//           <h2 className="text-[24px] font-semibold">
//             ({filtered.length}) Apps Found
//           </h2>

//           <div className="flex gap-8 items-center flex-col md:flex-row">
//             <input
//               className="search-input border p-2 rounded"
//               placeholder="Search apps..."
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//             />
//             <select
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//               className="border p-2 rounded"
//             >
//               <option value="">Sort</option>
//               <option value="high">Downloads: High-Low</option>
//               <option value="low">Downloads: Low-High</option>
//             </select>
//           </div>
//         </div>

//         <Suspense
//           fallback={
//             <span className="loading loading-spinner loading-xl"></span>
//           }
//         >
//           {filtered.length === 0 ? (
//             <AppNotFound></AppNotFound>
//           ) : (
//             <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mt-[70px] mb-[30px]">
//               {filtered.map((app) => (
//                 <AppCard key={app.id} app={app}></AppCard>
//               ))}
//             </div>
//           )}
//         </Suspense>
//       </section>
//     </div>
//   );
// };

// export default InstalledApps;
