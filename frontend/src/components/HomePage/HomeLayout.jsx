
// src/components/HomePage/HomeLayout.jsx

import React from "react";
import HomeHeader from "./HomeHeader";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <HomeHeader />
      <div className="mt-6 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;


// import React from "react";
// import HomeHeader from "./HomeHeader";
// import { Outlet } from "react-router-dom";

// const HomeLayout = () => {
//   return (
//     <div>
//       <HomeHeader />
//       <Outlet />
//     </div>
//   );
// };

// export default HomeLayout;