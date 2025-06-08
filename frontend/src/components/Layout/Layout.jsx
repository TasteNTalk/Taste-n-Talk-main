// src/components/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Yeh us page ko render karega jo match kare route se */}
    </div>
  );
};

export default Layout;

// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/Navbar"; // Or whatever navbar you're using

// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet /> {/* This is REQUIRED to render child routes */}
//     </div>
//   );
// };

// export default Layout;

