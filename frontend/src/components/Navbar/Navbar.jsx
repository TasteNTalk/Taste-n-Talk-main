import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "@fontsource/poppins";
import homeicon from "../../assets/Homeicon.svg";
import tntlogo from "../../assets/tntLogo.png";
import profileicon from "../../assets/profile.svg";
import map from "../../assets/pngegg.png";
import notificationicon from "../../assets/notification.svg";
import coursesicon from "../../assets/Courses.svg";
import favrticon from "../../assets/favourites.svg";
import savedicon from "../../assets/saved .svg";
import carticon from "../../assets/cart.svg";
import blogicon from "../../assets/Blog.svg";
import inboxicon from "../../assets/Inbox.svg";
import communityicon from "../../assets/Community.svg";
import cheffiicon from "../../assets/ChatBot.svg";
import tiffinicon from "../../assets/Tiffin.svg";

const Navbar = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const location = useLocation();
  
  // Get the current path from location to determine active tab
  const currentPath = location.pathname;

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  // Create a custom NavLink component with active state styling
  const CustomNavLink = ({ to, icon, label }) => {
    const isActive = currentPath === to;
    
    return (
      <NavLink
        to={to}
        className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 group hover:shadow-md relative ${
          sidebarExpanded ? "" : "justify-center "
        } ${
          isActive 
            ? "bg-white/25 shadow-lg" 
            : "hover:bg-white/15"
        }`}
      >
        <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 shadow-inner ${
          isActive 
            ? "bg-[#004a8f] scale-110" 
            : "bg-[#004a8f]/60 group-hover:bg-[#004a8f]"
        }`}>
          <img src={icon} alt="" className={`w-5 h-5 ${isActive ? "filter brightness-110" : ""}`} />
        </div>
        <span className={`whitespace-nowrap transition-opacity duration-300 ${
          sidebarExpanded ? "opacity-100" : "opacity-0 absolute"
        } ${isActive ? "font-bold" : ""}`}>{label}</span>
        
        {/* Active indicator */}
        {isActive && (
          <>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4/5 bg-white rounded-l-lg animate-pulse"></span>
            {sidebarExpanded && (
              <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-white/70 rounded-full animate-pulse"></span>
            )}
          </>
        )}
      </NavLink>
    );
  };

  // For header action buttons
  const ActionButton = ({ icon, tooltip, onClick, isActive = false }) => {
    return (
      <div className="relative group">
        <button 
          onClick={onClick}
          className={`text-[24px] rounded-full px-2 bg-transparent border-none cursor-pointer transition-all duration-[0.8s] hover:-translate-y-[3px] ${
            isActive 
              ? "shadow-[0_2px_10px_rgba(255,255,255,0.3)] ring-2 ring-white/30" 
              : "shadow-[0_4px_6px_rgba(0,33,64,0.89)] hover:shadow-lg"
          }`}
        >
          <img 
            src={icon} 
            alt="" 
            width="45px" 
            className={isActive ? "filter brightness-110" : ""}
          />
          {isActive && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
          )}
        </button>
        <span className="invisible group-hover:visible absolute w-auto bg-[#022c43]/90 text-white text-center rounded-md py-1 px-2.5 z-50 bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] whitespace-nowrap text-sm">
          {tooltip}
        </span>
      </div>
    );
  };

  // State to track active header buttons/actions 
  const [activeButtons, setActiveButtons] = useState({
    cart: false,
    saved: false,
    favorites: false,
    notifications: false,
    profile: false,
    map: false
  });

  // Toggle active state for header buttons
  const toggleButtonActive = (buttonName) => {
    setActiveButtons(prev => ({
      ...Object.fromEntries(Object.keys(prev).map(key => [key, false])), // Reset all to false
      [buttonName]: !prev[buttonName] // Toggle the clicked button
    }));
  };

  return (
    <div className="bg-[#022c43] min-h-screen font-serif text-[#e2e4d6] m-0 p-0 box-border">
      <header
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="animate-fadeIn w-full flex items-center justify-between p-3 bg-[#e2e4d6] shadow-lg fixed top-0 left-0 right-0 z-20 h-[87px]">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold hidden md:flex items-center gap-3 text-[#002140]">
            <img src={tntlogo} alt="" width="70px" className="rounded-full" />
            <NavLink to={"/home"}>
              <span className="drop-shadow-xl">Taste'n Talk</span>
            </NavLink>
          </div>
        </div>

        {/* Map Button */}
        <div className="relative group">
          <button
            className={`bg-[#022c43] p-2 rounded-full w-[65px] cursor-pointer transition-all duration-[0.8s] hover:scale-110 ${
              activeButtons.map 
                ? "shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-110" 
                : "shadow-md hover:shadow-lg"
            }`}
            title="Map"
            onClick={() => toggleButtonActive('map')}
          >
            <img src={map} alt="" width="50px" className="border-none" />
            {activeButtons.map && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
            )}
          </button>
          <span className="invisible group-hover:visible absolute w-auto bg-[#022c43]/90 text-white text-center rounded-md py-1 px-2.5 z-50 bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] whitespace-nowrap text-sm">
            Find Nearby Locations
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative w-[30%] max-w-[400px]">
          <input
            type="text"
            placeholder="Search recipes, chefs, or topics..."
            className="w-full py-[10px] pr-[40px] pl-[20px] rounded-[25px] bg-[#022c43] text-[#f8f9fa] italic placeholder-[#f8f9fa] placeholder-italic shadow-[0_4px_6px_rgba(0,33,64,0.89)] border-none transition-all duration-[0.8s] ease-in-out focus:shadow-[0_5px_25px_rgba(0,0,0,0.2)] focus:-translate-y-0.5 focus:outline-none"
          />
          <button className="absolute right-[15px] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border-none text-[#f8f9fa] cursor-pointer">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Create Button with Dropdown */}
        <div className="relative inline-block group">
          <button className="flex items-center justify-center bg-gradient-to-r from-[#002140] to-[#004a8f] text-[#f8f9fa] rounded-[25px] px-3 py-2 shadow-[0_4px_6px_rgba(0,33,64,0.89)] border-none cursor-pointer transition-all duration-[0.8s] hover:shadow-[0_6px_8px_rgba(0,0,0,0.3)] hover:-translate-y-1">
            <span className="text-[16px] font-semibold mr-1">Create </span>{" "}
            <span className="text-purple-300 text-2xl">+</span>
          </button>
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-md min-w-[160px] shadow-lg z-50 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <div className="p-2 rounded-t-lg bg-[#022c43] text-[#e2e4d6] font-semibold text-center border-b border-gray-200">
              Create New
            </div>
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5"
            >
              Post Story
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5"
            >
              Post Videos
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5"
            >
              Post Repi
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5"
            >
              Blogs/Article
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5"
            >
              Go Live
            </a>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center justify-between w-1/4 md:w-1/4 sm:w-full gap-2">
          {/* Cart Button */}
          <ActionButton 
            icon={carticon} 
            tooltip="Repi" 
            isActive={activeButtons.cart}
            onClick={() => toggleButtonActive('cart')}
          />

          {/* Bookmark Button */}
          <ActionButton 
            icon={savedicon} 
            tooltip="Saved Items" 
            isActive={activeButtons.saved}
            onClick={() => toggleButtonActive('saved')}
          />

          {/* Likes Button */}
          <ActionButton 
            icon={favrticon} 
            tooltip="My Favorites" 
            isActive={activeButtons.favorites}
            onClick={() => toggleButtonActive('favorites')}
          />

          {/* Notifications Button */}
          <ActionButton 
            icon={notificationicon} 
            tooltip="Notifications" 
            isActive={activeButtons.notifications}
            onClick={() => toggleButtonActive('notifications')}
          />

          {/* User Account Dropdown */}
          <div className="relative inline-block group">
            <button 
              className={`text-[24px] rounded-full px-2 bg-transparent border-none cursor-pointer transition-transform duration-300 hover:-translate-y-[3px] ${
                activeButtons.profile 
                  ? "shadow-[0_2px_10px_rgba(255,255,255,0.3)] ring-2 ring-white/30" 
                  : "shadow-[0_4px_6px_rgba(0,33,64,0.89)] hover:shadow-lg"
              }`}
              onClick={() => toggleButtonActive('profile')}
            >
              <img
                src={profileicon}
                alt=""
                width="45px"
                className={`rounded-full ${activeButtons.profile ? "filter brightness-110" : ""}`}
              />
              {activeButtons.profile && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
              )}
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-md min-w-[160px] shadow-lg z-50 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-[0.8s]">
              <div className="p-2 rounded-t-lg bg-[#022c43] text-[#e2e4d6] font-semibold text-center border-b border-gray-200">
                My Account
              </div>
              <NavLink
                to={"/myprofile"}
                href="#"
                className={({ isActive }) => 
                  `block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5 ${
                    isActive ? "bg-[#022c43]/20 font-bold" : ""
                  }`
                }
              >
                My Profile
              </NavLink>
              <NavLink
                to="/setting"
                className={({ isActive }) => 
                  `block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5 ${
                    isActive ? "bg-[#022c43]/20 font-bold" : ""
                  }`
                }
              >
                Settings
              </NavLink>
              <NavLink
                to="/feedback"
                className={({ isActive }) => 
                  `block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5 ${
                    isActive ? "bg-[#022c43]/20 font-bold" : ""
                  }`
                }
              >
                Feedback
              </NavLink>
              <NavLink
                to="/help"
                className={({ isActive }) => 
                  `block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5 ${
                    isActive ? "bg-[#022c43]/20 font-bold" : ""
                  }`
                }
              >
                Help?
              </NavLink>
              <NavLink
                to="/report"
                className={({ isActive }) => 
                  `block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5 ${
                    isActive ? "bg-[#022c43]/20 font-bold" : ""
                  }`
                }
              >
                Report
              </NavLink>
              <NavLink
                to="/blocked"
                className={({ isActive }) => 
                  `block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5 ${
                    isActive ? "bg-[#022c43]/20 font-bold" : ""
                  }`
                }
              >
                Blocked
              </NavLink>
              <a
                href="#"
                className="block px-4 py-2 font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5 bg-yellow-100 text-yellow-700"
              >
                Upgrade to Premium
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#022c43]/10 hover:translate-x-1.5"
              >
                Customer Service
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar - Collapsible */}
      <aside 
        className={`fixed top-[87px] left-0 h-[calc(100vh-87px)] bg-gradient-to-b from-[#002140] to-[#00152b] backdrop-blur-md shadow-[5px_0_15px_rgba(0,0,0,0.1)] z-[5] overflow-hidden transition-all duration-500 ${
          sidebarExpanded ? "w-[210px]" : "w-[70px]"
        } border-r border-white/10`}>
        
        {/* Improved Toggle Button at the top */}
        <div 
          className="absolute top-4 right-0 flex items-center justify-center cursor-pointer z-10"
          onClick={toggleSidebar}
        >
          <div className={`flex items-center justify-center bg-[#004a8f] rounded-l-md shadow-lg transition-all duration-300 border-t border-b border-l border-white/20 group hover:bg-[#0063b8] ${
            sidebarExpanded ? "w-8 h-10" : "w-6 h-10"
          }`}>
            <div className="flex items-center justify-center w-full h-full">
              <span className={`text-white text-lg transform transition-transform duration-300 ${
                sidebarExpanded ? "rotate-180" : "rotate-0"
              } group-hover:scale-125`}>
                ›
              </span>
            </div>
          </div>
        </div>
        
        <nav className="flex flex-col gap-3 pt-16 px-2 text-[16px] font-semibold text-[#e2e4d6] overflow-y-auto max-h-full">
          {/* Nav Links - Using custom NavLink component */}
          <CustomNavLink to={"/home"} icon={homeicon} label="Home" />
          <CustomNavLink to={"/shopping"} icon={carticon} label="Shopping" />
          <CustomNavLink to={"/courses"} icon={coursesicon} label="Courses" />
          <CustomNavLink to={"/blogs"} icon={blogicon} label="Blogs" />
          <CustomNavLink to={"/inbox"} icon={inboxicon} label="Inbox" />
          <CustomNavLink to={"/community"} icon={communityicon} label="Community" />
          <CustomNavLink to={"/cheffi"} icon={cheffiicon} label="Chefii" />
          <CustomNavLink to={"/tiffin"} icon={tiffinicon} label="Tiffin" />
          
          {/* If expanded, show premium button at bottom */}
          {sidebarExpanded && (
            <div className="mt-6 px-2">
              <button className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#002140] font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-1 text-sm flex items-center justify-center gap-2">
                <span className="text-xl">⭐</span> Go Premium
              </button>
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content Area - Adjusts based on sidebar width */}
      <main className={`transition-all duration-500 mt-[87px] min-h-screen bg-[#022c43]/80 p-[20px] ${
        sidebarExpanded ? "ml-[210px]" : "ml-[70px]"
      }`}>
        {children}
      </main>
    </div>
  );  
};

export default Navbar;