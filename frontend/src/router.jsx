import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomeLayout from "./components/HomePage/HomeLayout";
import Home from "./components/HomePage/Home";
import Trending from "./components/HomePage/Trending";
import Repi from "./components/HomePage/Repi";
import Playlist from "./components/HomePage/Playlist";
import History from "./components/HomePage/History";
// import YourContent from "./components/HomePage/YourContent"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="trending" element={<Trending />} />
      <Route path="repi" element={<Repi />} />
      {/* <Route path="your-content" element={<YourContent />} /> */}
      <Route path="playlist" element={<Playlist />} />
      <Route path="history" element={<History />} />
      <Route path="*" element={<div>404 | Page Not Found</div>} />
    </Route>
  )
);

export default router;
