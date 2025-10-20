// import React from "react";
// import downloadImg from "../../assets/icon-downloads.png";
// import ratingImg from "../../assets/icon-ratings.png";
// import { Link } from "react-router";

// const AppCard = ({ app }) => {
//   const { id, image, title, companyName, downloads, ratingAvg } = app || {};

//   return (
//     <Link to={`/AppDetails/${id}`}>
//       <div className="shadow-sm p-4 bg-white rounded-xl">
//         <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-2xl shadow-md p-12">
//           <img src={image} alt={title} className="w-full h-[200px] object-contain " />
//         </div>

//         {/* <img src={image} alt="" className="bg-gray-200 rounded-xl p-12" /> */}
//         <h3 className="text-[20px] font-medium my-5">
//           {title} - {companyName}
//         </h3>

//         <div className="flex justify-between mt-5 font-bold">
//           <div className="flex items-center gap-2 bg-[#d9d9d978] rounded-xl text-[#00d390] p-2">
//             <img src={downloadImg} alt="" className="w-[20px] h-[20px]" />
//             <p>{downloads}</p>
//           </div>
//           <div className="flex items-center gap-2 bg-[#fff0e1] rounded-xl text-[#ff8811] px-3">
//             <img src={ratingImg} alt="" className="w-[20px] h-[20px]" />
//             {ratingAvg}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default AppCard;

import React from "react";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, companyName, downloads, ratingAvg } = app || {};

  return (
    <Link to={`/AppDetails/${id}`}>
      <div className="shadow-sm p-4 bg-white rounded-xl h-full flex flex-col">
        {/* Fixed height image container */}
        <div className="bg-gray-200 rounded-xl p-12 flex items-center justify-center h-[250px] w-full mb-5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Fixed height text container */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-[20px] font-medium mb-5 line-clamp-2 min-h-[56px]">
            {title} - {companyName}
          </h3>

          {/* Stats at bottom */}
          <div className="flex justify-between mt-auto font-bold">
            <div className="flex items-center gap-2 bg-[#d9d9d978] rounded-xl text-[#00d390] p-2">
              <img
                src={downloadImg}
                alt="downloads"
                className="w-[20px] h-[20px]"
              />
              <p className="text-base">{downloads}</p>
            </div>
            <div className="flex items-center gap-2 bg-[#fff0e1] rounded-xl text-[#ff8811] px-3 py-2">
              <img src={ratingImg} alt="rating" className="w-[20px] h-[20px]" />
              <p className="text-base">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
