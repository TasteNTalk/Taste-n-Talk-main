// src/components/HomePage/HomeHeader.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  return (
    <nav className="w-[94%] mx-auto -mt-[595px] bg-gradient-to-br from-[#e2e4d6] to-[#c4c2c2] rounded-xl shadow-lg overflow-hidden relative ml-[80px]">
      {/* Top Gradient Stripe */}
      <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-r from-[#ff4d4d] via-[#6a5acd] to-[#0099ff]"></div>

      {/* Navigation Items */}
      <div
        className="flex flex-wrap justify-between gap-2 p-4 md:gap-0"
        id="navItems"
      >
        <NavLink
          to="/home"
          end
          className={({ isActive }) =>
            `nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300
    ${
      isActive
        ? "bg-[#e2e4d6] -translate-y-1 shadow-md"
        : "hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md"
    }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`icon text-2xl text-gray-700 transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                🏠
              </div>
              <div
                className={`label text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 group-hover:text-blue-600"
                }`}
              >
                Home
              </div>
              <div
                className={`indicator absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-red-500 to-blue-900 transform -translate-x-1/2 transition-all duration-300 ${
                  isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
              ></div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/home/trending"
          className={({ isActive }) =>
            `nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300
    ${
      isActive
        ? "bg-[#e2e4d6] -translate-y-1 shadow-md"
        : "hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md"
    }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`icon text-2xl text-gray-700 transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                🔥
              </div>
              <div
                className={`label text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 group-hover:text-blue-600"
                }`}
              >
                Trending
              </div>
              <div
                className={`indicator absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-red-500 to-blue-900 transform -translate-x-1/2 transition-all duration-300 ${
                  isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
              ></div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/home/repi"
          className={({ isActive }) =>
            `nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300
    ${
      isActive
        ? "bg-[#e2e4d6] -translate-y-1 shadow-md"
        : "hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md"
    }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`icon text-2xl text-gray-700 transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                📽
              </div>
              <div
                className={`label text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 group-hover:text-blue-600"
                }`}
              >
                Repi
              </div>
              <div
                className={`indicator absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-red-500 to-blue-900 transform -translate-x-1/2 transition-all duration-300 ${
                  isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
              ></div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/home/playlist"
          className={({ isActive }) =>
            `nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300
    ${
      isActive
        ? "bg-[#e2e4d6] -translate-y-1 shadow-md"
        : "hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md"
    }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`icon text-2xl text-gray-700 transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                🎵
              </div>
              <div
                className={`label text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 group-hover:text-blue-600"
                }`}
              >
                Playlists
              </div>
              <div
                className={`indicator absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-red-500 to-blue-900 transform -translate-x-1/2 transition-all duration-300 ${
                  isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
              ></div>
            </>
          )}
        </NavLink>

        <NavLink
          to="/home/history"
          className={({ isActive }) =>
            `nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300
    ${
      isActive
        ? "bg-[#e2e4d6] -translate-y-1 shadow-md"
        : "hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md"
    }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`icon text-2xl text-gray-700 transition-transform ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              >
                🕒
              </div>
              <div
                className={`label text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 group-hover:text-blue-600"
                }`}
              >
                History
              </div>
              <div
                className={`indicator absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-red-500 to-blue-900 transform -translate-x-1/2 transition-all duration-300 ${
                  isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                }`}
              ></div>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default HomeHeader;
